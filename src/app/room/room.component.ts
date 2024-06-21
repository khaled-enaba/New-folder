import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  myScriptElement: HTMLScriptElement;
  constructor(){
  
   this.myScriptElement = document.createElement("script");
   this.myScriptElement.src = "assets/js/room.js";
   this.myScriptElement.src = "assets/js/AgoraRTC_N-4.11.0.js";
   this.myScriptElement.src = "assets/js/room_rtm.js";          
   this.myScriptElement.src = "assets/js/room_rtc.js";
   document.body.appendChild(this.myScriptElement);
  }
  
 
}
