import { RiBookmarkLine } from 'react-icons/ri';
import { CgHashtag } from 'react-icons/cg';
import { BiUpArrowCircle } from 'react-icons/bi';
import { ImOpt } from 'react-icons/im';
import { ReactionBtn } from './ReactionBtn';
import { dateHumanizer } from '../../utils/dateHumanizer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Replyes } from '../Replyes/Replyes';
import { baseUrl } from '../../constants/baseUrl';
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

interface IProps {
    id: string;
    text: string;
    user: string;
    date: string;
    parentId: string;
    img_urls: string[];
}
export const CommentsItem = ({id, date, text, user, parentId, img_urls}: IProps) => {

    const { newsId } = useParams();

    const [isReplyesOpen, serIsReplyesOpen] = useState(false);
   
    const onReplyBtnClick = () => {
        if (isReplyesOpen === false) {
            serIsReplyesOpen(true);
        } else {
            serIsReplyesOpen(false);
        }
        
    };

    return (
        <div className="w-full px-10 py-5">
            <div className="comment-header flex items-center bg-commentHeaderMale">
                <div className="avatar w-10 h-10 mr-6">
                    <IconContext.Provider value={{ className: 'w-10 h-10' }}>
                        <FaUserCircle/>
                    </IconContext.Provider>
                </div>

                <span className="nickname mr-2 font-bold">{user}</span>

                <span className="date mr-10 text-[#767e8d] font-medium">{`${dateHumanizer(date)}`}</span>

                <ul className="userbar flex gap-3 items-center [&_svg]:fill-commentIcon [&_li]:hover:cursor-pointer">
                    <li><CgHashtag color="#889fcd"/></li>
                    <li><RiBookmarkLine/></li>
                    <li><ImOpt/></li>
                    <li><BiUpArrowCircle/></li>
                </ul>

                <div className="likes mr-0 ml-auto w-150px flex items-center gap-2">
                    <ReactionBtn reaction="positive"/>

                    <span className="count text-layoutExtraDark font-bold">{0}</span>

                    <ReactionBtn reaction="negative"/>
                </div>
            </div>

            <div className="comment-text mt-4 font-medium">
                {text}
            </div>

            {img_urls.length !== 0 && <ul>
                {img_urls.map(item => {
                    return (
                        <li key={item}>
                            <img src={`${baseUrl}/${item}`} alt="" className="w-auto h-16"/>
                        </li>
                    );
                })}
            </ul>}
          
            <button 
                className="py-2 px-4 mr-0 ml-auto text-replyBtnText font-medium rounded-3xl hover:bg-replyBtnBg active:scale-90"    
                type="button" 
                onClick={onReplyBtnClick}>
                Reply
            </button>
            
            {isReplyesOpen === true && <Replyes newsId={newsId!} parentId={id}/>}
        </div>
    );
};