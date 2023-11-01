import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import newsApi from './api/newsApi';
import commentsApi from './api/commentsApi';
import authApi from './api/authApi';
import replyesApi from './api/replyesApi';
import uploadImgApi from './api/uploadImgApi';
import { userAuthDataPersistedReducer } from './userAuthDataSlice';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        newsApi: newsApi.reducer,
        commentsApi: commentsApi.reducer,
        authApi: authApi.reducer,
        userAuthData: userAuthDataPersistedReducer,
        replyesApi: replyesApi.reducer,
        uploadImgApi: uploadImgApi.reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), 
        newsApi.middleware,
        commentsApi.middleware,
        replyesApi.middleware,
        authApi.middleware,
        uploadImgApi.middleware
    ]
});

setupListeners(store.dispatch);

export type IStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
