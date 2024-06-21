import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterLink , RouterLinkActive} from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MatIcon,MatButton,
    MatButtonModule,MatProgressBarModule,RouterLink,RouterLinkActive,
     FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  msg: any;
  constructor(){

    console.log("event works");
  }
  clickEvent() {
    this.msg = "Button is Clicked";
    return this.msg;
  }
}
console.log("works");
// let scrollContainer = document.getElementsByClassName("scrollContainer");
// let backbtn = document.getElementById("bbtn");
// let nextbtn = document.getElementById("fbtn");

// backbtn.addEventListener("click", ()=>{
//  scrollContainer.scrollLeft -=10;
// });
// nextbtn.addEventListener("click", ()=>{
//  scrollContainer.scrollRight(10);
// });
