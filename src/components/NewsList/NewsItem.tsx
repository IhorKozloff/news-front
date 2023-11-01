import { INews } from '../../types/news';
import { Link } from  'react-router-dom';

interface IProps {
    itemData: Pick<INews, 'id' | 'title' | 'imgUrl'>
}

export const NewsItem = ({itemData}: IProps) => {

    return (
        <Link to={`/${itemData.id}`}>
            <div className="w-[600px] h-[500px] relative cursor-pointer overflow-hidden [&_img]:hover:scale-150">
                <img
                    className="block w-full h-[500px] transition-all duration-500" 
                    src={itemData.imgUrl}
                    alt={`${itemData.title}`}
                />

                <div className="text-white text-5xl absolute left-0 bottom-0 background-dark h-2/6 flex items-center">
                    <div className="w-10/12">
                        <p>{itemData.title}</p>
                    </div>
                </div>
            </div>
            
        </Link>
    );
};