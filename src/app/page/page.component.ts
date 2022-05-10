import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  title: string = "titolo";
  user: string = "user";
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
      // this.title = this.route.snapshot.paramMap.get('id');
      // this.user = this.route.snapshot.paramMap.get('user');
      // this.route.paramMap.subscribe((params: ParamMap) => {
      //   this.title = params.get('id');
      //   this.user = params.get('user');
      // })
  }

}
