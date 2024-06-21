import { Component , OnInit} from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userId: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const username = 'your-username';
    const password = 'your-password';

    this.dataService.getUserId(username, password).subscribe(
      (id) => (this.userId = id),
      (error) => console.error('Error fetching data:', error)
    );
  }

}
