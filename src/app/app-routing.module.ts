import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StopListComponent} from './stop-list/stop-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DeparturesComponent} from './departures/departures.component';

const routes: Routes = [
  {path: 'stop-list', component: StopListComponent},
  {path: '', redirectTo: '/stop-list', pathMatch: 'full'},
  {path: 'detail/:id', component: DeparturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
