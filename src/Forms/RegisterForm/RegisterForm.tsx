import { Form, Formik } from 'formik';
import { Input, FormButton, FormTittle } from '../FormComponents';

interface IFields {
    name: string;
    email: string;
    password: string;
}

interface IProps {
    onSubmitRegisterForm: (data: IFields) => void;
    onLoginBtnClick: () => void;
}

export const RegisterForm = ({onSubmitRegisterForm, onLoginBtnClick}: IProps) => {

    const initialValues: IFields = {name: '', email: '', password: ''};

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values, actions) => {
                onSubmitRegisterForm({
                    name: values.name,
                    email: values.email, 
                    password: values.password
                });
                actions.resetForm();
            }}>
                <Form 
                    name="UserRegisterForm"
                    className="user-register-form-bg flex flex-col p-5 bg-white bg-no-repeat bg-contain mobile:w-[280px] mobile:p-15 tablet:w-[400px] pt-[50px] bg-registerBg"
                >

                    <FormTittle>Sign Up for Contacts Book</FormTittle>
                    <ul className="flex-col mt-10 mb-[50px]">
                        <li>
                            <Input type={'text'}>
                        Name
                            </Input>
                        </li>

                        <li>
                            <Input type={'email'}>
                        Email
                            </Input>
                        </li>

                        <li>
                            <Input type={'text'} placeholder="  Password must have at least 6 characters">
                        Password
                            </Input>
                        </li>
                    </ul>
                    <div className="mt-[40px] flex flex-col gap-4">
                        <FormButton name="btn" type="submit">Sign Up</FormButton>
                        <FormButton name="btn" type="button" onClick={onLoginBtnClick}>Go to Login</FormButton>
                    </div>

                </Form>
            </Formik>
    
        </>
    );
};