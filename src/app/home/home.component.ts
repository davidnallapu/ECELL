import { Component, OnInit } from '@angular/core';
import { Calender } from './calender.model';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  calenderList: Calender[] =[];
  rowIndexArray: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCalenderList();
    this.dataService.CalenderList.snapshotChanges().subscribe(
      list => {
        this.calenderList=list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.calenderList.length+1) / 3)).keys());
      });
  
  }
  }


