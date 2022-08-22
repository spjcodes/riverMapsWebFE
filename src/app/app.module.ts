import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogManagerComponent } from './pageComponents/catalog-manager/catalog-manager.component';
import { SqlEditComponent } from './pageComponents/sql-edit/sql-edit.component';
import { DeploymentComponent } from './pageComponents/deployment/deployment.component';
import { UserInfoComponent } from './pageComponents/user-info/user-info.component';
import {HttpClientModule} from "@angular/common/http";
import {SqlLabServicesService} from "./services/sqlLab/sql-lab-services.service";
import {HostConfig} from "./config/host-config";
import {CodemirrorModule} from "ng2-codemirror";


@NgModule({
  declarations: [
    AppComponent,
    CatalogManagerComponent,
    SqlEditComponent,
    DeploymentComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule,
    HttpClientModule
  ],
  providers: [
    SqlLabServicesService,
    HostConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
