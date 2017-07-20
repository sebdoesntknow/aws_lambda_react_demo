import * as React from 'react';
import styled from 'styled-components';

interface FormProps {
    className?: string;
    children?: any;
    placeholder?: string;
    handleSubmit: any;
}

function FormContainer(props: FormProps): JSX.Element {
    return (
        <form className={props.className} onSubmit={props.handleSubmit}>
            {props.children}
        </form>
    );
}

const Form = styled(FormContainer)`
    font-family: Poppins;
    color: #6e797a;
    background-color: papayawhip;
`;

export default Form;
