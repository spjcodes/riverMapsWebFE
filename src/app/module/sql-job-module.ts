import {JobConfigModule} from "./jobConfigModule";

/**
 * author: jiayeli.cn
 * data: 2022/09/07 19:39
 * desc: sql task module class
 */
export class SqlJobModule {

  cluster: String = "default";
  jobType: String = "";
  dataBase: String = "";
  table: String = "";
  config: JobConfigModule = new JobConfigModule();
  sqlScript: String = "";
  isOutputLog: boolean = true;
  jobName: String = "";

}
