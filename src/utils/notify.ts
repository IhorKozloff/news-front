import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message: string) => {
    toast.success(message, {
        position: toast.POSITION.TOP_CENTER
    });
};
export const notifyWarn = (message: string) => {
    toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT
    });
};