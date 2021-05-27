import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Post } from "../post.model";
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, OnDestroy{

  //Recieve Data Posts
  @Input() posts: Post[] = [];
  private postsSub: Subscription;
  // storedPosts: Post[] = [];
   // onPostAdded(post) {
   //   console.log("postlist recieved");
    //this.storedPosts.push(post);
   // }
  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
    this.posts = posts;
    });
    //this.posts = this.postService.getPosts();
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
      }
}
