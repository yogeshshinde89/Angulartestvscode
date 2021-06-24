import { Component, OnInit } from '@angular/core';
import { Console } from 'node:console';
import { User, Role } from './_models';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLoginFull';
  user: User;

  constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }
  ngOnInit()
  {
    alert('Welcome');
  }

  get Isnouser() {
    return true;
  }
  get Isadmin() {
    var data = JSON.parse(localStorage.getItem('user'));
    if (data != null) {
      console.log(data);
      console.log(data.role);
      if (data.role == "Admin") { 
        return true;
      }
    }
    return false;
  }
  get isNonAdmin() {
    var data = JSON.parse(localStorage.getItem('user'));
    if (data != null) {
      console.log(data);
      console.log(data.role);
      if (data.role == "User") { 
        return true;
      }
    }
    return false;
  }

  get Iflogged() {
    var data = JSON.parse(localStorage.getItem('user'));
    if (data != null) {
      return true;
    }
  }

  get Ifnotlogged(){
    var data = JSON.parse(localStorage.getItem('user'));
    if (data == null) {
      return true;
    }
  }


  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('user');
  //   //this.userSubject.next(null);
  //   //this.router.navigate(['/']);
  // } 
  logout() {
    this.authenticationService.logout();
  }
}
