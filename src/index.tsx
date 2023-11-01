import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="news">
                <App />
            </BrowserRouter>
        </PersistGate>
        </Provider> 


);