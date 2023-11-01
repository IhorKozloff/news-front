import { NewsList } from '../components/NewsList';
import { INews } from '../types/news';
import { useGetNewsGeneralInfoQuery } from '../store/api/newsApi'

export const HomePage = () => {
    const { data, isLoading } = useGetNewsGeneralInfoQuery();
 
    return (
        <>

            {data && <NewsList newsData={data} />}
        </>
    );
};