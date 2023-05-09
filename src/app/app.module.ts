import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import { AppRoutingModule } from './app-routing.module';
import {HostConfig} from "./config/host-config";
import { AppComponent } from './app.component';
import { SqlEditComponent } from './pageComponents/sql-edit/sql-edit.component';
import { UserInfoComponent } from './pageComponents/user-info/user-info.component';
import { DataSyncComponent } from './pageComponents/DS/data-sync/data-sync.component';
import { DeploymentComponent } from './pageComponents/deployment/deployment.component';
import {SqlLabServicesService} from "./services/sqlLab/sql-lab-services.service";
import { JobManagerComponent } from './pageComponents/job-manager/job-manager.component';
import { CatalogManagerComponent } from './pageComponents/catalog-manager/catalog-manager.component';
import { ClusterSettingComponent } from './pageComponents/setting/cluster-setting/cluster-setting.component';
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FieldsetModule} from "primeng/fieldset";
import {SplitButtonModule} from "primeng/splitbutton";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";


@NgModule({
  declarations: [
    AppComponent,
    CatalogManagerComponent,
    SqlEditComponent,
    DeploymentComponent,
    UserInfoComponent,
    JobManagerComponent,
    DataSyncComponent,
    ClusterSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    FieldsetModule,
    SplitButtonModule,
    ToastModule,
    MenuModule,

  ],
  providers: [
    SqlLabServicesService,
    HostConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
