import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const routes: Routes = [
 {path:'',component:EmployeePageComponent},
 {path:'add',component:AddEmpComponent},
 {path:'update',component:UpdateEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
