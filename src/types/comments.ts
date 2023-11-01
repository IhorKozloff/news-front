export interface IComment {
    id: string;
    user_name: string;
    text: string;
    replyes_ids: string[];
    published: string;
    img_urls: string[];
}

export type NewComment = Pick<IComment, 'text'> & {
    news_id: string;
    img_urls?: string[];
}