const input = document.querySelector('.todo__input');
const buttonAddTodo = document.querySelector('.todo__add');

buttonAddTodo.addEventListener('click', addToDo);
input.addEventListener('keypress', function (e) {
  //ф-ция нажатия на enter
  if (e.charCode === 13 || e.key === 'Space') addToDo();
});
function addToDo() {
  if (input.value === '') return;
  const todoList = document.querySelector('.todo__list');
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo__item');
  todoList.append(todoItem);

  todoItem.textContent = input.value;

  const todoButton = document.createElement('div');
  todoButton.classList.add('todo__button');
  todoList.appendChild(todoButton);
  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('todo__edit');
  const iEdit = document.createElement('i');
  iEdit.classList.add('fa-solid', 'fa-check');
  todoButton.appendChild(buttonEdit);
  buttonEdit.appendChild(iEdit);
  const buttonPen = document.createElement('button');
  buttonPen.classList.add('todo__pencil');
  todoButton.appendChild(buttonPen);
  const iPen = document.createElement('i');
  iPen.classList.add('fa-sharp', 'fa-solid', 'fa-pencil');
  buttonPen.appendChild(iPen);
  const buttonDel = document.createElement('button');
  buttonDel.classList.add('todo__delete');
  todoButton.appendChild(buttonDel);
  const iDel = document.createElement('i');
  iDel.classList.add('fa-sharp', 'fa-solid', 'fa-trash');
  buttonDel.appendChild(iDel);
  input.value = '';
  input.focus();

  buttonEdit.addEventListener('click', function () {
    todoItem.classList.toggle('edit');
  });
  buttonPen.addEventListener('click', function () {
    const editTask = prompt('Введите задачу');
    if (editTask === null || editTask === '') {
      return todoItem.innerHTML;
    }
    todoItem.innerHTML = editTask;
  });
  buttonDel.addEventListener('click', function () {
    todoItem.remove();
    todoButton.classList.toggle('button');
  });
}
