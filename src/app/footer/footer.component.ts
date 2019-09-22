import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data/data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  feedbackForm= new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'message': new FormControl('',Validators.required)
  })
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMessageList();
  }

  onSubmitFeedback(formValue){
    this.dataService.insertMessageList(formValue);
    this.feedbackForm.reset();
  }
}
