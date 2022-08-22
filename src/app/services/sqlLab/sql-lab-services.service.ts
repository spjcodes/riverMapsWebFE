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
    var objectObservable = this.httpClient.post(this.hostConfig.getUrl(), p).toPromise();
    alert(objectObservable)
    return objectObservable;
  }
}
