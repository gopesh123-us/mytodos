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
  tasks: string[] = ['To Learn Angular', 'To fix computer'];
  newTask: string = '';
  getTasksItems(): number {
    return this.tasks.length;
  }
  handleAddTask() {
    console.log('task received');
    if (!this.tasks.includes(this.newTask)) {
      this.tasks.push(this.newTask);
    }
  }
  handleDelete() {
    this.tasks.pop();
  }
}
