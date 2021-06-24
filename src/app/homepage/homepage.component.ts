import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, UserService } from '../_services';
import { User } from '../_models';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  loading = false;
  user: User;
  userFromApi: User;
  role: "";
  isAdmin: boolean;
  isNonAdmin: boolean;

  constructor(
    private userService: UserService, private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.user = this.authenticationService.userValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
      this.loading = false;
      debugger;
      // this.isAdmin = true;
      this.userFromApi = user;
      if (user.role == 'Admin') {
        this.isAdmin = true;
      }
      else {
        this.isNonAdmin = true;
      }
    });
  }

  getuserrole(user) {
    this.role = user.role;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    //this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
