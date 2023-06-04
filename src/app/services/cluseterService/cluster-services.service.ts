import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HostConfig} from "../../config/host-config";
import {ClusterConfigModule} from "../../model/ClusterConfigModule";

@Injectable({
  providedIn: 'root'
})
export class ClusterServicesService {

  constructor(private httpClient: HttpClient, private hostConfig: HostConfig) { }


  private addClusterConfigURL = "addClusterConfig"
  addClusterConfig(clusterConfig: ClusterConfigModule) {
    let p = {
      "clusterName" : clusterConfig.clusterName,
      "address" : "",
      "hadoopConfDir" : clusterConfig.hadoopConfDir,
      "flinkHome": clusterConfig.flinkHome,
      "flinkConfDir" : clusterConfig.flinkConfDir,
      "flinkClusterLib" : clusterConfig.flinkClusterLib,
      "flinkDistJar" : clusterConfig.flinkDistJar,
      "materMemory" : clusterConfig.materMemory,
      "tmMemory" : clusterConfig.tmMemory,
      "slotPreTm" : clusterConfig.slotPreTm,
      "desc" : clusterConfig.desc
    };
    return this.httpClient.post(this.hostConfig.getMetadataUrl() + this.addClusterConfigURL, p).toPromise();
  }

  private getClusterListURL = "getYarnClusterConfigs";
  getClusterList() {
    // return this.httpClient.get(this.hostConfig.getMetadataUrl() + this.getClusterListURL).toPromise();
    return this.httpClient.get(this.hostConfig.getMetadataUrl() + this.getClusterListURL);
  }
}
