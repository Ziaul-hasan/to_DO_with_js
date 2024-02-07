const inputText = document.getElementById('input-text');
const taskContainer = document.getElementById('container');
const completeTaskContainer = document.getElementById('complete-container')

document.getElementById('btn-add').addEventListener('click', function() {
    const newTask = inputText.value;
    // console.log(newTask)
    const newList = document.createElement('li');
    newList.classList.add('item')
    newList.innerHTML = `
    <div>
    <input onclick="checkboxBtnTask()" type="checkbox" name="" id="" class="cb">
    <label for="">${newTask}</label>
    </div>
    <button onclick="getTextContent(this)" class="btn-done" disabled>Done</button>
    `
    taskContainer.appendChild(newList);
    inputText.value= '';
    saveTask()
})

function saveTask(){
    localStorage.setItem('Task', taskContainer.innerHTML)
    localStorage.setItem('complete Task', completeTaskContainer.innerHTML)
}


function checkboxBtnTask(){
    const checkboxBtns = document.querySelectorAll('.cb');
    const confirmBtns = document.querySelectorAll('.btn-done');

    checkboxBtns.forEach((checkboxBtn, index) => {
        if(checkboxBtn.checked){
            confirmBtns[index].removeAttribute('disabled')
            confirmBtns[index].style.backgroundColor = 'limegreen'
            confirmBtns[index].style.border = 'none'
        
        }
        else{
            confirmBtns[index].setAttribute('disabled', true)
            confirmBtns[index].style.backgroundColor = ''
        }
    })
}

function getTextContent(button) {
    // Traverse up to the parent <li> element
    var listItem = button.parentNode;
    
    // Find the <label> element within the <li>
    var label = listItem.querySelector('label');
    
    // Get the text content of the <label> element
    var textContent = label.textContent;
    
    // Display the text content (you can modify this part to suit your needs)
    const completeTask = document.createElement('li');
    completeTask.classList.add('item')
    const completeTaskContainer = document.getElementById('complete-container')
    completeTask.innerHTML = `
    <div>
    <label for="">${textContent}</label>
    </div>
    <button onclick="deleteTask(this)" class="dlt-btn">Delete</button>
    `
    completeTaskContainer.appendChild(completeTask)
    listItem.innerHTML = '';
    listItem.style.border = 'none'
    saveTask()
  }

  function deleteTask(button){
    const listTask = button.parentNode;
    listTask.innerHTML = ''
    listTask.style.border = 'none'
    saveTask()
  }

  function showTask(){
    taskContainer.innerHTML = localStorage.getItem('Task');
    completeTaskContainer.innerHTML = localStorage.getItem('complete Task')
  }

  showTask()
