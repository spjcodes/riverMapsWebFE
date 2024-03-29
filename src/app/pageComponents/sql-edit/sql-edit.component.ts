import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/addon/hint/sql-hint.js';
import * as CodeMirror from "codemirror";
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/edit/closebrackets.js'
import {SqlLabServicesService} from "../../services/sqlLab/sql-lab-services.service";
import {SqlJobModel} from "../../model/sql-job-model";
import {ClusterConfigs} from "../../model/clusterConfigs";
import {JobConfigModel} from "../../model/jobConfigModel";
import {CodemirrorComponent} from "@ctrl/ngx-codemirror";

@Component({
  selector: 'app-sql-edit',
  templateUrl: './sql-edit.component.html',
  styleUrls: ['./sql-edit.component.css']
})
export class SqlEditComponent implements OnInit {

  @ViewChild('#cmEdit') codemirror: CodemirrorComponent | undefined;

  positionDiff: any;
  cmOptions: any;
  logContent: any;
  logOptions: any;
  sqlJobModule: SqlJobModel = new SqlJobModel();
  jobConfig: any = new JobConfigModel();
  jobConfigMap: Map<String, JobConfigModel> = new Map<String, JobConfigModel>();
  clusterConfigs: ClusterConfigs = new ClusterConfigs();
  jobConfigList: Array<Map<String, String>> = [];
  fullscreen: boolean = false;

  constructor(private sqlLabSer: SqlLabServicesService, private renderer: Renderer2, private elementRef: ElementRef) {
  }

  ngOnInit(): void {

    //load clusterConfig list
    this.clusterConfigInit();
    this.codeMirrorInit();
    this.jobConfig = new JobConfigModel();
  }

  private clusterConfigInit() {
    this.sqlLabSer.getClusterConfigList().then((clusterConfigs: any) => {
      //load cluster, model, catalog configs
      if (clusterConfigs.status === 200) {
        this.clusterConfigs = clusterConfigs.result;
      } else {
        console.dir("load cluster metadata fail. please retry or check backEnd service is health");
        alert("load cluster metadata fail. please retry or check backEnd service is health");
      }

      //load jobConfigs
      this.jobConfigInit();
  });

    console.dir(this.clusterConfigs)

  }

  private jobConfigInit() {
    this.sqlLabSer.getJobConfigList().then((result: any) => {
      if (result.status === 200) {
        this.clusterConfigs.jobConfigList = result.result;
        this.clusterConfigs.jobConfigList.forEach(jobConf => {
          this.jobConfigMap.set(jobConf.configName, jobConf);
        })
      } else {
        alert("load jobConfig fail:" + result.desc);
      }
    });
  }

  private codeMirrorInit() {

    this.sqlJobModule.sqlScript = "o_< enjoy you sql tour... ";
    this.cmOptions = {
      /* mode: "text/x-mysql",
       // 缩进格式
       tabSize: 1,
       // 主题，对应主题库 JS 需要提前引入
       // theme: 'zenburn',
       // 显示行号
       lineNumbers: true,
       line: true,
       lineWrapping: true,  // 自动换行
       styleActiveLine: true, // 当前行背景高亮
       smartIndent: true,
       indentUnit: 4,  // 缩进单位为4
       extraKeys: { Ctrl: "autocomplete" }, //避免热键冲突*/
      // 开启全屏功能
      fullScreen: true,
      // 添加自定义的全屏样式
      extraKeys: {
        'F11': (cm: any) => {
          let cmEdit = <HTMLElement>document.querySelector("#cmEdit > div:nth-child(2) > div:nth-child(6)");
          console.log("f11")
          if(cmEdit) {
            let height = "800px";
            cmEdit.style.height = height;
          /*  (<HTMLElement>document.querySelector("#sqlCode"))['style'].height = height;
            (<HTMLElement>document.querySelector(".CodeMirror"))['style'].height = height;*/
          }
          cm.setOption('fullScreen', !cm.getOption('fullScreen'));
        },
        'Esc': (cm: any) => {
          let cmEdit = <HTMLElement>document.querySelector("#cmEdit > div:nth-child(2) > div:nth-child(6)");
          console.dir("esc")
          if(cmEdit) {
            let height = "500px";
            cmEdit.style.height = height;
          /*  (<HTMLElement>document.querySelector("#sqlCode"))['style'].height = height;
            (<HTMLElement>document.querySelector(".CodeMirror"))['style'].height = height;*/
            cmEdit.classList.remove("ngx-codemirror-fullscreen");
          }
          if (cm.getOption('fullScreen')) {
            cm.setOption('fullScreen', false);
          }
        }
      },
      mode: 'text/x-mysql',//选择对应代码编辑器的语言
      smartIndent: true,
      indentUnit: 4,
      autoRefresh: true,
      tabSize: 2,
      indentWithTabs: true,
      lineNumbers: true,
      matchBrackets: true,	//括号匹配
      styleActiveLine: true,  // 当前行背景高亮
      // line: true,
      // theme: 'base16-light',
      autofocus: true,
      hint: CodeMirror.hint.sql,
      // cm.setOption("fullScreen", !cm.getOption("fullScreen"));
      hintOptions: {
        function(cm: any, event: any) {
          //所有的字母和'$','{','.'在键按下之后都将触发自动完成
          if (!cm.state.completionActive &&
            ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 52 || event.keyCode == 219 || event.keyCode == 190)) {
            CodeMirror.commands.autocomplete(cm, undefined, {completeSingle: false});
          }
        }
      },
      lineWrapping: true,         //是否换行
      foldGutter: true,           //是否折叠
    };

