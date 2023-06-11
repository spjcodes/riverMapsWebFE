import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClusterConfigModule} from "../../../model/ClusterConfigModule";
import {ClusterServicesService} from "../../../services/cluseterService/cluster-services.service";
import {ResultModel} from "../../../model/ResultModel";
import {ResponseEnums} from "../../../enum/ResponseEnums";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-cluster-setting',
  templateUrl: './cluster-setting.component.html',
  styleUrls: ['./cluster-setting.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ClusterSettingComponent implements OnInit, AfterContentInit {

  clusterConfig: ClusterConfigModule = new ClusterConfigModule();
  // clusterConfigList: Array<ClusterConfigModule> = [];
  clusterConfigMap: Map<String, ClusterConfigModule> = new Map<String, ClusterConfigModule>();

  // private statusCode: ResponseEnums;

  constructor(private clusterServices: ClusterServicesService,   private messageService: MessageService) {
  }

  // @ViewChild('editCloseBtn', { static: false }) closeEditBtn: ElementRef;
  @ViewChild('editCloseBtn', { static: false }) closeEditBtn!: ElementRef;

  @ViewChild('teess', {static: false}) toatet!: ElementRef;

  ngOnInit(): void {
    this.initClusterList()
 }

  ngAfterContentInit(): void {
    // setTimeout(() => this.initClusterList(), 0)
  }

  get getClusterConfigList():  IterableIterator<ClusterConfigModule> {
    return this.clusterConfigMap.values();
  }

  saveClusterInfo() {
    this.clusterServices.addClusterConfig(this.clusterConfig).then((result: any) => {
      let result1: ResultModel = <ResultModel> result;
      if (result1.statusCode != ResponseEnums.OK) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'errorCode: ' + result1.statusCode +"\nerrorMsg: " + result1.result });
      } else {
        this.clusterConfigMap.set(this.clusterConfig.clusterName, this.clusterConfig);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'add config item successful' });
        of(null)
          .pipe(
            delay(800)


      ).subscribe(() => {
            this.closeEditBtn.nativeElement.click();
        })
      }
    })
  }


  autoSetFlinkConfAndLib(flinkHome: string) {
    console.dir("set flink config and lib dir by:" + flinkHome);
    if (flinkHome.trim() != "") {
      if (this.clusterConfig.flinkClusterLib == "" || this.clusterConfig.flinkClusterLib == undefined) {
        this.clusterConfig.flinkClusterLib = this.clusterConfig.flinkHome + "/lib";
      }
      if (this.clusterConfig.flinkConfDir == "" || this.clusterConfig.flinkConfDir == undefined) {
        this.clusterConfig.flinkConfDir = this.clusterConfig.flinkHome + "/config";
      }
    }
  }

  private initClusterList() {
    this.clusterServices
      .getClusterList()
      .subscribe((result: any) => {
        console.log(result)
        result.result
          .forEach((e: ClusterConfigModule) => this.clusterConfigMap.set(e.clusterName, e))
      })
  }

  editClusterConfig(clusterName: String) {
    // @ts-ignore
    this.clusterConfig = this.clusterConfigMap.get(clusterName);
    console.dir(this.clusterConfig);
  }

  newConfig() {
    this.clusterConfig = new ClusterConfigModule();
  }

  deleteByName(clusterName: string) {
    this.clusterServices.deleteByName(clusterName).subscribe({
      next: (res: any)=> {
        let result = <ResultModel> res;
        if (result.statusCode == ResponseEnums.OK || result.statusCode == ResponseEnums.ok) {
          let summ = 'delete config ' + clusterName;
          this.messageService.add({severity: 'success', summary: summ, detail: result.desc.toString()});
          this.clusterConfigMap.delete(clusterName);
        } else {
          let msg = "errorCode: " + result.statusCode + " result: " + result.desc + " desc: " + result.desc;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: msg });
          this.clusterConfigMap.delete(clusterName);
        }
      }, error: (error: any) => {
        console.dir(error);
        let msg = "status: " + error.statusText + "\nerrorName: " + error.name + "\nerrorMsg: " + error.message;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: msg });
      }/*, complete: () => {
        console.log("complete")
      }*/
    });

    this.clusterServices.getClusterList().subscribe({
      next: (value: Object) => {
        // 处理数据
      },
      error: (error: any) => {
        // 处理错误
      },
      complete: () => {
        // 处理完成
      }
    });
  }
}
