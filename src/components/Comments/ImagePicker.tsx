import { useRef } from 'react';
import { IconContext } from 'react-icons';
import { FcAddImage } from 'react-icons/fc';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { baseUrl } from '../../constants/baseUrl';
import axios from 'axios';
import { notifyWarn } from '../../utils/notify';
import { setAuthBarStatus } from '../../store/userAuthDataSlice';

interface IProps {
    addNewImgUrl: (newImgUrl: string) => void;
}

export const ImagePicker = ({addNewImgUrl}: IProps) => {

    const token = useAppSelector(state => state.userAuthData.authData.token);
    const isUserAuthorized = useAppSelector(state => state.userAuthData.isUserLogin);
    const dispatch = useAppDispatch();

    const filePicker = useRef<HTMLInputElement>(null);

    const uploadImg = async (imgData: FormData, token: string) => {
        try {
            const result = await axios.post(`${baseUrl}/api/upload`, imgData,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            return result.data;

        } catch (err) {
            notifyWarn(`${err}`);
            console.log(err);
        }
    };

    const onImgInputChange = async (event:React.ChangeEvent<HTMLInputElement>) => {

        if (isUserAuthorized) {
            if (event.target.files) {
                const imgData = new FormData();
                imgData.append('image', event.target.files[0]);
    
                const result = await uploadImg(imgData, token!);
    
                addNewImgUrl(result.img_url);
            }
        } else {
            notifyWarn('You must log in to the site');
            dispatch(setAuthBarStatus(true));
        }
    };

    const handlePick = () => {
        filePicker.current?.click();
    };

    return (
        <div>
            <IconContext.Provider value={{ className: 'w-10 h-10' }}>
                <button type="button"  onClick={handlePick}>{<FcAddImage />}</button>
            </IconContext.Provider>
            <input 
                className="custom-hidden" 
                ref={filePicker}
                type="file" 
                accept=".jpg,.gif,.png" 
                onChange={onImgInputChange}
            ></input>
        </div>

    );
};