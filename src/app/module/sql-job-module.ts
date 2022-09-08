import {SqlJobConfig} from "./sql-job-config";

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
  config: SqlJobConfig = new SqlJobConfig();
  sqlScript: String = "";
  isOutputLog: boolean = true;

  clusters: Array<String> = ["default"];
  modules:Array<String> = ["standLone"];
  dataBases: Array<String> = ["default"];
  tables: Array<String> = ["default"];
  configs: Map<String, SqlJobConfig> = new Map<String, SqlJobConfig>([["default", new SqlJobConfig()]]);
  jobName: String = "";

}
