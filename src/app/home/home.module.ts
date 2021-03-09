import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [HomeComponent, UsersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { 
  static forRoot(): ModuleWithProviders<HomeModule> {
    return {
      ngModule: HomeModule
    }
  }
}
