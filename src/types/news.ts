import { IComment } from './comments';

export interface INews {
    id: number;
    title: string;
    author: string;
    authorImgUrl: string;
    imgUrl: string;
}

export interface INewsDetails extends Omit<INews,'comentsQuantity'>  {
    content: string;
    comentsQuantity: number;
};