import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../app/dragdrop/user';
import {Role} from '../app/roles/role';
import {Group} from '../app/dragdrop/group';
import {UserGroup} from '../app/dragdrop/usergroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups : Group[] ;
  private groupUrl = 'http://localhost:52252/api/group';
  private groupUrlGet = 'http://localhost:52252/api/group/GetGroups';
  private userGroupUrl ='http://localhost:52252/api/userGroup/GetUserGroups'
  private userinGroupsURL = 'http://localhost:52252/api/userGroup/GetUserinGroups'
    constructor(private http: HttpClient) { }
  //GET ALL GROUPS
  getGroups(): Observable<Group[]> { 
    return this.http.get<Group[]>(this.groupUrlGet)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
       
      );
  }
  //GET USER IN GROUP 
  getUserGroup(): Observable<UserGroup[]> { 
    return this.http.get<UserGroup[]>(this.userGroupUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
       
      );
  }
  getUserinGroup(id :Number): Observable<UserGroup> { 
    const url = `${this.userinGroupsURL}/${id}`
    return this.http.get<UserGroup>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
       
      );
  }
//CREATE GROUP
createUser(g :Group): Observable<Group> {
  var body = JSON.stringify(g);
  const headers = new HttpHeaders({'Content-Type':'application/json'});      
return this.http.post<Group>(this.groupUrl ,body , { headers: headers});
}
//DELETE GROUP 
deleteProduct(g: Group): Observable<{}> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.groupUrl}/${g.id}`;
  return this.http.delete<Group>(url, { headers: headers })
    .pipe(
      tap(data => console.log('deleteProduct: ' + g.id)),
      catchError(this.handleError)
    );
}

private handleError(err) {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage: string;
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
  }
  console.error(err);
  return throwError(errorMessage);
}

}








