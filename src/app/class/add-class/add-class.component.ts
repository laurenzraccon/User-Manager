import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})

export class AddClassComponent implements OnInit {

  constructor(public postsService: PostsService, private httpClient: HttpClient) { }

  @Output() postCreated = new EventEmitter<Post>();
  enteredTitle = '';
  enteredContent = '';
  


  onSubmit(data) {
    this.httpClient.get<{message:string, data}>('http://localhost:3000/api/posts');

    console.log("class: " + data.class
               +"shortname: " + data.shortname);
  }

  onAddPost(form: NgForm) {
  
    console.log("recieved posts");
    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
    this.postsService.addPost(post.title,post.content);
    form.resetForm();
    }

   

  ngOnInit() {
  }

}
