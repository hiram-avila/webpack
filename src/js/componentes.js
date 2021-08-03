import { Todolist } from "../classes/todo-list.class";
import { todo } from "../classes/todo.class";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ ( todo.completado) ? 'completed' : ''} data-id="${ todo.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado ) ? 'checked' : '' }>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

 const div = document.createElement('div');
 div.innerHTML = htmlTodo;

 divTodoList.append( div.firstElementChild );
    
 return div.firstElementChild;

}

//eventos

txtInput.addEventListener('keyup', ( event ) => {

    console.log(event.value);
    if( event.keyCode === 13 && txtInput.nodeValue.length > 0){

        const nuevoTodo = new todo( txtInput.value );
        Todolist.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';

    }
});

divTodoList.addEventListener('click', ( event ) => {
    
        const nombreElemento = event.target,localName;
        const todoElemento = event.trget.parentElement.parentElement;
        const todoID = todoElemento.getAttribute('data-id');

        if( nombreElemento.includes('input')){
            todolist.marcarCompletado( todoId );
            todoElemento.classList.toggle('completed');
    
        } else if (nombreElemento.includes('button')) {
            todolist.eliminarTodo( todoId );
            divTodoList.removeChild( todoElemento);
        
        }
});

btnBorrar.addEventListener('click', () => {
     
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>=0; i--){

    }
}