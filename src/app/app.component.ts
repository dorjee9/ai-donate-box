import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import * as PostAction from './action/post/post.action'
import { Post } from './model/post/post.model'
import { categories, Category } from "./data.categories"
interface AppState {
   post: Post
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {}

