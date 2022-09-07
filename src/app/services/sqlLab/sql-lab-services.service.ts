import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HostConfig} from "../../config/host-config";

@Injectable({
  providedIn: 'root'
})
export class SqlLabServicesService {

  constructor(private httpClient: HttpClient, private hostConfig: HostConfig) { }

  private executorSqlJobURL = "sqlLab/executorSqlTask";
  public executorSqlTask(sqlText: String): any {
    const p = {
      "sqlText": sqlText
    }
    console.dir(p)
    return this.httpClient.post("http://localhost:8080/" + this.executorSqlJobURL, p).toPromise();
  }

  private getJobModlesURL = "";
  getJobModules() {
    const p = {

    };
    return this.httpClient.get(this.hostConfig.getBaseUrl() + this.getJobModlesURL).toPromise();
  }
}
