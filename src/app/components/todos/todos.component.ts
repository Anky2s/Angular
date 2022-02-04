import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'İlk yapilacak',
        completed: false
      },
      {
        content: 'İkinci yapilacak',
        completed: false
      }
    ]
  }
// Ustune tiklandiginda css degistirerek cizgi cekme fonksiyonu
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
// remove' a basinca silme fonksiyonu
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

//push komutuyla listeye eleman ekleme ekledikten sonra input' u bosaltma
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
