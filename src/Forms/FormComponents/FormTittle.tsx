interface IProps {
    children?: string;
    className?: string;
}

export const FormTittle = ({ children, className }: IProps) => {
    return (
        <h3 className={`mt-5 mb-5 tablet:mt-0 tablet:mb-[71px] ${className}`}>
            {children}
        </h3>
    );
};