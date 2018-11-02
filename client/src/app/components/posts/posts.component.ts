import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from '../../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  count: number;
  err: boolean;

  constructor(private _postService: PostService){}

  ngOnInit() {

    this.posts = [];  
    this.err = false;  
    this.getPosts();
  }

  // get all posts from DB ---------------------------------------------------
  public getPosts(){
    
    this._postService.getPosts().subscribe(

      response => {

        this.count = 0;
        response.posts.forEach(post => {    
          this.posts.push(new Post(post.title,post.description));
          this.count++;
        });
      },
      error => {
        console.log(error);
        this.err = true;
      }
    );
  }

}
