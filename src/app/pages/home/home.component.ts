import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'MyToDos';
  tasks: string[] = [];
  newTask: string = '';
  completedTasks: string[] = [];
  getTasksItems(): number {
    return this.tasks.length;
  }
  handleAddTask() {
    this.newTask = this.newTask.trim();
    if (this.newTask !== '' && !this.tasks.includes(this.newTask)) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
  handleDelete(data: number) {
    this.tasks.splice(data, 1);
  }

  handleDone(data: number) {
    this.completedTasks.push(this.tasks[data]);
    this.tasks.splice(data, 1);
  }

  getCompletedTasksLength(): number {
    return this.completedTasks.length;
  }
}
