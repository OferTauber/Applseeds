import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './DTO/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '5be6cbb7-c493-469b-bd59-c3528b46bfac',
      title: 'Do yoga',
      desc: 'Massala!',
      status: TaskStatus.OPEN,
    },
  ];

  getAllTasks(): Task[] {
    return [...this.tasks];
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, desc } = createTaskDto;

    const newTask: Task = {
      id: uuid(),
      title,
      desc,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) throw new NotFoundException();
    return { ...task };
  }

  deleteTask(id: string): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (-1 === taskIndex) throw new NotFoundException();
    this.tasks.splice(taskIndex, 1);
  }
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
