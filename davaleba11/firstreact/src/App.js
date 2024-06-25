import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
      newTask: ''
    };
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState(state => ({
        tasks: [...state.tasks, state.newTask],
        newTask: ''
      }));
    }
  }

  completeTask = (index) => {
    this.setState(state => {
      const completedTask = state.tasks.splice(index, 1);
      return {
        tasks: state.tasks,
        completedTasks: [...state.completedTasks, ...completedTask]
      };
    });
  }

  deleteTask = (index) => {
    this.setState(state => {
      const completedTasks = state.completedTasks.slice();
      completedTasks.splice(index, 1);
      return { completedTasks };
    });
  }

  moveToTasks = (index) => {
    this.setState(state => {
      const taskToMove = state.completedTasks.splice(index, 1);
      return {
        tasks: [...state.tasks, ...taskToMove],
        completedTasks: state.completedTasks
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleChange}
            placeholder="Enter a new task"
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <div className="tasks-container">
          <div className="tasks">
            <h2>Tasks to be performed</h2>
            <ul>
              {this.state.tasks.map((task, index) => (
                <li key={index}>
                  {task} 
                  <button onClick={() => this.completeTask(index)}>Finish</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="completed-tasks">
            <h2>Completed Tasks</h2>
            <ul>
              {this.state.completedTasks.map((task, index) => (
                <li key={index}>
                  {task} 
                  <button onClick={() => this.deleteTask(index)}>Delete</button>
                  <button onClick={() => this.moveToTasks(index)}>Move to Tasks</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;