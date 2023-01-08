import {JobConfigModel} from "./jobConfigModel";
import {ClusterConfigModule} from "./ClusterConfigModule";
import {CatalogConfigModule} from "./CatalogConfigModule";
import {ModuleConfModule} from "./ModuleConfModule";

export class ClusterConfigs {
  clusterConfigList: Array<ClusterConfigModule> = [];
  catalogConfigList:Array<CatalogConfigModule> = [];
  moduleConfigList: Array<ModuleConfModule> = [];
  jobConfigList: Array<JobConfigModel> = [];
}
