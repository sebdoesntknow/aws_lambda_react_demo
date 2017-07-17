import * as React from 'react';
// import * as uuid from 'uuid';
import fetch from 'node-fetch';

import TodoList from './containers/TodoList';

interface Todo {
    id: string;
    task: string;
}

interface AppProps {}
interface AppState {
    processed: boolean;
    success: boolean;
    error: boolean;
    todos: Todo[];
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            processed: true,
            success: false,
            error: false,
            todos: []
        };

        this.getTasks = this.getTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
      this.getTasks();
    }

    render() {
      return (
        <div className="App">
          <TodoList 
            onDelete={this.deleteTask}
            todos={this.state.todos}
          />
        </div>
      );
    }

    createTask(todo: Todo): void {
      // Set processing back to false once the service
      // completes adding the task and returns a valid response
      console.log('Craeting new task!');
    }

    getTasks() {
      fetch('https://2db2fnr0cl.execute-api.us-east-1.amazonaws.com/dev/react/read')
        .then((res) => {
          return res.json();
        })
        .then(body => {
          this.setState({
            todos: [ ...body ]
          });
        })
        .catch(console.error.bind(console));
    }

    deleteTask(id: string): void {
      console.log('DELETING ITEM:', id);
      fetch(`https://2db2fnr0cl.execute-api.us-east-1.amazonaws.com/dev/react/delete?id=${id}`)
        .then((res) => {
          return res.json();
        })
        .then(body => {
          this.getTasks();
        })
        .catch(console.error.bind(console));
    }

    editTask(id: string, task: string): void {
      console.log('Editing task!');
    }
}

export default App;
