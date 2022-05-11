import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  users: User[] = new Array();

  user: string | undefined;

  constructor(public tservice: TutorialService, public http: HttpClient, public router: Router) {
    this.tservice.userChanged$.subscribe(user => {
      this.user = user;
    })
    //this.tservice.changeUser(this.user);
  }

  ngOnInit(): void {
  }

  change(input: HTMLInputElement) {
    this.tservice.changeUser(input.value);
  }

}
