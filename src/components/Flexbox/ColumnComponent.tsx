import * as React from 'react';
import styled from 'styled-components';

interface ColumnProps {
    className?: string;
    children?: JSX.Element[] | string;
}

function ColumnContainer(props: ColumnProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const ColumnComponent = styled(ColumnContainer)`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    flex-flow: column wrap;
    background-color: #adea12;
`;

export default ColumnComponent;
