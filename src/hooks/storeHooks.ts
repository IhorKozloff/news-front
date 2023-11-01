import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import {IStore, AppDispatch} from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IStore> = useSelector;