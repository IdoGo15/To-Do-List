var addInput = document.getElementById('submit-new');
var tasklist = document.getElementById('list');

// Add new task
addInput.addEventListener('click', addTask);

// Remove task
tasklist.addEventListener('click', removeTask);

// Add task
function addTask (e) {  
  var newTask = document.getElementById('task').value;
  var li = document.createElement('li');
  li.className = 'list-group-item text-dark h4 border-light bg-light';
  li.appendChild(document.createTextNode(newTask));
  var cmplt = document.createElement('button');
  cmplt.className = 'btn text-success far fa-check-circle fa-1x float-right completed';
  var dltbtn = document.createElement('button');
  dltbtn.className = 'btn text-danger far fa-times-circle fa-1x float-right delete';
  li.appendChild(dltbtn);
  li.appendChild(cmplt);
  tasklist.appendChild(li);
}

// Remove task
function removeTask(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are You Sure ?')){
      var li = e.target.parentElement;
      tasklist.removeChild(li);
    }
  }
}

