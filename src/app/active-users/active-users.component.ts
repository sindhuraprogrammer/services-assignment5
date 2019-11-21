import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CounterService} from '../counter.service';
import {UsersServiceService} from '../users-service.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  
constructor(private counterService : CounterService,
            private usersService : UsersServiceService){
this.usersService.movetoActive.subscribe((id:number)=> this.usersService.toActive(id)
  
);
}
  onSetToInactive(id: number) {
    this.usersService.movetoInactive.emit(id);
   
  }
}
