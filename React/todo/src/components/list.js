import React, { Component } from 'react';
import Task from './task';
import list from '../temp-list'; // !temp!

class List extends Component {
  state = { tasksList: [], currentId: undefined };

  componentDidMount() {
    this.setState({ tasksList: list, currentId: list.length + 1 });
  }

  onTaskUpdate = (updatedTask) => {
    const updatedTaskList = [...this.state.tasksList];
    const updtedTaskIndex = updatedTaskList.findIndex(
      (task) => task.id === updatedTask.id
    );
    updatedTaskList[updtedTaskIndex] = updatedTask;
    this.setState({ tasksList: updatedTaskList });
  };

  onTaskDeleted = (delededTask) => {
    const updatedTaskList = [...this.state.tasksList];
    const deletedTaskIndex = updatedTaskList.findIndex(
      (task) => task.id === delededTask.id
    );
    updatedTaskList.splice(deletedTaskIndex, 1);
    this.setState({ tasksList: updatedTaskList });
  };

  addTask = () => {
    const newTask = {
      task: '',
      Deadline: null,
      priority: null, // 1-5
      id: this.state.currentId,
    };

    const newList = [...this.state.tasksList];
    newList.unshift(newTask);
    this.setState({ tasksList: newList, currentId: newTask.id + 1 });
  };

  ganerateList() {
    return this.state.tasksList.map((task) => {
      console.log(task);
      return (
        <Task
          task={task}
          key={task.id}
          onUpdate={this.onTaskUpdate}
          onDelete={this.onTaskDeleted}
          openMode={task === '' ? 'edit' : 'no'}
        />
      );
    });
  }

  render() {
    return (
      <>
        <div className="ui middle aligned divided list  container">
          <button className="large blue ui button" onClick={this.addTask}>
            + Add
          </button>
          <br />
          <br />
          {this.ganerateList()}
        </div>
      </>
    );
  }
}

export default List;
