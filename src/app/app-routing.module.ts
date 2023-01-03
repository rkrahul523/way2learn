import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { GoogleformComponent } from './googleform/googleform.component';
import { MainLaunchComponent } from './modules/dashboard/components/launch/main-launch.component';
import { BillHomeComponent } from './components/bill-home/bill-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RudraOrderComponent } from './components/rudra-order/rudra-order.component';
import { AgGridExampleComponent } from './modules/feature/components/ag-grid-example/ag-grid-example.component';

const routes: Routes = [
{
  path: '',
  component: LaunchComponent
},
{
  path: 'form',
  component: GoogleformComponent
}

];

const localRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainLaunchComponent,
    children: [
      {
        path: '',
        component: LaunchComponent
      }
    ]
  }
]


const billRoutes=[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: BillHomeComponent,
    children: [
      {
        path: '',
        component: AgGridExampleComponent
      }
    ]
  }

]



@NgModule({
  imports: [RouterModule.forRoot(billRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
