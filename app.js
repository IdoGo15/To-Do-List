let clearButton = document.getElementById('clearButton');
let addInput = document.getElementById('submit-new');
let tasklist = document.getElementById('list');
const acomplisheClass = document.querySelector('.acomplishe');
const complitedClass = document.querySelector('.complited');
let clrbtn = false;
let acomplisheCount = 0;
let completedCount = 0;
let tasksArray = new Array();
let arrayCount = 0;




// Add new task
addInput.addEventListener('click', addTask);

// Remove task
tasklist.addEventListener('click', removeTask);

// Updating Completed and Acomplish
tasklist.addEventListener('click', completedAcomplishe);


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
    let li = document.createElement('li');
    li.className = 'list-group-item text-dark h4 border-light bg-light';
    li.appendChild(document.createTextNode(newTask));
    let cmplt = document.createElement('button');
    cmplt.className = 'btn text-success far fa-check-circle fa-1x float-right completed';
    let dltbtn = document.createElement('button');
    dltbtn.className = 'btn text-danger far fa-times-circle fa-1x float-right delete';
    li.appendChild(dltbtn);
    li.appendChild(cmplt);
    tasklist.appendChild(li);
    
    // Clear input
    document.getElementById('task').value = '';

    // Updating Acomplishe
    acomplisheCount +=1;
    acomplisheClass.textContent = ' ' + acomplisheCount;

    clearButton.style.display = 'block';
    
    //Create clear button if not Exists
    if (clrbtn === false) {
      clrbtn = true;
      let clearbtn = document.createElement('button');
      clearbtn.className = 'btn btn-md text-success border-success rounded';
      clearbtn.appendChild(document.createTextNode('Clear Items'));
      clearButton.appendChild(clearbtn);
    }
}
  }
  

// Remove task || Updating Complited and Acomplishe
function removeTask(e) {
  if(e.target.classList.contains('delete')) {
    if (e.target.parentElement.classList.contains('done')) {
      completedCount -= 1;
      complitedClass.textContent = ' ' + completedCount;
    }
    else if(confirm('Are You Sure ?')){
        acomplisheCount -=1;
        acomplisheClass.textContent = ' ' + acomplisheCount;
      }
      let li = e.target.parentElement;
      tasklist.removeChild(li);
      
      if (acomplisheCount === 0 && completedCount === 0) {
        acomplisheClass.textContent = ' ';
        complitedClass.textContent = ' ';
      }
 
      if (completedCount === 0 && acomplisheCount === 0) {
        clearButton.style.display = 'none';
      }
    }
  }


// Updating Completed & Acomplishe
function completedAcomplishe (e) {
  if (e.target.classList.contains('completed')) {
    if (e.target.parentElement.classList.contains('done')){
      completedCount -= 1;
      complitedClass.textContent = ' ' + completedCount;
      acomplisheCount +=1;
      acomplisheClass.textContent = ' ' + acomplisheCount;
      e.target.classList = 'btn text-success far fa-check-circle fa-1x float-right completed';
      e.target.parentElement.classList = 'list-group-item text-dark h4 border-light bg-light'
    }
    else {
      e.target.parentElement.classList += ' ' + 'done';
      e.target.classList += ' ' + 'done-color';
      completedCount += 1;
      complitedClass.textContent = ' ' + completedCount;
      acomplisheCount -=1;
      acomplisheClass.textContent = ' ' + acomplisheCount;
    }
}

}

// Clear tasks
function clearTasks(e) {
  if(confirm('Are You Sure ?')) {
    location.reload();
  }
}

