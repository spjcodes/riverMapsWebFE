import {SqlTaskConfig} from "./sql-task-config";

/**
 * author: jiayeli.cn
 * data: 2022/09/07 19:39
 * desc: sql task module class
 */
export class SqlJobModule {

  cluster: String = "default";
  module: String = "";
  dataBase: String = "";
  table: String = "";
  config: SqlTaskConfig = new SqlTaskConfig();
  sqlScripts: String = "";
  isOutputLog: boolean = true;

  clusters: Array<String> = ["default"];
  modules:Array<String> = ["standLone"];
  dataBases: Array<String> = ["default"];
  tables: Array<String> = ["default"];
  configs: Map<String, SqlTaskConfig> = new Map<String, SqlTaskConfig>([["default", new SqlTaskConfig()]]);

}
