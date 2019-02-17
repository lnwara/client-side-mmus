import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class UserService {
users : User[] ;
private usersUrl1 = 'http://localhost:52252/api/user';
    constructor(private http: HttpClient) { }


    getUsers(): Observable<User[]> {
      //let params = new URLSearchParams();  
      //params.set('Skip', state.skip);  
      //params.set('Take', state.take) 
      return this.http.get<User[]>(this.usersUrl1)
        .pipe(
          tap(data => console.log(JSON.stringify(data))),
         
        );
    }

   createUser0(user : User):User[]{
   this.users.push(user);
   return this.users;
  }
  createUser(u :User): Observable<User> {
    var body = JSON.stringify(u);
    const headers = new HttpHeaders({'Content-Type':'application/json'});      
  return this.http.post<User>(this.usersUrl1 ,body , { headers: headers});
  }

  deleteProduct(u: User): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.usersUrl1}/${u.id}`;
    return this.http.delete<User>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + u.id)),
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