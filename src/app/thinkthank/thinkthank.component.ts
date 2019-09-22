import { Component, OnInit } from '@angular/core';
import { ThinkThank } from './tt.model';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-thinkthank',
  templateUrl: './thinkthank.component.html',
  styleUrls: ['./thinkthank.component.css']
})
export class ThinkthankComponent implements OnInit {

  ttList: ThinkThank[];
  rowIndexArray: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getThinkTankListList();
    this.dataService.ThinkTankList.snapshotChanges().subscribe(
      list => {
        this.ttList=list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.ttList.length+1) / 3)).keys());
      });
  }

}
