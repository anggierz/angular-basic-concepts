import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list: string[] = [];
  newElement: string = "";

  constructor() {}

  addElement() {
    if (this.newElement?.trim() !== "") {
      this.list.push(this.newElement);
      this.newElement = "";
    }
  }

  removeElement(index: number) {
    this.list.splice(index, 1);
  }

}
