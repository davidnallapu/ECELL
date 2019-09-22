import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { DataService } from '../data/data.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList: Event[];
  rowIndexArray: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEventList();
    this.dataService.EventList.snapshotChanges().subscribe(
      list => {
        this.eventList=list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.eventList.length+1) / 3)).keys());
      });
  }

}
