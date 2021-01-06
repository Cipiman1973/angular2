import { Component, OnInit } from '@angular/core';
import {BlogPost} from './BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  counter = 0;
  title = '';
  text = '';
  updatedTitle = '';
  updatedText = '';
  vis = false;
  editedPost: BlogPost | undefined;
  blogPosts: BlogPost[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  addBlogPost(): void {
    console.log(this.title);
    console.log(this.text);
    this.blogPosts.push(new BlogPost(this.title, this.text));
    this.counter++;
    this.title = '';
    this.text = '';
  }

  showForm(): void{
    this.vis = true;
    console.log('current post: ');
    console.log(this.editedPost);
    if (this.editedPost !== undefined){
      this.updatedTitle = this.editedPost.title;
      this.updatedText = this.editedPost.text;
    }
  }

  hideForm(): void{
    this.vis = false;
  }

  updatePost(): void{
    // @ts-ignore
    this.editedPost.title = this.updatedTitle;
    // @ts-ignore
    this.editedPost.text = this.updatedText;
  }

}
