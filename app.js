var addInput = document.getElementById('submit-new');
var tasklist = document.getElementById('list');

addInput.addEventListener('click', addTask);

function addTask (e) {  
  var newTask = document.getElementById('task').value;
  var li = document.createElement('li');
  li.className = 'list-group-item text-dark h4 border-light bg-light';
  li.appendChild(document.createTextNode(newTask));
  tasklist.appendChild(li);
}

