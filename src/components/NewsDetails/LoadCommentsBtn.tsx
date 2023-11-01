interface IProps {
    commentsNumber: number;
    currentNewsId: string;
    onClick: () => void;
}

export const LoadCommentsBtn = ({commentsNumber, currentNewsId, onClick}: IProps) => {

    const onBtnClick = () => {
        onClick();
    };

    return (
        <button type="button" onClick={onBtnClick} className="opacity-60 hover:opacity-100">
            <div className="flex gap-1">
                <span>{commentsNumber}</span>
                <p>comments</p>
            </div>
        </button>
    );
};