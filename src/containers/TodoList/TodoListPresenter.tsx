import * as React from 'react';

import Row from '../../components/Flexbox/RowComponent';

import List from '../../components/List';
import H2 from '../../components/Heading/h2';
import Button from '../../components/Button';

const Wrapper = Row.extend`
    width: 100%;
    height: 100%;
    justify-content: center;
`;

const ListWrapper = List.extend`
    width: 50%;
    height: auto;
`;

const ListItemWrapper = Row.extend`
    background-color: papayawhip;
    flex: 1 100%;
    height: 5em;
    border: 2px solid green;
    border-radius: 3px;

    &:hover > button {
        visibility: visible;
    }
`;

const Task = H2.extend`
    order: 2;
    text-align: center;
    margin: 1em auto;
`;

const DeleteButton = Button.extend`
    order: 1;
    background: transparent;
    color: red;
    visibility: hidden;
`;

interface Todo {
    id: string;
    task: string;
}

interface TodoListPresenterProps {
    todos: Todo[];
}

export default (props: TodoListPresenterProps) => {
    return (
        <Wrapper>
            <ListWrapper>
                {props.todos.map((item, i) => {
                    return (
                        <ListItemWrapper key={i}>
                            <DeleteButton onButtonClick={() => console.log('Button clicked!')}>x</DeleteButton>
                            <Task>{item.task}</Task>
                        </ListItemWrapper>
                    );
                })}
            </ListWrapper>
        </Wrapper>
    );
};
