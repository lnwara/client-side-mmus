import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserservicesService } from '../userservices.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import{Group} from '../dragdrop/group';
import{GroupService} from '../group.service';
import { UserGroup } from './usergroup';
@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styles: [`
        :host ::ng-deep .drag-column {
            padding-right: .5em;
        }
        :host ::ng-deep .drop-column {
            border: 1px solid #c8c8c8;
            background-color: #ffffff;
        }
        .ui-g li {
            list-style-type: none;
            padding: 10px;
            margin-bottom: 5px;
            border: 1px solid #c8c8c8;
            background-color: #ffffff;
        }
    `]
})
export class DragdropComponent implements OnInit {
  
  availableUsers :User[] ;
  availableGroups :Group[] ;

  form: FormGroup;
availableUsers1 :User[];
draggedUser: User;
draggedGroup: Group;
selectedUsers: User[];
selectedGroups:Group[];
userInGroup :UserGroup;

  constructor(private userService: UserservicesService, private http: HttpClient ,private fb: FormBuilder ,private groupService: GroupService) { }
  dropcolumns: number[];
  ngOnInit() {
    this.selectedUsers = [];
    this.userService.users;
    this.selectedGroups = [];
    this.groupService.groups;
    this.dropcolumns= [0];
   
      this.userService.getUsers().subscribe(sub => {this.availableUsers=sub});
      this.groupService.getGroups().subscribe(sub => {this.availableGroups=sub});
     
     

      
  
      
  }
  dragStart(event,user: User) {
    this.draggedUser = user;
}
drop(event) {
  if(this.draggedUser) {
      let draggedUserIndex = this.findIndex(this.draggedUser);
      this.selectedUsers = [...this.selectedUsers, this.draggedUser];
      //this.availableUsers = this.availableUsers.filter((val,i) => i!=draggedUserIndex);
      this.draggedUser = null;
  }
  if(this.draggedGroup) {
    let draggedGroupIndex = this.findIndexGroup(this.draggedGroup);
    this.selectedGroups = [...this.selectedGroups, this.draggedGroup];
   // this.availableUsers = this.availableUsers.filter((val,i) => i!=draggedGroupIndex);
    this.draggedUser = null;
}
}
dragEnd(event) {
  this.draggedUser = null;
}

findIndex(user: User) {
  let index = -1;
  for(let i = 0; i < this.availableUsers.length; i++) {
      if(user.firstName === this.availableUsers[i].firstName) {
          index = i;
          break;
      }
  }
  
  return index;
}

findIndexGroup(group: Group) {
  let index = -1;
  for(let i = 0; i < this.availableGroups.length; i++) {
      if(group.groupName === this.availableGroups[i].groupName) {
          index = i;
          break;
      }
  }
  
  return index;
}

/*createUser(u: User){

  this.availableUsers = this.userService.createUser(u);
}*/
addColumn() {
  this.dropcolumns.push(this.dropcolumns.length);
}
removeColumn() {
  this.dropcolumns.splice(-1, 1);
}

protected addHandler({sender}) {
  // define all editable fields validators and default values
  const group = new FormGroup({
      'id': new FormControl(0),
      'firstName': new FormControl("", Validators.required),
      'lastName': new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl()
  });

  // show the new row editor, with the `FormGroup` build above
  sender.addRow(group);
}
 getUserinGroup(id : Number){
  this.groupService.getUserinGroup(id).subscribe(sub =>{this.userInGroup =sub} );
  
}
}
