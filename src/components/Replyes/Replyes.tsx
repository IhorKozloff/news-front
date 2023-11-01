import { CommentField } from "../Comments/CommentField"

import { useAppSelector } from "../../hooks/storeHooks";
import { useGetCommentsByNewsIdQuery } from "../../store/api/commentsApi";
import { NewComment } from "../../types/comments";

import { useAddNewCommentMutation } from '../../store/api/commentsApi'
import { sortCommentsByISODate } from "../../utils/sortCommentsByISODate";
import { INewReply } from "../../types/reply";
import { useAddNewReplyMutation, useGetReplyesByParentIdQuery } from "../../store/api/replyesApi";
import { CommentsList } from "../Comments/CommentsList";

interface IProps {
    newsId: string;
    parentId: string;
}
export const Replyes = ({newsId, parentId}: IProps) => {
    const {data, isLoading} = useGetReplyesByParentIdQuery({newsId, parentId});
    const [sendReply, addingNewReplyResult] = useAddNewReplyMutation();
    const token = useAppSelector(state => state.userAuthData.authData.token);

    const onReplySubmit = (text: string, imgData: string[] | undefined) => {
        const replyData: INewReply = {
            news_id: newsId,
            text,
            parent_id: parentId
        };

        if (imgData) {
            replyData.img_urls = imgData;
        }
        
        sendReply({
            newReplyData: replyData,
            token: token!,
        });
;
    };
    
    return (
        <div className="bg-white pt-10 replyes">
            <CommentField onSubmit={onReplySubmit}/>
            {data && <CommentsList data={sortCommentsByISODate(Object.values(data))} />}
        </div>
    );
};