import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from '../../services/post.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css' ],
  providers: [PostService]
})
export class NewPostComponent {

  post: Post;
  msg: boolean;
  msgErr: boolean;

  constructor(private _postService: PostService) {

    this.post = new Post('','');
    this.msg = false;
    this.msgErr = false;
   }

  // Save a post in the BD ---------------------------------------------------------- 
  public save(postForm: NgForm){
    
    this._postService.savePost(this.post).subscribe(

      response => {

        this.msg = true;
        this.msgErr = false;
        postForm.reset();
        console.log(response);
      },
      error => {
        console.log(<any>error);
        this.msgErr = true;
      }
    );
  }

  // reset message state ------------------------------------------------------------
  public resetMsgState(){
    this.msgErr = false;
    this.msg = false;
  }

}
