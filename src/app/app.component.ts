import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink,RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { routes,   } from './app.routes';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,
    MatToolbarModule,RouterLink,
    RouterLinkActive,MatIconModule,MatButtonModule,
    MatSidenavModule,NavbarComponent,
    OverviewComponent,CommonModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

 
})
export class AppComponent {
  title = 'stuHub';
  constructor(public router: Router) {}

  isLoggedIn() {
    if (this.router.url.indexOf('signup') > -1) {
      return false;
    }
    else if (this.router.url.indexOf("login") > -1){
      return false;
    }
    else {
      return true;
    }
  }
}

