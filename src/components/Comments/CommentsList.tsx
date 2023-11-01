import { IComment } from '../../types/comments';
import { CommentsItem } from './CommentsItem';

interface IProps {
    data: IComment[];
    clasName?: string;
}
export const CommentsList = ({data, clasName}: IProps) => {
    
    return (
        <ul className={`${clasName && clasName}`}>

            {data && data.map(item => {
                return (
                    <li key={item.id}>
                        <CommentsItem
                            id={item.id}
                            date={item.published}
                            text={item.text}
                            user={item.user_name}
                            parentId={item.id}
                            img_urls={item.img_urls}
                        />
                    </li>
                );
            })}
        </ul>
    );
};