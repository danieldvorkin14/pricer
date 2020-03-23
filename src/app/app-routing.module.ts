import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { ManufacturerInboxComponent } from './components/manufacturer-inbox/manufacturer-inbox.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my_requests', component: RequestListComponent },
  { path: 'manufacturer_inbox', component: ManufacturerInboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
