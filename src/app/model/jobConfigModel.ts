export class JobConfigModel {

  configname: string = "";

  jmmemory: number = 1;

  tmmemory: number = 1;

  tmnumslots: number = 1;

  defaultparallel: number = 1;

  statebackend: string = "";

  ckdir: string = "";

  savepoint: string = "";

  ckinterval: string = "";

  restartstrategy: string = "";

  restartinterval: string = "";

  failureinterval: string = "";

  dalyinterval: string = "";

  restartattempts: number = 1;

  failurerate: number = 1;

  descr: string = "";

}
