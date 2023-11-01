import { baseUrl } from '../../constants/baseUrl';
import { INewsDetails } from '../../types/news';

interface IProps {
    detailsData: INewsDetails;
}

export const NewsDetails = ({detailsData}: IProps) => {

    return (
        <>
            <div className="headline mb-10">
                <h1 className="mb-2">
                    {detailsData.title}
                </h1>
                <div className="pl-4">
                    <div className="w-10 h-10 rounded-3xl bg-[#ae0001] flex justify-center items-center overflow-hidden">
                        <img src={`${baseUrl}/${detailsData.authorImgUrl}`} className="w-full h-full block object-cover" alt={`${detailsData.author}`}/>
                    </div>
                    <span className="text-layoutExtraDark">
                        By {detailsData.author}
                    </span>

                </div>
            </div>

            <div className="w-full border-b border-solid border-layoutExtraDark mb-2 pb-6">
                <div className="float-left w-7/12 h-auto mr-10">
                    <img
                        className="block w-full h-auto" 
                        src={detailsData.imgUrl}
                        alt={`${detailsData.title}`}
                    />
                </div>
                <p className="text-2xl">
                    {detailsData.content}
                </p>
            </div>
        </>
    );
};