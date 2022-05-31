import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeScreenComponent } from './home-screen.component';
import { DemoScreenComponent } from './screens/demo-screen/demo-screen.component';

@NgModule({
  declarations: [HomeScreenComponent, DemoScreenComponent],
  imports: [
    CommonModule,
    HomeScreenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class HomeScreenModule {}
