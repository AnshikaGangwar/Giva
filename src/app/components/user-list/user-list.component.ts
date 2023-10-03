import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }
  userList: User[]
  ngOnInit(): void {
    this.userList=[
      {
        "mail": "shalini@giva.co",
        "name": "Shalini",
        "disabled": false,
        "roles": ["Inventory View", "Design"]
      },
      {
        "mail": "shima@giva.co",
        "name": "Shima",
        "disabled": true,
        "roles": ["Discount"]
      },
      {
        "mail": "rishabh@giva.co",
        "name": "Rishabh",
        "disabled": true,
        "roles": ["Admin"]
      }
    ]
  }

}
