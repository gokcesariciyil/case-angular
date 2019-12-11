import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GreenComponent} from './green/green.component';
import {RedComponent} from './red/red.component';


const routes: Routes = [
  // The green component opens when the page starts. -->
  {
    path: '',
    redirectTo: 'green',
    pathMatch: 'full'
  },
  {
    path: 'green',
    component: GreenComponent
  },
  {
    path: 'red',
    component: RedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
