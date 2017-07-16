import * as React from 'react';
import styled from 'styled-components';

interface RowProps {
    className?: string;
    children?: any;
}

function RowContainer(props: RowProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const RowComponent = styled(RowContainer)`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    flex-flow: row wrap;
    background-color: palevioletred;
`;

export default RowComponent;
