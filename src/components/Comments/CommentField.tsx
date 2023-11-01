import { Form, Field } from 'formik';
import { Formik, FormikValues } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { setAuthBarStatus } from '../../store/userAuthDataSlice';
import { useState } from 'react';
import { ImagePicker } from './ImagePicker';
import { baseUrl } from '../../constants/baseUrl';
import { IconContext } from 'react-icons';
import { FcRemoveImage } from 'react-icons/fc';
import { notifyWarn } from '../../utils/notify';

interface IProps {
    onSubmit?: (commentText: string, imgUrlsData?: string[]) => void;
}

export const CommentField = ({ onSubmit }: IProps) => {
    const isUserLogin = useAppSelector(state => state.userAuthData.isUserLogin);
    const dispatch = useAppDispatch();
    const [actionBarStatus, setActionBarStatus] = useState(false);

    const [uploadedImgUrls, setUploadedImgUrls] = useState<string[]>([]);

    const openActionBar = () => {
        setActionBarStatus(true);
    };

    const closeActionBar = () => {
        setActionBarStatus(false);
    };

    const initialValues = {
        commentText: '',
    };

    const onSubmitForm = (values: FormikValues, actions: FormikValues) => {
        const { commentText } = values;

        if (isUserLogin !== false) {
            if(onSubmit) {
                if (uploadedImgUrls.length !== 0) {
                    onSubmit(commentText, uploadedImgUrls);
                } else {
                    onSubmit(commentText);
                }
                
            }
            actions.resetForm();
            setUploadedImgUrls([]);
        } else {
            notifyWarn('You must log in to the site');
            dispatch(setAuthBarStatus(true));
        }

    };

    const onAddNewImgUrl = (currentImgUrl: string) => {
        setUploadedImgUrls([
            ...uploadedImgUrls,
            currentImgUrl
        ]);
    };

    const handleRemoveImgBtn = (currentImgUrl: string) => {
        setUploadedImgUrls(uploadedImgUrls.filter(item => item !== currentImgUrl));
    };

    return (
        <div className="relative">
            <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
            
                {({ resetForm }) => (
                    <Form className="register-form" >

                        <div className="flex flex-col items-end gap-1 px-10">
                            <Field onClick={openActionBar} className="w-full border-t-none outline-none px-4 border-b-2 border-solid border-layoutDark " name="commentText" type="text" placeholder="Add a comment..."/>
                            {actionBarStatus === true && <div className="flex gap-2 items-center h-18">
                                <button
                                    onClick={() => {
                                        resetForm();
                                        closeActionBar();
                                    }} 
                                    type="button" 
                                    className="py-2 px-4 mr-0 ml-auto rounded-3xl bg-layoutDark hover:bg-layoutExtraDark hover:text-white active:scale-90">
                                        Cancel
                                </button>
                                <button type="submit" className="py-2 px-4 mr-0 ml-auto rounded-3xl bg-layoutDark hover:bg-layoutExtraDark hover:text-white active:scale-90">Comment</button>
                            </div>}
                        </div>
                        
                    </Form>
                )
                }
            </Formik>

            {actionBarStatus === true && <div className="absolute left-10 bottom-0 flex gap-4">
                <ImagePicker addNewImgUrl={onAddNewImgUrl}/>

                {uploadedImgUrls.length !== 0 && 
                <ul className="w-full h-16 flex gap-6">
                    {uploadedImgUrls.map(item => {
                        return (
                            <li key={item} className="w-16 h-16 relative">

                                <img src={`${baseUrl}/${item}`} alt="users uploaded pic" className="w-full h-full object-cover"/>
                                
                                <div className="absolute right-0 -bottom-2">
                                    <IconContext.Provider value={{ className: 'w-5 h-5' }}>
                                        <button type="button"  onClick={() => {
                                            handleRemoveImgBtn(item);
                                        }}>{<FcRemoveImage />}</button>
                                    </IconContext.Provider>
                                </div>
                            </li>
                        );
                    })}
                </ul>}
            </div>
                
            }

        </div>
    );
};