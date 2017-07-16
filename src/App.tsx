import * as React from 'react';
import * as uuid from 'uuid';

import TodoList from './containers/TodoList';

interface Todo {
    id: string;
    task: string;
}

interface AppProps {}
interface AppState {
    processing: boolean;
    todos: Todo[];
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            processing: false,
            todos: [
                {
                    id: uuid.v4(),
                    task: 'complete the demo!'
                },
                {
                    id: uuid.v4(),
                    task: 'Write tests!'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn styled components'
                },
                {
                    id: uuid.v4(),
                    task: 'Did I say write tests?'
                }
            ]
        };
    }
  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} />
      </div>
    );
  }

  createTask(todo: Todo): void {
    console.log('Craeting new task!');
  }

  deleteTask(id: string): void {
    console.log('Deleting task!');
  }

  editTask(id: string, task: string): void {
    console.log('Editing task!');
  }
}

export default App;
