import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { User } from '../user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[] = new Array();

  constructor(public tservice: TutorialService) { }

  ngOnInit(): void {
    this.tservice.downloadUsers().subscribe(res => {
      this.users = res;
    })
  }

}
