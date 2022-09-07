import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/addon/hint/sql-hint.js';
import * as CodeMirror from "codemirror";
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/edit/closebrackets.js'
import {SqlLabServicesService} from "../../services/sqlLab/sql-lab-services.service";
import {SqlJobModule} from "../../module/sql-job-module";



@Component({
  selector: 'app-sql-edit',
  templateUrl: './sql-edit.component.html',
  styleUrls: ['./sql-edit.component.css']
})
export class SqlEditComponent implements OnInit {

  code: any;
  cmOptions: any;
  jobModule: SqlJobModule = new SqlJobModule();

  constructor(private sqlLabSer: SqlLabServicesService) {

  }

  ngOnInit(): void {

    this.codeMirrorInit();
  }

  private jobInit() {
    this.sqlLabSer.getJobModules().then((jobs: any) => {
      if (jobs != null) {
        this.jobModule = jobs;
      }
    });
  }

  private codeMirrorInit() {
    this.code = "o_< enjoy you sql tour... ";
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
      mode: 'text/x-mysql',//选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
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
  }

  executorSql(code: String) {

     this.sqlLabSer.executorSqlTask(code).then((result: any) => {
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
}
