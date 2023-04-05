import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HostConfig} from "../../config/host-config";
import {SqlJobModel} from "../../model/sql-job-model";
import {JobConfigModel} from "../../model/jobConfigModel";

@Injectable({
  providedIn: 'root'
})
export class SqlLabServicesService {

  constructor(private httpClient: HttpClient, private hostConfig: HostConfig) { }

  private executorSqlJobURL = "executorSqlTask";
  public executorSqlTask(sqlJobModel: SqlJobModel): any {

    const p = {
      "jobName": sqlJobModel.jobName,
      "configuration": sqlJobModel.configuration,
      "jobType": sqlJobModel.jobType,
      "cluster": sqlJobModel.cluster,
      "dataBase": sqlJobModel.dataBase,
      "table": sqlJobModel.table,
      "isOutputLog": sqlJobModel.isOutputLog,
      "sqlScript": sqlJobModel.sqlScript
    };

    console.dir(sqlJobModel);
    // return this.httpClient.post("http://localhost:8080/" + this.executorSqlJobURL, p).toPromise();
    return this.httpClient.post(this.hostConfig.getSqlLabUrl() + this.executorSqlJobURL, sqlJobModel).toPromise();

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

  private addJobConfigURL = "addJobConfig"
  addJobConfig(jobConfig: JobConfigModel) {
   /* let p = {
      "ckdir": jobConfig.ckdir,
      "ckinterval": jobConfig.ckinterval,
      "configname": jobConfig.configName,
      "dalyinterval": jobConfig.dalyinterval,
      "defaultparallel": jobConfig.defaultparallel,
      "failureinterval": jobConfig.failureinterval,
      "failurerate": jobConfig.failurerate,
      "jmmemory": jobConfig.jmmemory,
      "restartattempts": jobConfig.restartattempts,
      "restartinterval": jobConfig.restartinterval,
      "restartstrategy": jobConfig.restartstrategy,
      "savepoint": jobConfig.savepoint,
      "statebackend": jobConfig.statebackend,
      "tmnumslots": jobConfig.tmnumslots
    }*/
    let p = {
      "configName": jobConfig.configName,
      "enableCheckpoint": jobConfig.enabCk,
      "checkpointDir": jobConfig.ckdir,
      "checkpointInterval": jobConfig.ckinterval,
      "checkpointTimeout": jobConfig.ckTimeout,
      "checkpointingMode": jobConfig.ckMode,
      "minPauseBetweenCheckpoints": jobConfig.minPauseBetwCks,
      // "delayInterval": jobConfig.dalyinterval,
      "parallelism_default": jobConfig.defaultparallel,
      "failureNum": jobConfig.failureNum,
      "failureDelayInterval": jobConfig.faiDelInt,
      "failureDelayIntervalTimeType": jobConfig.faiDelIntTimTyp,
      "failureRate": jobConfig.failurerate,
      "taskmanager_memory_process_size": jobConfig.tmmemory,
      "jobmanager_memory_process_size": jobConfig.jmmemory,
      "taskmanager_numberOfTaskSlots": jobConfig.tmnumslots,
      "restartattempts": jobConfig.restartattempts,
      "restartInterval": jobConfig.restartinterval,
      "restartIntervalTimeType": jobConfig.restartIntervalTimTyp,
      "restartStrategy": jobConfig.restartstrategy,
      "savePointDir": jobConfig.savepoint,
      "stateBackend": jobConfig.statebackend,
      "stateBackendPath": jobConfig.statebackendPath,
      "externalizedCheckpointCleanup": jobConfig.ExteCkClean,
      "describe": jobConfig.descr
    }
    return this.httpClient.post(this.hostConfig.getMetadataUrl() + this.addJobConfigURL, p).toPromise();

  }
}
