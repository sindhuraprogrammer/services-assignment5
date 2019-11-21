import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CounterService} from '../counter.service';
import {UsersServiceService} from '../users-service.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
 
constructor(private counterService : CounterService,
            private usersService : UsersServiceService){
this.usersService.movetoInactive.subscribe((id:number)=> this.usersService.toInactive(id)

);

}
  onSetToActive(id: number) {
    this.usersService.movetoActive.emit(id);
    
  }
}
