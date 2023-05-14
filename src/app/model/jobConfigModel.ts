export class JobConfigModel {

  configName: string = "";

  enabCk: string = "1";

  //AT_LEAST_ONCE
  ckMode: string = "EXACTLY_ONCE";

  // ckdir: string = "";

  ckinterval: number = 50000;

  ckTimeout: number = 2000;

  minPauseBetwCks: number = 2000;

  minPauseBetwCksTimeType: number = 2000;

  ExteCkClean: string = "RETAIN_ON_CANCELLATION";

  jmmemory: number = 1;

  tmmemory: number = 1;

  tmnumslots: number = 1;

  defaultparallel: number = 1;

  //fsStateBackend | memoryStateBackend
  statebackend: string = "";

  statebackendPath: string = "";

  savepoint: string = "";

  restartstrategy: string = "";

  restartinterval: number = 5000;

  restartIntervalTimTyp: string = "milliseconds";

  faiDelInt: number = 1000;

  faiDelIntTimTyp: string = "milliseconds";

  failureinterval: number = 2000;

  failInterTimeType: string = "";

  dalyintervalTimeType: string = "";

  restartattempts: number = 1;

  failurerate: number = 1;

  failureNum: number = 1;

  descr: string = "";

}
