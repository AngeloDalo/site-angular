import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TutorialService } from './tutorial.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site';
  username: string = "AngDal25";
  user: string = "Nothing00";
  id: string = "Ciao";

  constructor(public tservice: TutorialService, public router: Router) {
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })

    this.tservice.userChanged$.subscribe(user => {
      this.user = user;
    })
    setTimeout(() => {
      this.tservice.changeUser(this.user);
    }, 500);
  }
}
