
import { Component,OnInit } from '@angular/core';
import {CounterService} from './counter.service';
import {UsersServiceService} from './users-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 activeUsers = [];
 inactiveUsers = [];
constructor(private counterService : CounterService,
            private usersService : UsersServiceService){}

  ngOnInit(){
this.activeUsers=this.usersService.activeUsers;
this.inactiveUsers=this.usersService.inactiveUsers;
  }
}
