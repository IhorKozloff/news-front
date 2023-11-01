import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { changeLoginStatus, clearUserData, setAuthBarStatus } from '../../store/userAuthDataSlice';
import axios from 'axios';
import { baseUrl } from '../../constants/baseUrl';
import { notifyWarn } from '../../utils/notify';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

export const Header = () => {
    const user = useAppSelector(state => state.userAuthData);
    const dispatch = useAppDispatch();

    const onLogOutBtnClick = async () => {
        try {
            const logResult = await axios.get(`${baseUrl}/api/auth/logout/${user.authData.id}`, {
                headers: {
                    'Authorization': `Bearer ${user.authData.token}`
                }
            });

            if (logResult.status === 204) {
                dispatch(clearUserData());
                dispatch(changeLoginStatus(false));
            } else {
                throw new Error('Logout error :(');
            }
        } catch (err: any) {
            notifyWarn(`${err.message}`);
        }
    };

    const onLoginBtnClick = () => {
        dispatch(setAuthBarStatus(true));
    };

    return (
        <header className="py-4 px-4 w-full bg-white">
            <div className="flex items-center justify-between gap-4 opacity-80">

                <IconContext.Provider value={{ className: 'w-10 h-10' }}>
                    {user.isUserLogin && 
                        <div className="flex gap-2 items-center">
                            <IconContext.Provider value={{ className: 'w-10 h-10 text-[#43ff64d9]' }}>
                                <FaUserCircle/>
                            </IconContext.Provider>
                            <span className="text-2xl font-medium">{user.authData.email}</span>
                        </div>
                    }

                    {user.isUserLogin === false && 
                        <div className="w-full flex items-center justify-between">
                            <FaUserCircle/>
                            <button onClick={onLoginBtnClick} className="px-4 py-2 border-2 border-solid border-black rounded-xl">Sign In</button>
                        </div>
                        
                    }
                    {user.isUserLogin && <button type="button" onClick={onLogOutBtnClick}><RiLogoutBoxRFill/></button>}
                </IconContext.Provider>

            </div>
        </header>
    );
};