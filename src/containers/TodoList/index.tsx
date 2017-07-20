import * as React from 'react';

import TodoListPresenter from './TodoListPresenter';

interface Todo {
    id: string;
    task: string;
}

interface ListProps {
    todos: Todo[];
    task: string;
    onDelete: Function;
    onAddTask: Function;
    onChange: Function;
}
interface ListState {}

class TodoListContainer extends React.Component<ListProps, ListState> {
    render() {
        return (
            <TodoListPresenter
                task={this.props.task}
                onDelete={this.props.onDelete}
                onAddTask={this.props.onAddTask}
                onChange={this.props.onChange}
                todos={this.props.todos}
            />
        );
    }
}

export default TodoListContainer;
