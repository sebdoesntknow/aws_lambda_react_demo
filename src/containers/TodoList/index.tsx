import * as React from 'react';

import TodoListPresenter from './TodoListPresenter';

interface Todo {
    id: string;
    task: string;
}

interface ListProps {
    todos: Todo[];
    onDelete: Function;
}
interface ListState {}

class TodoListContainer extends React.Component<ListProps, ListState> {
    render() {
        return (
            <TodoListPresenter
                onDelete={this.props.onDelete}
                todos={this.props.todos}
            />
        );
    }
}

export default TodoListContainer;
