import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }
  addAddress(f:NgForm)
  {
      console.log(f.value);
     this.userservice.address(f.value).subscribe((res)=>{
      console.log(res);
      alert('Address added successfully');
    },(err)=>{
      console.log(err);
    })
  }

}
