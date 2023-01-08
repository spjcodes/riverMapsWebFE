/**
 * author: jiayeli.cn
 * data: 2022/09/07 19:39
 * desc: sql task model class
 */
import {JobConfigModel} from "./jobConfigModel";

export class SqlJobModel {

  jobName: String = "";
  cluster: String = "default";
  jobType: String = "";
  dataBase: String = "";
  table: String = "";
  catalog: String = "";
  configuration: JobConfigModel = new JobConfigModel();
  sqlScript: String = "";
  isOutputLog: boolean = true;

}
