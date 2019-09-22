import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ThinkthankComponent } from './thinkthank/thinkthank.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogComponent } from './blog/blog.component';
import { TeamComponent } from './team/team.component';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  {path:'thinktank', component: ThinkthankComponent},
  {path:'partners', component: PartnersComponent},
  {path: 'blog', component: BlogComponent},
  {path:'team', component: TeamComponent},
  {path:'blogpage',component: BlogpageComponent},
  {path:'admin-ecell-snu',component: AdminpageComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
