import { Field } from 'formik';

interface IProps {
    children?: string;
    type: 'text' | 'email';
    placeholder?: string;
}
export const Input = ({children, type, placeholder}: IProps) => {

    return (
        <label 
            htmlFor={`${children && children.toLowerCase()}`}
            className="flex flex-col mb-[15px]"
        >
            {children}
            <Field 
                className="border-0 border-b border-solid border-black outline-none placeholder:text-xs"
                type={type}
                name={`${children && children.toLowerCase()}`}
                placeholder={placeholder}
            />
        </label>
    );
};