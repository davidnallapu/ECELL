import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { DataService } from '../data/data.service';
import { finalize } from "rxjs/operators";
import { Feedback } from '../footer/feedback.model';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  isSubmitted: boolean=false;
  imgSrc: string="";
  selectedImage: any=null;

  thinktankForm= new FormGroup({
    'title': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required),
    'speaker': new FormControl('',Validators.required),
    'desc': new FormControl('',Validators.required)
  })

  eventForm= new FormGroup({
    'event': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required),
    'desc': new FormControl('',Validators.required),
    'date': new FormControl('',Validators.required)
  })

  blogForm= new FormGroup({
    'title': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required),
    'desc': new FormControl('',Validators.required),
    'date': new FormControl('',Validators.required),
    'author': new FormControl('',Validators.required),
    'intro': new FormControl('',Validators.required)
  })

  
  calenderForm= new FormGroup({
    'event': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required),
    'desc': new FormControl('',Validators.required),
    'time': new FormControl('',Validators.required),
    'month': new FormControl('',Validators.required),
    'day': new FormControl('',Validators.required)
  })

  feedbackList: Feedback[];
  rowIndexArray: any[];

onSubmitThinktank(formValue){
  if (this.thinktankForm.valid) {
    var filePath = `thinktank/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue['img'] = url;
          console.log(formValue);
          this.dataService.insertThinkTankList(formValue);
        })
      })
    ).subscribe();
    this.thinktankForm.reset();
}
}


onSubmitEvent(formValue){
  if (this.eventForm.valid) {
    var filePath = `event/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue['img'] = url;
          console.log(formValue);
          this.dataService.insertEventList(formValue);
        })
      })
    ).subscribe();
    this.eventForm.reset();
}}

onSubmitBlog(formValue){
  if (this.blogForm.valid) {
    var filePath = `blog/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue['img'] = url;
          console.log(formValue);
          this.dataService.insertBlogList(formValue);
        })
      })
    ).subscribe();
    this.blogForm.reset();
}}

onSubmitCalender(formValue){
  if (this.calenderForm.valid) {
    var filePath = `calender/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue['img'] = url;
          console.log(formValue);
          this.dataService.insertCalenderList(formValue);
        })
      })
    ).subscribe();
      this.calenderForm.reset();
  }}


  constructor(private storage:AngularFireStorage, private dataService: DataService) { }

  onFileSelected(event: any){
    if(event.target.files && event.target.files[0] ){
      const reader = new FileReader();
      reader.onload=(e: any) =>  this.imgSrc=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage=event.target.files[0];
    }
    else{
      this.imgSrc=null;
      this.selectedImage=null;
    }
  }




  ngOnInit() {
    this.dataService.getThinkTankListList();
    this.dataService.getEventList();
    this.dataService.getBlogList();
    this.dataService.getCalenderList();
    this.dataService.getMessageList();
    this.dataService.MessageList.snapshotChanges().subscribe(
      list => {
        this.feedbackList=list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.feedbackList.length+1) / 3)).keys());
      });
  }

}
