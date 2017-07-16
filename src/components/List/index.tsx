import * as React from 'react';
import styled from 'styled-components';

interface ListProps {
    className?: string;
    children?: any;
    bgColor?: string;
}

function ListContainer(props: ListProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

const List = styled(ListContainer)`
    background-color: #45b7a2;
`;

export default List;
