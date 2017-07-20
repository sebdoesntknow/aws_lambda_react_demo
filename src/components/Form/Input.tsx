import * as React from 'react';
import styled from 'styled-components';

interface InputProps {
    className?: string;
    children?: any;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: any;
}

function InputContainer(props: InputProps): JSX.Element {
    return (
        <input className={props.className} type={props.type} value={props.value} onChange={props.onChange}>
            {props.children}
        </input>
    );
}

const Input = styled(InputContainer).attrs({
    placeholder: (props: InputProps) => props.placeholder || 'Type a task',
    type: (props: InputProps) => props.type || 'text',
    value: (props: InputProps) => props.value || undefined
})`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

export default Input;
