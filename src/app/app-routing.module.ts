import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { ManufacturerInboxComponent } from './components/manufacturer-inbox/manufacturer-inbox.component';
import { OtherRequestListComponent } from './components/other-request-list/other-request-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'manufacturer_inbox', component: ManufacturerInboxComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my_requests', component: RequestListComponent },
  { path: 'other_requests', component: OtherRequestListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
