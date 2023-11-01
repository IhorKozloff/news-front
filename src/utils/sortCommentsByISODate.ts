import { IComment } from '../types/comments';

export const sortCommentsByISODate = (data: IComment[]) => {
    return data.sort((a, b) => -a.published.localeCompare(b.published));
};