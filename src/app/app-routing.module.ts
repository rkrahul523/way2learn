import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { GoogleformComponent } from './googleform/googleform.component';
import { MainLaunchComponent } from './modules/dashboard/components/launch/main-launch.component';

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



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
