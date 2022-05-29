import React from 'react';

const tasksList = [
  { name: 'CSS', completed: true },
  { name: 'JavaScript', completed: true },
  { name: 'Learn React', completed: false },
  { name: 'Learn mongoDB', completed: false },
  { name: 'Learn Node JS', completed: false },
];

const EX18_2 = () => {
  const [tasks, setTasks] = React.useState(tasksList);

  const mapTasks = (list) => {
    return list.map((task, index) => {
      return (
        <Task key={index} task={task} index={index} toogleTask={toogleTask} />
      );
    });
  };

  const toogleTask = (index) => {
    const tempList = [...tasks];
    tempList[index].completed = !tempList[index].completed;
    setTasks(tempList);
  };

  return <div>{mapTasks(tasks)}</div>;
};

export default EX18_2;

const Task = ({ task, index, toogleTask }) => {
  return (
    <h2>
      <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
      <span
        onClick={() => {
          toogleTask(index);
        }}
      >
        {' '}
        {task.completed ? 'X' : 'V'}
      </span>{' '}
    </h2>
  );
};
