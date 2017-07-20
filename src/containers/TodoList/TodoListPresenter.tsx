import * as React from 'react';

import Row from '../../components/Flexbox/RowComponent';

import H2 from '../../components/Heading/h2';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';

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

const AddTaskForm = Form.extend`
    display: flex;
    order: 2;
    flex: 0 100%;
    border-radius: 3px;
    height: 5em;

    &:hover {
        box-shadow: 0 2px 12px 0 #8fa8c4;
        border: solid 3px #01a9f4;
    }
`;

const TaskField = Input.extend`
    flex: 1 100%;
    font-family: Poppins;
    font-size: 1.5em;
    color: black;
    background-color: palevioletred;
`;
const Submit = Input.extend`
    font-size: 2em;
    margin: auto;
`;

interface Todo {
    id: string;
    task: string;
}

interface TodoListPresenterProps {
    todos: Todo[];
    task: string;
    onDelete: Function;
    onAddTask: Function;
    onChange: Function;
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
            <AddTaskForm handleSubmit={props.onAddTask}>
                <TaskField placeholder={'Type a task...'} value={props.task} onChange={props.onChange} />
                <Submit type="submit" value="Add" />
            </AddTaskForm>
            </ListWrapper>
        </Wrapper>
    );
};
