import { useEffect, useState } from 'react';
import { LoginForm, RegisterForm } from '../Forms';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { setAuthBarStatus } from '../store/userAuthDataSlice';
import { UserLoginData, UserRegisterData } from '../types/auth';
import { useLoginMutation, useRegisterMutation } from '../store/api/authApi';
import { notifySuccess, notifyWarn } from '../utils/notify';
import {changeLoginStatus, setUserData } from '../store/userAuthDataSlice';
import { Hourglass } from 'react-loader-spinner';

export const AuthBar = () => {
    const isUSerLogIn = useAppSelector(state => state.userAuthData.isUserLogin);
    const [temporaryAuthData, setTemporaryAuthData] = useState<UserRegisterData | null>(null);

    const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');
    const dispatch = useAppDispatch();

    const [userRegister, registerResult] = useRegisterMutation();
    const [userLogin, loginResult] = useLoginMutation();

    const onChangeFormBtnClick = () => {
        if (activeForm === 'login') {
            setActiveForm('register');
        } else {
            setActiveForm('login');
        }
    };

    const onLoginFormSubmit = (data: UserLoginData) => {
        userLogin(data);
    };

    const onRegisterFormSubmit = (data: UserRegisterData) => {
        setTemporaryAuthData(data);
        userRegister(data); 
    };

    useEffect(() => {
        if (registerResult.isError) {
            notifyWarn('The entered data is incorrect, or Email in use!');
            registerResult.reset();
        }
    },[registerResult, registerResult.error, registerResult.isError]);

    useEffect(() => {
        if (loginResult.isError) {
            notifyWarn('The entered data is incorrect, or Email is not found!');
            loginResult.reset();
        }
    },[loginResult.error, loginResult.isError, loginResult]);

    useEffect(() => {
        if(registerResult.isSuccess && temporaryAuthData !== null && isUSerLogIn === false) {
            notifySuccess('Register successful!');

            userLogin({
                email: temporaryAuthData.email,
                password: temporaryAuthData.password
            });
            setTemporaryAuthData(null);
        }
    }, [temporaryAuthData, isUSerLogIn, registerResult.isSuccess, userLogin]);

    useEffect(() => {
        if(loginResult.isSuccess && temporaryAuthData === null && isUSerLogIn === false) {
            dispatch(setUserData({
                email: loginResult.data.email,
                token: loginResult.data.token,
                id: loginResult.data.id
            }));

            dispatch(changeLoginStatus(true));
            dispatch(setAuthBarStatus(false));
        }
    });

    return (
        <ModalWindow onClose={() => {
            dispatch(setAuthBarStatus(false));
        }}>
            <div className="w-[290px] h-[440px]">
                {activeForm === 'login' && <LoginForm onSubmitLoginForm={onLoginFormSubmit} onRegisterBtnClick={onChangeFormBtnClick}/>}
                {activeForm === 'register' && <RegisterForm onSubmitRegisterForm={onRegisterFormSubmit} onLoginBtnClick={onChangeFormBtnClick}/>}
            </div>

            {(loginResult.isLoading || registerResult.isLoading) && 
                        <ModalWindow isCloseBtnActive={false}>
                            <Hourglass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="hourglass-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                colors={['#306cce', '#72a1ed']}
                            />
                        </ModalWindow>
            }
        </ModalWindow>

    );
};