import {JobConfigModule} from "./jobConfigModule";
import {ClusterConfigModule} from "./ClusterConfigModule";
import {CatalogConfig} from "./CatalogConfig";
import {ModuleConfModule} from "./ModuleConfModule";

export class ClusterConfigs {
  clusterConfigList: Array<ClusterConfigModule> = [];
  catalogConfigList:Array<CatalogConfig> = [];
  moduleConfigList: Array<ModuleConfModule> = [];
  jobConfigList: Array<JobConfigModule> = [];
}
