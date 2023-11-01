import { Routes, Route } from 'react-router-dom';
import { LayoutPage } from './Pages/Layout';
import { HomePage } from './Pages/HomePage';
import { NewsDetailsPage } from './Pages/NewsDetailsPage';

export const App = () => {
    return (

        <Routes>
 
            <Route path="/" element={<LayoutPage/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/:newsId' element={<NewsDetailsPage/>}/>
            </Route>

        </Routes>
    );
};
