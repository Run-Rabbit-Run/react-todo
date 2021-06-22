import React from "react";
import { TasksList } from "./components/tasks-list/tasks-list.component";
import { CreateTask } from "./components/create-task/create-task.component";
import _ from "lodash";
import "./App.scss";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: {
        byId: {
          'uniqueId': {
            id: 'uniqueId',
            text: 'Your first Task!',
            state: 'active',
          }
        },

        allIds: ['uniqueId'],
      },
      newTaskValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newTaskValue: event.target.value });
  }

  handleAddTask = (event) => {
    event.preventDefault();
    const { tasks, newTaskValue } = this.state;
    const task = {
      id: _.uniqueId(),
      text: newTaskValue,
      state: 'active',
    }
    const byId = { ...tasks.byId, [task.id]: task };
    const allIds = [ ...tasks.allIds, task.id ];
    const newTasks = { byId: byId, allIds: allIds };
    this.setState({ tasks: newTasks, newTaskValue: '' });
  }

  handleRemoveTask = (id) => () => {
    const { byId, allIds } = this.state.tasks;
    const newById = _.omit(byId, id);
    const newAllIds = allIds.filter((item) => item !== id);
    const newTasks = { byId: newById, allIds: newAllIds };
    this.setState({ tasks: newTasks });
  }

  handleChangeTaskState = (id) => () => {
    console.log('hey')
    const { byId } = this.state.tasks;
    const currentState = byId[id].state;
    const newState = currentState === 'active' ? 'finished' : 'active';
    const newById = { ...byId };
    newById[id].state = newState;
    this.setState({ byId: newById });
  }

  render() {
    return (
      <div className='App'>
        <div className='app-container'>
          <h1 className='app-title'>Todo App</h1>
          <CreateTask
            placeholder='Новая задача'
            taskValue={this.state.newTaskValue}
            handleChange={this.handleChange}
            handleAddTask={this.handleAddTask}
          />
          <TasksList
            tasks={this.state.tasks}
            handleRemoveTask={this.handleRemoveTask}
            handleChangeTaskState={this.handleChangeTaskState}
          />
        </div>
      </div>
    );
  }
}

export default App;
