import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
 tasks: Task[] = [];

taskName: string;
taskDescription: string;
    addTask(){
        let tempTask: Task = {
            id: (new Date()).toUTCString(),
            name: this.taskName,
            description: this.taskDescription
        }
        this.tasks.push(tempTask);
    }

    deleteTask(TaskComponent: TaskComponent){
        this.tasks = this.tasks.filter(t=> t.id !== TaskComponent.taskObj.id);
    }


}
