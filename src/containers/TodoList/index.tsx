import * as React from 'react';

import TodoListPresenter from './TodoListPresenter';

interface Todo {
    id: string;
    task: string;
}

interface ListProps {
    todos: Todo[];
}
interface ListState {}

class TodoListContainer extends React.Component<ListProps, ListState> {
    render() {
        return (
            <TodoListPresenter todos={this.props.todos} />
        );
    }
}

export default TodoListContainer;
