import { Component, OnInit } from '@angular/core';
import {Role} from './role';
import{Permesion } from './permesion';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
availableRoles : Role[]= [{"id" :1 , "roleName" : "Presenter" , "rolePremession" : ["write,read"]},
{"id" :2 , "roleName" : "Host" , "rolePremession" : ["write,read"]}]
draggedRule: Role;
test : JSON [];
selectedRoles: Role;
displayDialog: boolean;
//showDialog: boolean;
display: boolean = false;
permesions : Permesion [] = [{"pName" : "write" , "pCode": 100 } ,  {"pName" : "Read" , "pCode": 110 } , {"pName" : "View" , "pCode": 111 }];
targetpermesions : Permesion [];
  constructor() { }

  ngOnInit() {
    this.availableRoles;
    this.targetpermesions =[];
    
  }
  dragStart(event,r: Role) {
    this.draggedRule = r;
}

dragEnd(event) {
  this.draggedRule = null;
}

findIndex(r: Role) {
  let index = -1;
  for(let i = 0; i < this.availableRoles.length; i++) {
      if(r.roleName === this.availableRoles[i].roleName) {
          index = i;
          break;
      }
  }
  return index;
}

selectRole(event: Event, r: Role) {
  this.selectedRoles = r;
  this.displayDialog = true;
  event.preventDefault();
  console.log(this.selectedRoles);
}
onDialogHide() {
  this.selectedRoles = null;
}


    showDialog() {
        this.display = true;
    }
    hideDialog() {
      this.display = false;
  }
}
