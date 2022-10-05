import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HostConfig} from "../../config/host-config";
import {SqlJobModule} from "../../module/sql-job-module";
import {JobConfigModule} from "../../module/jobConfigModule";

@Injectable({
  providedIn: 'root'
})
export class SqlLabServicesService {

  constructor(private httpClient: HttpClient, private hostConfig: HostConfig) { }

  private executorSqlJobURL = "executorSqlTask";
  public executorSqlTask(jobModule: SqlJobModule): any {

    const p = {
      "jobName": jobModule.jobName,
      "config": jobModule.config,
      "jobType": jobModule.jobType,
      "cluster": jobModule.cluster,
      "dataBase": jobModule.dataBase,
      "table": jobModule.table,
      "isOutputLog": jobModule.isOutputLog,
      "sqlScript": jobModule.sqlScript
    };

    console.dir(p)
    // return this.httpClient.post("http://localhost:8080/" + this.executorSqlJobURL, p).toPromise();
    return this.httpClient.post(this.hostConfig.getSqlLabUrl() + this.executorSqlJobURL, p).toPromise();

  }

  private getJobConfigURL = "getJobConfigs";
  getJobConfigList(): any {
    console.dir("getJobconfigs url " + this.hostConfig.getMetadataUrl() + this.getJobConfigURL)
    return this.httpClient.get(this.hostConfig.getMetadataUrl() + this.getJobConfigURL).toPromise();
  }

  private getClusterConfigsURL = "getClusterConfigs";
  getClusterConfigList() {
    return this.httpClient.get(this.hostConfig.getMetadataUrl() + this.getClusterConfigsURL).toPromise();
  }
}
