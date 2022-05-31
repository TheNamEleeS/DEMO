import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen.component';
import { DemoScreenComponent } from './screens/demo-screen/demo-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    children: [
      { path: 'demo-screen', component: DemoScreenComponent },
      { path: '', redirectTo: 'demo-screen', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenRoutingModule {}
