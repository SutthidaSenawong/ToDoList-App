const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // let dateEl = document.createElement('date');
    // dateEl.innerHTML = inputBox.value;

    // // date cell
    // let dateEl = document.createElement('p');
    // dateEl.innerText = date;
    // listContainer.appendChild(dateEl);
    // // time cell
    // let timeEl = document.createElement('p');
    // timeEl.innerText = time;
    // listContainer.appendChild(timeEl);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem('toDoItem', listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem('toDoItem');
}
showTask();
