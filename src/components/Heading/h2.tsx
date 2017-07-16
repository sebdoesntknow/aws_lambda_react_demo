import * as React from 'react';
import styled from 'styled-components';

interface HeadingProps {
    className?: string;
    children?: any;
    color?: string;
}

function HeadingContainer(props: HeadingProps): JSX.Element {
    return (
        <h2 className={props.className}>
            {props.children}
        </h2>
    );
}

const H2 = styled(HeadingContainer)`
    font-family: Poppins;
    color ${props => props.color ? props.color : 'red'}
`;

export default H2;
