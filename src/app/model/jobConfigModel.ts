export class JobConfigModel {

  configName: string = "";

  enabCk: string = "1";

  //AT_LEAST_ONCE
  ckMode: string = "EXACTLY_ONCE";


  ExteCkClean: string = "RETAIN_ON_CANCELLATION";

  jmmemory: number = 1;

  tmmemory: number = 1;

  tmnumslots: number = 1;

  defaultparallel: number = 1;

  //fsStateBackend | memoryStateBackend
  statebackend: string = "";

  ckdir: string = "";

  savepoint: string = "";

  ckinterval: number = 50000;

  ckTimeout: number = 2000;

  minPauseBetwCks: number = 2000;

  restartstrategy: string = "";

  restartinterval: number = 5000;

  failureinterval: number = 2000;

  failInterTimeType: string = "";

  dalyinterval: number = 2000;

  dalyintervalTimeType: string = "";

  restartattempts: number = 1;

  failurerate: number = 1;

  descr: string = "";

}
