import { Hourglass } from 'react-loader-spinner';
import { NewsList } from '../components/NewsList';
import { useGetNewsGeneralInfoQuery } from '../store/api/newsApi';

export const HomePage = () => {
    const { data, isLoading } = useGetNewsGeneralInfoQuery();
 
    return (
        <>
            {isLoading && <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center"><Hourglass/></div>}
            {data && <NewsList newsData={data} />}
        </>
    );
};