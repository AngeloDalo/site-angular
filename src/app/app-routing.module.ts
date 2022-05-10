import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: 'tutorial',
    component: HomeComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'page',
    component: PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
