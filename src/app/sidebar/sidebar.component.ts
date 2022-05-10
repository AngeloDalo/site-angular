import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  lista: string[] = ["lezione1", "lezione2", "lezione3", "lezione4"];

  constructor() { }

  ngOnInit(): void {
  }

}
