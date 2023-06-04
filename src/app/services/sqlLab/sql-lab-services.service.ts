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
      "configuration": {
        "configName": sqlJobModel.configuration.configName,
        "enableCheckpoint": sqlJobModel.configuration.enabCk,
        // "checkpointDir": jobConfig.ckdir,
        "checkpointInterval": sqlJobModel.configuration.ckinterval,
        "checkpointTimeout": sqlJobModel.configuration.ckTimeout,
        "checkpointingMode": sqlJobModel.configuration.ckMode,
        "minPauseBetweenCheckpoints": sqlJobModel.configuration.minPauseBetwCks,
        // "delayInterval": jobConfig.dalyinterval,
        "parallelism_default": sqlJobModel.configuration.defaultparallel,
        "failureNum": sqlJobModel.configuration.failureNum,
        "failureDelayInterval": sqlJobModel.configuration.faiDelInt,
        "failureDelayIntervalTimeType": sqlJobModel.configuration.faiDelIntTimTyp,
        "failureRate": sqlJobModel.configuration.failurerate,
        "taskmanager_memory_process_size": sqlJobModel.configuration.tmmemory,
        "jobmanager_memory_process_size": sqlJobModel.configuration.jmmemory,
        "taskmanager_numberOfTaskSlots": sqlJobModel.configuration.tmnumslots,
        "restartattempts": sqlJobModel.configuration.restartattempts,
        "restartInterval": sqlJobModel.configuration.restartinterval,
        "restartIntervalTimeType": sqlJobModel.configuration.restartIntervalTimTyp,
        "restartStrategy": sqlJobModel.configuration.restartstrategy,
        "savePointDir": sqlJobModel.configuration.savepoint,
        "stateBackend": sqlJobModel.configuration.statebackend,
        "stateBackendPath": sqlJobModel.configuration.statebackendPath,
        "externalizedCheckpointCleanup": sqlJobModel.configuration.ExteCkClean,
        "describe": sqlJobModel.configuration.descr
      },
      "jobType": sqlJobModel.jobType,
      "cluster": sqlJobModel.cluster,
      "dataBase": sqlJobModel.dataBase,
      "table": sqlJobModel.table,
      "isOutputLog": sqlJobModel.isOutputLog,
      "sqlScript": sqlJobModel.sqlScript
    };
    console.log("original jobConfig is: ");
    console.dir(sqlJobModel.configuration);
    console.debug("--------------------------- executor jobModel -----------------------------------------");
    console.dir(sqlJobModel);
    console.debug("---------------------------------------------------------------------------------------");
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

  private addJobConfigURL = "addJobConfig"
  addJobConfig(jobConfig: JobConfigModel) {
    let p = {
      "configName": jobConfig.configName,
      "enableCheckpoint": jobConfig.enabCk,
      // "checkpointDir": jobConfig.ckdir,
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
    console.debug("save 2 backend: " + p)
    return this.httpClient.post(this.hostConfig.getMetadataUrl() + this.addJobConfigURL, p).toPromise();

  }
}
