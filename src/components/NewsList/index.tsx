import { INews } from '../../types/news';
import { NewsItem } from './NewsItem';

interface IProps {
    newsData: INews[]
}

export const NewsList = ({newsData}: IProps) => {

    return (
        <ul className='flex justify-between flex-wrap'>
            {newsData.map(({id, title, imgUrl}) => {
                return (
                    <li key={id}>
                        <NewsItem itemData={{
                            id,
                            imgUrl,
                            title
                        }}/>
                    </li>
                );
            })}
        </ul>
    );
};