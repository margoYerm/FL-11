let rootNode = document.getElementById('root');
let addButton = document.getElementById('addItem-btn');
let addInput = document.getElementById('addItem-input');
let itemsBlock = document.getElementById('doItems-block');
let maxMassage = document.querySelector('.max-lenghts-massage');

function createNewItem (task) {    
    let liItem = document.createElement('li');
    liItem.classList.add('doItem-elem'); 
    let createId = function () {
        let min = 0;
        let max = 1000000;
        let half = 0.5;
        let rand = min - half + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
    liItem.id = `task${createId()}`;
    liItem.setAttribute('draggable', true);
    let checkbox = document.createElement('button');    
    checkbox.classList.add('doItem-btn', 'doItem-btn-check');
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';      
    let label = document.createElement('label');
    label.innerHTML = task;
    let input = document.createElement('input');
    input.type = 'text';
    input.classList.add('hide');
    let editBtn = document.createElement('button');
    editBtn.classList.add('doItem-btn', 'doItem-btn-edit');
    editBtn.innerHTML = '<i class="material-icons">edit</i>';
    let pushDiv = document.createElement('div');
    pushDiv.classList.add('doItem-push');
    let delBtn = document.createElement('button');
    delBtn.classList.add('doItem-btn', 'doItem-btn-delete');
    delBtn.innerHTML = '<i class="material-icons">delete</i>';    
    liItem.appendChild(checkbox);
    liItem.appendChild(label);
    liItem.appendChild(input);
    liItem.appendChild(editBtn);
    liItem.appendChild(pushDiv);
    liItem.appendChild(delBtn);
    return liItem;
}

function addTask () {
    if(addInput.value) {
        let listItem = createNewItem(addInput.value);        
        itemsBlock.appendChild(listItem); 
        bindTaskEvents(listItem, finishTask);
        addInput.value = '';
    }  
    save();
    maxCountItems();
}

function delTask () {
    let listItem = this.parentNode;    
    let ul = listItem.parentNode;    
    ul.removeChild(listItem);
    save();
    maxCountItems();
}

function editTask () {
    let editBtn = this;
    let listItem = this.parentNode;
    let label = listItem.querySelector('label');
    let input = listItem.querySelector('input[type=text]');    
    let containClass = listItem.classList.contains('editMode');
    if (containClass) {
        label.innerText = input.value;
        editBtn.classList.remove('doItem-btn-save');//
        editBtn.classList.add('doItem-btn-edit');
        input.classList.add('hide');
        label.classList.remove('hide');
        editBtn.innerHTML = '<i class="material-icons">edit</i>';
        save();
    } else {
        input.value = label.innerText;
        label.classList.add('hide');
        input.classList.remove('hide');
        editBtn.classList.remove('doItem-btn-edit');//
        editBtn.classList.add('doItem-btn-save');
        editBtn.innerHTML = '<i class="material-icons">save</i>';
    }
    listItem.classList.toggle('editMode');
}

function finishTask () {
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.doItem-btn-check');    
    let label = listItem.querySelector('label');    
    let editBtn = listItem.querySelector('button.doItem-btn-edit');    
    let delBtn = listItem.querySelector('button.doItem-btn-delete');     
    let containClass = listItem.classList.contains('editMode');
    if (containClass) {
        checkbox.innerHTML = '<i class="material-icons">check_box</i>';
        label.classList.add('done');
        editBtn.classList.add('doItem-btn_done');
        delBtn.classList.add('doItem-btn_done');
        save();
    } else {
        checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
        label.classList.remove('done');
        editBtn.classList.remove('doItem-btn_done');
        delBtn.classList.remove('doItem-btn_done');
        save();
    }
    listItem.classList.toggle('editMode');
}

function bindTaskEvents(liItem) {
    let checkbox = liItem.querySelector('button.doItem-btn-check');
    let editBtn = liItem.querySelector('button.doItem-btn-edit');
    let delBtn = liItem.querySelector('button.doItem-btn-delete');    
    checkbox.addEventListener('click', finishTask);
    editBtn.addEventListener('click', editTask);
    delBtn.addEventListener('click', delTask);
}

addButton.addEventListener('click', addTask);

function save () {
    let tasksArr = [];
    for (let i = 0; i < itemsBlock.children.length; i++) {
        tasksArr.push(itemsBlock.children[i].getElementsByTagName('label')[0].innerText);        
    }
    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify({itemsBlock: tasksArr}));
}

function load () {
    return JSON.parse(localStorage.getItem('todo'));
}
let dataLS = load();
for (let i = 0; i < dataLS.itemsBlock.length; i++) {
    let listItem = createNewItem(dataLS.itemsBlock[i]);
    itemsBlock.appendChild(listItem);
    bindTaskEvents(listItem);
}

function maxCountItems () {    
    let counter = itemsBlock.children.length;
    const maxCount = 10;    
    if (counter < maxCount) {
        maxMassage.classList.add('hide');
        addInput.removeAttribute('disabled');
        addButton.removeAttribute('disabled');
    } else {
        maxMassage.classList.remove('hide');
        addInput.setAttribute('disabled', 'true');
        addButton.setAttribute('disabled', 'true');
    }
}
maxCountItems();


//Realization drag and drop
let dragSrcEl = null;
function dragStart (event) { 
    this.style.opacity = '0.3';
    dragSrcEl = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);      
    return dragSrcEl;
}
function dragOver (event) {
    if (event.preventDefault) {
        event.preventDefault();
    }    
    event.dataTransfer.dropEffect = 'move';
    return false;
}
function dragEnter () {
    this.classList.add('doItem-elem_over');
}
function dragLeave () {
    this.classList.remove('doItem-elem_over');
}
function drop (event) {
    if (event.stopPropagation) {
        event.stopPropagation();        
    } 
    if (dragSrcEl !== this) {        
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
    }    
    return false;
}
function dragEnd () {
    Array.from(itemsMove).forEach((element) => {
        element.classList.remove('doItem-elem_over');        
        this.style.opacity = '1';
        bindTaskEvents(element);        
    });
}
let itemsMove = document.getElementsByClassName('doItem-elem');
Array.from(itemsMove).forEach((element) => {
    element.addEventListener('dragstart', dragStart, false);    
    element.addEventListener('dragenter', dragEnter, false);
    element.addEventListener('dragover', dragOver, false);
    element.addEventListener('dragleave', dragLeave, false);
    element.addEventListener('drop', drop, false);
    element.addEventListener('dragend', dragEnd, false);
})

