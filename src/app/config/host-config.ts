export class HostConfig {

  private host: String = "http://localhost";
  private port: String = "8080"
  private sqlLab: String = "sqlLab/";
  private metadata: String = "metadata/";

  public getBaseUrl() {
    return this.host + ":" + this.port + "/";
  }

  public getSqlLabUrl() {
    return this.getBaseUrl() + this.sqlLab;
  }

  getMetadataUrl() {
    return this.getBaseUrl() + this.metadata;
  }
}
