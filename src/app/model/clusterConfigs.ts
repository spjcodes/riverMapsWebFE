import {JobConfigModel} from "./jobConfigModel";
import {ClusterConfigModule} from "./ClusterConfigModule";
import {CatalogConfigModule} from "./CatalogConfigModule";
import {ModuleConfModule} from "./ModuleConfModule";
import {YarnClusterConfig} from "./yarn-cluster-config";

export class ClusterConfigs {
  clusterConfigList: Array<YarnClusterConfig> = [];
  catalogConfigList:Array<CatalogConfigModule> = [];
  moduleConfigList: Array<ModuleConfModule> = [];
  jobConfigList: Array<JobConfigModel> = [];
}
