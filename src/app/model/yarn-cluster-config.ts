export class YarnClusterConfig {
  clusterName: string   | undefined;
  hadoopConfDirPath: string | undefined;
  flinkClusterLibPath: string | undefined;
  flinkDistJarPath: string | undefined;
  flinkConfDirPath: string | undefined;
  masterMemoryMB: string | undefined;
  taskManagerMemoryMB: string | undefined;
  slotsPerTaskManager: string | undefined;
  desc: string = "";
}
