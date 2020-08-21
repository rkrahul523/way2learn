import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { GoogleformComponent } from './googleform/googleform.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
