import { Todolist } from './classes/todo-list.class';
import { todo } from './classes/todo.class';
import './styles.css';

export const todoList = new Todolist();


const tarea = new todo('aprender JavaScript');
const tarea2 = new todo('comprar un unicornio');

todoList.nuevoTodo( tarea )
todoList.nuevoTodo( tarea2 )

console.log( todoList );

  localStorage.setItem('mi-key', 'abc');