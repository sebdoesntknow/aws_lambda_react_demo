import * as React from 'react';
import * as uuid from 'uuid';
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
    task: string;
    todos: Todo[];
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            processed: true,
            success: false,
            error: false,
            task: '',
            todos: []
        };

        this.getTasks = this.getTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    componentDidMount() {
      this.getTasks();
    }

    render() {
      return (
        <div className="App">
          <TodoList
            task={this.state.task}
            onDelete={this.deleteTask}
            onAddTask={this.createTask}
            onChange={this.handleTaskChange}
            todos={this.state.todos}
          />
        </div>
      );
    }

    createTask(event: any): void {
      let createService = `https://2db2fnr0cl.execute-api.us-east-1.amazonaws.com/dev/react/create`;
      event.preventDefault();
      fetch(`${createService}?id=${uuid.v4()}&task=${this.state.task}`)
        .then((res) => {
          this.setState({
            task: ''
          });
          return res.json();
        })
        .then(() => {
          this.getTasks();
        })
        .catch(console.error.bind(console));
    }

    handleTaskChange(event: any) {
      this.setState({
        task: event.target.value
      });
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
