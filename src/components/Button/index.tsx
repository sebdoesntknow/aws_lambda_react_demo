import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    className?: string;
    children?: any;
    onButtonClick(): void;
}

function ButtonContainer(props: ButtonProps): JSX.Element {
    return (
        <button className={props.className} onClick={props.onButtonClick}>
            {props.children}
        </button>
    );
}

const Button = styled(ButtonContainer)`
    width: 2em;
    height: 2em;
    border: 1px solid red;
    background-color: yellow;
`;

export default Button;
