import { Injectable, EventEmitter } from '@angular/core';
import { CurrentUser } from '../model/current-user.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { HELP_DESK_API } from './helperdesk.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static instance: AuthService = null;
  currentUser: CurrentUser;

  constructor(private http: HttpClient) { }

  login(user: User){
    this.http.post<CurrentUser>(`${HELP_DESK_API}/api/auth`, user).subscribe((cU: CurrentUser) => {
      this.currentUser = cU;
    });
  }

  isLogged(): boolean {
    if(this.currentUser){
      return true;
    }else {
      return false;
    }
  }
}
