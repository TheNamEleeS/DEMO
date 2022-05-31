import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-screen',
    loadChildren: () =>
      import('./modules/home-screen/home-screen.module').then(
        (m) => m.HomeScreenModule
      ),
  },
  {path:'',redirectTo:'home-screen',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
