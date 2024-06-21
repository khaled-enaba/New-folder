import { Component, OnInit, ViewChildren,ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {provideNativeDateAdapter} from '@angular/material/core';





@Component({
  selector: 'app-overview',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet,MatButtonModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,
    MatIconModule,MatExpansionModule,

  
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
