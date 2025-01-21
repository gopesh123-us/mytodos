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
  currentTask: string = '';
  completedTasks: string[] = [];
  editItemNum: number = -1;
  doEditing: boolean = false;
  item: string = '';
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
  updateTask(data: number) {
    this.currentTask = this.currentTask.trim();
    if (this.currentTask !== '' && !this.tasks.includes(this.currentTask)) {
      this.tasks.splice(data, 1);
      this.tasks[data] = this.currentTask;
      this.doEditing = false;
      this.currentTask = '';
      this.editItemNum = -1;
    }
  }
  handleDelete(data: number) {
    this.tasks.splice(data, 1);
  }

  handleDone(data: number) {
    this.completedTasks.push(this.tasks[data]);
    this.tasks.splice(data, 1);
  }

  handleClearAll() {
    this.completedTasks.length = 0;
  }

  handleEdit(data: number) {
    this.editItemNum = data;
    this.doEditing = true;
    this.currentTask = this.tasks[data];
  }

  getCompletedTasksLength(): number {
    return this.completedTasks.length;
  }

  getEditingStatus(data: number) {
    return this.doEditing === true && this.editItemNum === data;
  }
}
