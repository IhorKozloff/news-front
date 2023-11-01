import { NewsList } from '../components/NewsList';
import { useGetNewsGeneralInfoQuery } from '../store/api/newsApi';

export const HomePage = () => {
    const { data } = useGetNewsGeneralInfoQuery();
 
    return (
        <>

            {data && <NewsList newsData={data} />}
        </>
    );
};