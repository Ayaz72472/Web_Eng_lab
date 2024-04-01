const flexBtn = document.getElementById('flex');
const gridBtn = document.getElementById('grid');
const addBtn = document.getElementById('add');

const container = document.getElementById("container");

function Add() {
    const child = document.createElement('div');
    child.className = 'child';
    const delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.onclick = function () {
        child.remove();
    }
    child.appendChild(delBtn);
    container.appendChild(child);
}

addBtn.addEventListener('click', Add);
gridBtn.onclick = function(){
    const container = document.getElementById("container");
    container.style.display = 'grid'
}

flexBtn.onclick = function(){
    const container = document.getElementById("container");
    container.style.display = 'flex'
}
