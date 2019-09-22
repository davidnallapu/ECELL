import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogdataService {

  david=new Blog('default','default','default','default','default','default');
  private blogSource= new BehaviorSubject<Blog>(this.david);
  currentBlog = this.blogSource.asObservable();


  constructor() { }

  changeBlog(blogdata: Blog){
    this.blogSource.next(blogdata);
  }

}
