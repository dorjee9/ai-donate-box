import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import * as PostAction from './action/post/post.action'
import { Post } from './model/post/post.model'

interface AppState {
   post: Post
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ai-donate-box';
  post :Observable<Post>
  text: string;
  constructor(private store: Store<AppState>){
    this.post =this.store.select('post')
  }
  editText(){
    this.store.dispatch(new PostAction.EditText(this.text));
  }

  resetPost(){
    this.store.dispatch(new PostAction.Reset());
  }

  upvote(){
    this.store.dispatch(new PostAction.Upvote());
  }

  downvote(){
    this.store.dispatch(new PostAction.Downvote());
  }

  // spanishMessage(){
  //   this.store.dispatch({type: 'SPANISH'})
  // }

  // frenchMessage(){
  //   this.store.dispatch({type: 'FRENCH'})
  // }
}
