let todoList=[
  {
item:'Buy Milk',
due:'10/12/2023'}, 
{
item:'preach God',
due:'10/2/2023'}
];
displayItems();

function addTodo() {
    let inputElement=document.querySelector('#task');
    let dueElement=document.querySelector('#time');

    let todoItem=inputElement.value;
    let tym=dueElement.value;

    todoList.push({item:todoItem,due:tym});
    inputElement.value=" ";
    dueElement.value=" ";
    displayItems();
}

function displayItems(){
let displayContainer=document.querySelector('.todoContainer');
let newHtml='';
for(let i=0;i<todoList.length;i++){
    let{item,due}=todoList[i];
     newHtml+=`
    <span>${item}</span>
    <span>${due}</span>
    <button id="todoDel" onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    `;
}
displayContainer.innerHTML=newHtml;
}
