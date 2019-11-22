import { Component,OnInit  } from '@angular/core';
import {UsersServiceService} from '../users-service.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent  implements OnInit  {
 users: string[];
 
constructor(private usersService : UsersServiceService){
}
ngOnInit(){
 this.users = this.usersService.inactiveUsers;
}

  onSetToActive(id: number) {
    this.usersService.toActive(id);
    
  }
}
