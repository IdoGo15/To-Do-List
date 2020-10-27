var clearButton = document.getElementById('clearButton');
var addInput = document.getElementById('submit-new');
var tasklist = document.getElementById('list');
let clrbtn = false;

// Add new task
addInput.addEventListener('click', addTask);

// Remove task
tasklist.addEventListener('click', removeTask);

// Clear tasks
clearButton.addEventListener('click', clearTasks);

// Add task
function addTask (e) {  
  var newTask = document.getElementById('task').value;
  // Check if empty
  if(newTask === '') {
    alert('Please enter a new task');
  }
  else {
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
    document.getElementById('task').value = '';
    
  
    //Create clear button if not Exists
    if (clrbtn === false) {
      clrbtn = true;
      var clearbtn = document.createElement('button');
      clearbtn.className = 'btn btn-md text-success border-success rounded';
      clearbtn.appendChild(document.createTextNode('Clear Items'));
      clearButton.appendChild(clearbtn);
    }
  }
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

// Clear tasks
function clearTasks(e) {
  if(confirm('Are You Sure ?')) {
    location.reload();
  }
}




