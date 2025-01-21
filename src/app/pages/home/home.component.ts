import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'MyToDos';
  tasks: string[] = ['To Learn Angular', 'To fix computer'];
  getTasksItems(): number {
    return this.tasks.length;
  }
  handleAddTask(data: any) {
    console.log('task received');
    this.tasks.pop();
  }
}
