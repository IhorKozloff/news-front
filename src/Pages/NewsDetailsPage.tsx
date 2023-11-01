import { useParams } from 'react-router-dom';
import { useGetNewsDetailsQuery } from '../store/api/newsApi';
import { NewsDetails } from '../components/NewsDetails/NewsDetails';
import { useState } from 'react';
import { LoadCommentsBtn } from '../components/NewsDetails/LoadCommentsBtn';
import { Comments } from '../components/Comments';

export const NewsDetailsPage = () => {
    let { newsId } = useParams();
    
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    const { data } = useGetNewsDetailsQuery(newsId!);

    const onLoadCommentsBtnClick = () => {
        if (isCommentsOpen) {
            setIsCommentsOpen(false);
        } else {
            setIsCommentsOpen(true);
        } 
    };

    return (
        <>
            {data && <NewsDetails detailsData={data}/>}
            {data && <LoadCommentsBtn commentsNumber={data.comentsQuantity} currentNewsId={newsId!} onClick={onLoadCommentsBtnClick}/>}
            {isCommentsOpen && <Comments newsId={newsId!}/>}
        </>
    );
};