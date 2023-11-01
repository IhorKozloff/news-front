import { IComment, NewComment } from './comments';

export interface IReply extends IComment {
    parent_id: string | null;
}

export interface INewReply extends NewComment, Pick<IReply, 'parent_id' | 'text'>{

}