    //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
    /*    this.editor.on("keyup", function (cm, event) {
          //所有的字母和'$','{','.'在键按下之后都将触发自动完成
          if (!cm.state.completionActive &&
            ((event.keyCode >= 65 && event.keyCode <= 90 ) || event.keyCode == 52 || event.keyCode == 219 || event.keyCode == 190)) {
            CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
          }
        });*/

    this.logContent = "";
    this.logOptions = {
      mode: 'XML/HTML',
      smartIndent: true,
      indentUnit: 4,
      autoRefresh: true,
      tabSize: 2,
      indentWithTabs: true,
      lineNumbers: true,
      matchBrackets: true,	//括号匹配
      styleActiveLine: true
    };
  }

  toggleFullScreen() {
    this.fullscreen = !this.fullscreen;
    const element = document.querySelector('.ngx-codemirror');
    if (element) {
      if (this.fullscreen) {
        console.log("set fullscreen")
        element.classList.add('ngx-codemirror-fullscreen');
      } else {
        console.log("close fullscreen")
        element.classList.remove('ngx-codemirror-fullscreen');
      }
    }
  }

  executorSql(jobModel: SqlJobModel) {

     this.sqlLabSer.executorSqlTask(jobModel).then((result: any) => {
       if (result.statusCode != 200) {
         alert("executor job failed!\n cause by: " + result.desc);
       }
       console.dir(result);
     });
  }

  onFocus() {
    // alert("onFocus")
  }

  onBlur() {
    // alert("onBlur")
  }

  editConfigs() {
    alert("goto edit config templates");
  }

  isOutput(isOutputLog: boolean) {
    this.sqlJobModule.isOutputLog = !isOutputLog;
  }

  setCluster(event: Event) {
    const clusterName = (<HTMLSelectElement>event.target).value;
    console.log(clusterName);
    this.sqlJobModule.cluster = clusterName;
  }

  setModule(event: Event) {
    const jobType = (<HTMLSelectElement>event.target).value;
    console.log(jobType);
    this.sqlJobModule.jobType = jobType;
  }

  setCatalog($event: Event) {
    const catalogName = (<HTMLSelectElement>$event.target).value;
    console.log(catalogName);
    this.sqlJobModule.catalog = catalogName;
  }

  setTableName($event: Event) {
    const tableName = (<HTMLSelectElement>$event.target).value;
    console.log(tableName);
    this.sqlJobModule.table = tableName;
  }

  selectJobConfig(event : Event) {

    let configName: String = (<HTMLSelectElement>event.target).value;
    console.log(configName);
    this.jobConfig = this.jobConfigMap.get(configName);
    console.dir(this.jobConfig);
  }

  addJobConfig(jobConfig: JobConfigModel) {
    this.sqlLabSer.addJobConfig(jobConfig).then((result: any) => {
      if (result.statusCode != 200) {
        alert("addJobConfig failed! cause by: " + result.desc);
      } else {
        // this.jobConfigInit();
        this.jobConfigMap.set(jobConfig.configName, jobConfig);
      }
      console.log(result.desc);
    });
  }

  newConfig(jobConfig: any) {
    this.jobConfig = new JobConfigModel();
  }

  selectRestartStrategy($event: Event) {
    let restartStrategy = (<HTMLSelectElement>$event.target).value;
    console.log("RestartStrategy: " + restartStrategy);
    this.jobConfig.restartstrategy = restartStrategy;
  }

  selectStateBackend($event: Event) {
    let backend = (<HTMLSelectElement>$event.target).value;
    console.log("stateBackend: " + backend);
    this.jobConfig.statebackend = backend;
  }

  enableCheckPoint($event: Event) {
    let enableValue = (<HTMLSelectElement>$event.target).value;
    console.log("enableCheckPoint:\t", enableValue);
    this.jobConfig.enabCk = enableValue == "enable" ? 1 : 0;
  }

  setCKIntervalTimeType($event: Event) {
    this.jobConfig.checkpoint = (<HTMLSelectElement>$event.target).value;
  }

  setMinPauBetCKTimeType($event: Event) {
    this.jobConfig.minPauseBetwCksTimeType = (<HTMLSelectElement>$event.target).value;
  }

  setRestartIntervalTimeType($event: Event) {
    this.jobConfig.restartIntervalTimTyp = (<HTMLSelectElement>$event.target).value;
  }

  setFailureDelayIntervalTimeType($event: Event) {
    this.jobConfig.faiDelIntTimTyp = (<HTMLSelectElement>$event.target).value;
  }

  setFailureIntervalTimeType($event: Event) {
    this.jobConfig.failInterTimeType = (<HTMLSelectElement>$event.target).value;
  }

  setExtCkClean($event: Event) {
    this.jobConfig.ExteCkClean = (<HTMLSelectElement>$event.target).value;
  }

  setEditorContent($event: any) {
    // console.log($event)
    // if (this.codemirror) {
      const cmEditScroll = this.elementRef.nativeElement.querySelector("#cmEdit > div:nth-child(2) > div:nth-child(6)");
    if (cmEditScroll.offsetHeight > 2160) {
      cmEditScroll['style'].height = "2160px";
      console.log("set height: 2160px")
    }

    // }
  }


  onResize(event: MouseEvent) {
    let diff = this.positionDiff;
    const container = (event.target as HTMLElement).parentNode as HTMLElement;
    let cmEdit = <HTMLElement>document.querySelector("#cmEdit > div:nth-child(2)");
    const startY = event.clientY;
    const startHeight = container['offsetHeight'];
    let startHeightCm = cmEdit['offsetHeight'];
    const onMouseMove = (event: { clientY: number; }) => {
      diff = event.clientY - startY;
      container['style'].height = startHeight + diff + 'px';
      cmEdit['style'].height = startHeightCm + diff + "px";
      (<HTMLElement>document.querySelector("#cmEdit > div:nth-child(2) > div:nth-child(6)"))['style'].height = startHeightCm + diff + "px";
      (<HTMLElement>document.querySelector(".CodeMirror"))['style'].height = startHeightCm + diff + "px";
      (<HTMLElement>document.querySelector("#cmEdit > div:nth-child(2)"))['style'].height = startHeightCm + diff + "px";
      console.log("set codemirror: " + startHeightCm + diff + "px");
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      cmEdit.style.height = startHeightCm + diff + "px";
      (<HTMLElement>document.querySelector("#cmEdit > div:nth-child(2) > div:nth-child(6)"))['style'].height = startHeightCm + diff + "px";
      (<HTMLElement>document.querySelector(".CodeMirror"))['style'].height = startHeightCm + diff + "px";
      (<HTMLElement>document.querySelector("#cmEdit > div:nth-child(2)"))['style'].height = startHeightCm + diff + "px";
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    this.positionDiff = diff;
  }
}
