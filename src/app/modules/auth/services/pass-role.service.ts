import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassRoleService {

  @Output() roleTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
