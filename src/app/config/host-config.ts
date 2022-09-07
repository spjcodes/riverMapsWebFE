export class HostConfig {
  private host: String = "localhost";
  private port: String = "8080"
  private baseUrl: String = "";

  public getBaseUrl() {
    // return this.host + ":" + this.port;
    return this.host + ":" + this.port;
  }

}
