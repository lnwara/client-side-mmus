import { Component, OnInit } from '@angular/core';
import{Role} from './role'
@Component({
  selector: 'app-rolepermision',
  templateUrl: './rolepermision.component.html',
  styleUrls: ['./rolepermision.component.css']
})
export class RolepermisionComponent implements OnInit {

  availableRoles : Role[]= [{"id" :1 , "roleName" : "Presenter" , "rolePremession" : ["write,read"]},
  {"id" :2 , "roleName" : "Host" , "rolePremession" : ["write,read"]}]
  draggedRule: Role;
  selectedRoles: Role;
  displayDialog: boolean;
  //showDialog: boolean;
  display: boolean = false;
  permesions : String [] = ["write" , "read" , "view"];
    constructor() { }
  
    ngOnInit() {
      this.availableRoles;
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
  }