import { ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
    name?: string;
    onClick?: () => void;
    type: 'button' | 'submit'
}

export const FormButton = ({ children, name, type, onClick }: IProps) => {
    return (
        <button
            onClick={onClick}
            name={name} 
            type={type} 
            className={'auth-form-submit-btn border-0 rounded-2xl font-bold text-lg text-center text-white py-[10px] px-0 cursor-pointer active:scale-90'} 
        >
            {children}
        </button>
    );
};
