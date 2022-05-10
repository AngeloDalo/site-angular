import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //username: string = "AngelDal25";
  //username: string = "AngelDal25";

  @Input()
  user!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
