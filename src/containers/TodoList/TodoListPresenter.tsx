import * as React from 'react';

import Row from '../../components/Flexbox/RowComponent';

import H2 from '../../components/Heading/h2';
import Button from '../../components/Button';

const Wrapper = Row.extend`
    width: 100%;
    height: 100%;
    justify-content: center;
`;

const ListWrapper = Row.extend`
    width: 50%;
    height: auto;
`;

const ListItemWrapper = Row.extend`
    background-color: papayawhip;
    flex: 1 100%;
    height: auto;
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
    width: 2em;
    height: 2em;
    background: transparent;
    color: red;
    visibility: hidden;
`;

const AddButton = Button.extend`
    order: 2;
    flex: 0 100%;
    background-color: papayawhip;
    border: 2px solid skyblue;
    border-radius: 3px;
    font-size: 3em;
    color: black;
`;

interface Todo {
    id: string;
    task: string;
}

interface TodoListPresenterProps {
    todos: Todo[];
    onDelete: Function;
}

export default (props: TodoListPresenterProps) => {
    return (
        <Wrapper>
            <ListWrapper>
                {props.todos.map((item, i) => {
                    return (
                        <ListItemWrapper key={i}>
                            <DeleteButton onButtonClick={props.onDelete.bind(null, item.id)}>x</DeleteButton>
                            <Task>{item.task}</Task>
                        </ListItemWrapper>
                    );
                })}
            <AddButton onButtonClick={() => console.log('clicked Add task!')}>+</AddButton>
            </ListWrapper>
        </Wrapper>
    );
};
