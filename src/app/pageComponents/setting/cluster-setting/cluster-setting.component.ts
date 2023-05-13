import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClusterConfigModule} from "../../../model/ClusterConfigModule";
import {ClusterServicesService} from "../../../services/cluseterService/cluster-services.service";

@Component({
  selector: 'app-cluster-setting',
  templateUrl: './cluster-setting.component.html',
  styleUrls: ['./cluster-setting.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ClusterSettingComponent implements OnInit {

  clusterConfig: ClusterConfigModule = new ClusterConfigModule();
  clusterConfigList: Array<ClusterConfigModule> = [];
  constructor(private clusterServices: ClusterServicesService) {
  }

  ngOnInit(): void {
      this.initClusterList();
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
    this.clusterServices.getClusterList().then((result: any) => {
      console.log(result)
      this.clusterConfigList = result.result;
    })
  }
}
