import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
      console.log(this.userservice.getToken()); //to check token stored or not
  }

}
