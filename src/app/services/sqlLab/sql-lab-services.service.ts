import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HostConfig} from "../../config/host-config";

@Injectable({
  providedIn: 'root'
})
export class SqlLabServicesService {

  constructor(private httpClient: HttpClient, private hostConfig: HostConfig) { }

  public executorSqlTask(sqlText: String): any {

    const p = {
      "sqlText": sqlText
    }
    return this.httpClient.post("http://localhost:8080/sqlLab/executor", p).toPromise().then((result: any) => {
      console.dir(result);
    });
  }
}
