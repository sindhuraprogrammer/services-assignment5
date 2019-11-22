import { Injectable,EventEmitter } from '@angular/core';
import {CounterService} from './counter.service';
@Injectable()
export class UsersServiceService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private counterService : CounterService) { }

  toInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.countActions();
    }

  toActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
     this.counterService.countActions();
  }

}