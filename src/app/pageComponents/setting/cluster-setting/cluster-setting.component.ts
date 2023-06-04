import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClusterConfigModule} from "../../../model/ClusterConfigModule";
import {ClusterServicesService} from "../../../services/cluseterService/cluster-services.service";
import {waitForAsync} from "@angular/core/testing";

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

  constructor(private clusterServices: ClusterServicesService) {
  }



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
    this.clusterServices.getClusterList().subscribe((result: any) => {
      console.log(result)
      // this.clusterConfigList = result.result;
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
}
