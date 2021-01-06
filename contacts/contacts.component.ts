import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  username = '';
  password = '';
  confirm = '';

  constructor() { }

  ngOnInit(): void {
  }

  printValues(): void{
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);
    console.log('confirm: ' + this.confirm);
  }
}
