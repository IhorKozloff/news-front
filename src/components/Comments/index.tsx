import { useAppSelector } from "../../hooks/storeHooks";
import { useGetCommentsByNewsIdQuery } from "../../store/api/commentsApi";
import { NewComment } from "../../types/comments";
import { CommentField } from "./CommentField";
import { CommentsList } from "./CommentsList";
import { useAddNewCommentMutation } from '../../store/api/commentsApi'
import { sortCommentsByISODate } from "../../utils/sortCommentsByISODate";
import { useEffect, useRef, useState } from "react";
import { FcAddImage } from 'react-icons/fc';
import { IconContext } from "react-icons";

interface IProps {
    newsId: string;
}
export const Comments = ({newsId}: IProps) => {
    const {data, isLoading} = useGetCommentsByNewsIdQuery(newsId);
    const [addNewCOmment, addNewCOmmentResult] = useAddNewCommentMutation();

    const token = useAppSelector(state => state.userAuthData.authData.token);

    const onCommentSubmit = (text: string, imgData?: string[]) => {
        console.log()
        let commentData: NewComment = {
            news_id: newsId,
            text
        };
        
        if (imgData) {
            commentData.img_urls = imgData;
        }

        addNewCOmment({
            newCommentData: commentData,
            token: token!,
        });
    };
    

    return (
        <div className="bg-white pt-10 relative">
            <CommentField onSubmit={onCommentSubmit}/>

            {data && <CommentsList data={sortCommentsByISODate(Object.values(data))} />}
        </div>
    );
};