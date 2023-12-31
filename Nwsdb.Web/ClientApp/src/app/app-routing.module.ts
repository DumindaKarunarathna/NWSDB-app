import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { ApprovalMainComponent } from './web/approval/approval-main/approval-main.component';
import { LandsAllMainComponent } from './web/lands/all/lands-all-main/lands-all-main.component';
import { LandsAllAddComponent } from './web/lands/all/lands-all-add/lands-all-add.component';
import { LandsAllViewComponent } from './web/lands/all/lands-all-view/lands-all-view.component';


const routes: Routes =
  [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'approval-main', component: ApprovalMainComponent },
    { path: 'lands-all-main', component: LandsAllMainComponent },
    { path: 'lands-all-add', component: LandsAllAddComponent },
    { path: 'lands-all-view', component: LandsAllViewComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
