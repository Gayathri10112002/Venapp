import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInputComponent } from './product-input/product-input.component';
import { StoredDataComponent } from './stored-data/stored-data.component';
import { StatusCheckComponent } from './status-check/status-check.component';
import { HeadDeptComponent } from './head-dept/head-dept.component';
import { ApprovalComponent } from './approval/approval.component';
import { PrintComponent } from './print/print.component';


const routes: Routes = [
 {path:'',component:ProductInputComponent},
 {path:'data', component:StoredDataComponent},
 {path:'status', component:StatusCheckComponent},
 {path:'head', component:HeadDeptComponent},
 {path:'approval', component:ApprovalComponent},
 { path: 'print/:id', component: PrintComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
