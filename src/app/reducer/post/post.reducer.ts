import { type } from 'os'
import * as PostAction from '../../action/post/post.action'
import { Post } from '../../model/post/post.model'

export type Action = PostAction.All;

const defaultState: Post = {
    text: 'Hello.  I am the post',
    likes: 0
}

const newState = (state, newData) => {
return Object.assign({}, state, newData);
}

export function postReducer(state: Post = defaultState, action: Action){
    console.log(action.type, state)
    switch(action.type){
    case PostAction.EDIT_TEXT:
        return newState(state, {text: action.payload});
    case PostAction.UPVOTE:
        return newState(state, {likes: state.likes + 1});
    case PostAction.DOWNVOTE:
        return newState(state, {likes: state.likes - 1});
    case PostAction.RESET:
        return defaultState;
    default:
        return state;
    }
}