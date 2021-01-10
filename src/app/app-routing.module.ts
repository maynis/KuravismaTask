import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StopListComponent} from './stop-list/stop-list.component';
import {StopDetailsComponent} from './stop-details/stop-details.component';

const routes: Routes = [
  {path: 'stop-list', component: StopListComponent},
  {path: '', redirectTo: '/stop-list', pathMatch: 'full'},
  {path: 'detail/:id', component: StopDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
