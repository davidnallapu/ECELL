import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  ThinkTankList: AngularFireList<any>; 
  EventList: AngularFireList<any>; 
  BlogList: AngularFireList<any>; 
  CalenderList: AngularFireList<any>; 
  MessageList: AngularFireList<any>; 

  constructor(private firebase: AngularFireDatabase) { }

getThinkTankListList(){
    this.ThinkTankList=this.firebase.list('ThinkTankList');
 } 
 
insertThinkTankList(thinkthankDetails){
 this.ThinkTankList.push(thinkthankDetails);
 }

getEventList(){
  this.EventList=this.firebase.list('EventList');
} 

insertEventList(eventDetails){
this.EventList.push(eventDetails);
}

getBlogList(){
  this.BlogList=this.firebase.list('BlogList');
} 

insertBlogList(blogDetails){
this.BlogList.push(blogDetails);
}

getCalenderList(){
  this.CalenderList=this.firebase.list('CalenderList');
} 

insertCalenderList(calenderDetails){
this.CalenderList.push(calenderDetails);
}

getMessageList(){
  this.MessageList=this.firebase.list('MessageList');
} 

insertMessageList(messageDetails){
this.MessageList.push(messageDetails);
}




}
