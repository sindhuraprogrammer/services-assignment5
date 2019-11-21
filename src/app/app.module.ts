import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersServiceService } from './users-service.service';
import {CounterService} from './counter.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  ActiveUsersComponent, InactiveUsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersServiceService,CounterService]
})
export class AppModule { }
