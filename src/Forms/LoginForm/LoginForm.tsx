import { Formik, Form } from 'formik';
import { Input, FormButton, FormTittle } from '../FormComponents';

interface IUserCredentials {
    email: string;
    password: string;
}

interface IProps {
    onSubmitLoginForm: (data: IUserCredentials) => void;
    onRegisterBtnClick: () => void;
}

export const LoginForm = ({onSubmitLoginForm, onRegisterBtnClick}: IProps) => {

    const initialValues: IUserCredentials = {email: '', password: ''};

    return (
        <Formik initialValues={initialValues} onSubmit={(data, actions) => {
            onSubmitLoginForm({
                email: data.email,
                password: data.password
            });
            actions.resetForm();
        }}>
        
            <Form 
                name="UserLoginForm"
                className="user-login-form-bg flex flex-col justify-end p-5 bg-white bg-no-repeat bg-contain mobile:w-[280px] mobile:p-15 tablet:w-[400px] tablet:pt-[150px]"
            >
                <FormTittle>Log in into your account</FormTittle>
                <Input type={'email'}>
                Email
                </Input>

                <Input type={'text'}>
                Password
                </Input>
            
                <div className="mt-[70px] flex flex-col gap-4">
                    <FormButton name="btn" type="submit">Log In</FormButton>
                    <FormButton name="btn" type="button" onClick={onRegisterBtnClick}>Register</FormButton>
                </div>

            </Form>
        </Formik>
    );
};