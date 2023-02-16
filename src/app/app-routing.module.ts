import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogManagerComponent} from "./pageComponents/catalog-manager/catalog-manager.component";
import {SqlEditComponent} from "./pageComponents/sql-edit/sql-edit.component";
import {DeploymentComponent} from "./pageComponents/deployment/deployment.component";
import {UserInfoComponent} from "./pageComponents/user-info/user-info.component";
import {JobManagerComponent} from "./pageComponents/job-manager/job-manager.component";

const routes: Routes = [
  {path:'', component: SqlEditComponent},
  {path:'catalogManager', component: CatalogManagerComponent},
  {path:'sqlEdit', component: SqlEditComponent},
  {path:'jobManager', component: JobManagerComponent},
  {path:'deployment', component: DeploymentComponent},
  {path:'userInfo', component: UserInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
