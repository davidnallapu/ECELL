import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Blog } from './blog.model';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { Router } from '@angular/router';
import { BlogdataService } from './blogdata.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList: Blog[] =[];
  rowIndexArray: any[];
  constructor(private router: Router, private blogdataService: BlogdataService, private dataService: DataService) { 
  }

  
  ngOnInit() {
    this.dataService.getBlogList();
    this.dataService.BlogList.snapshotChanges().subscribe(
      list => {
        this.blogList=list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.blogList.length+1) / 3)).keys());
      });
  }

  onclick(item: Blog){
    this.blogdataService.changeBlog(item);
    this.router.navigate(['/blogpage']);
    // title=item.title
    // this.blogg.author=item.author
    // this.blogg.date=item.date
    // this.blogg.desc=item.desc
    // this.blogg.img=item.img
    
  }
}
