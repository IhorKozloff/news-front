import { FaArrowDownLong } from 'react-icons/fa6';

interface IProps {
    reaction: 'positive' | 'negative';
    onClick?: () => void;
}

export const ReactionBtn = ({reaction, onClick}: IProps) => {

    const classNames =  reaction === 'positive' ? 'rotate-180' : '';

    return (
        <button className={`text-likeIcon hover:text-layoutExtraDark ${classNames}`} type="button" onClick={() => {
            if (onClick) {
                onClick();
            }
        }}>
            <span><FaArrowDownLong/></span>
        </button>
    )
}