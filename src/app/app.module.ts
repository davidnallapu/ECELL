import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ThinkthankComponent } from './thinkthank/thinkthank.component';
import { PartnersComponent } from './partners/partners.component';
import {BlogComponent} from './blog/blog.component'
import { TeamComponent } from './team/team.component';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {HttpClientModule} from '@angular/common/http'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DataService } from './data/data.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    HomeComponent,
    ThinkthankComponent,
    PartnersComponent,
    BlogComponent,
    TeamComponent,
    BlogpageComponent,
    AdminpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
