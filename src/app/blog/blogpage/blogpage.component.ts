import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogdataService } from '../blogdata.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {

  blogdata= new Blog('','','','','','');

  constructor(private blogdataService: BlogdataService) { }

  ngOnInit() {
    this.blogdataService.currentBlog.subscribe( blogdata=> this.blogdata=blogdata);
  }



}
