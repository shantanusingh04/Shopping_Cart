const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const clearBtn=document.getElementById('clear')

function addItem(e){
e.preventDefault();

const newItem=itemInput.value;
if(newItem===''){
    alert('Please enter item');
    return;
}
const li=document.createElement('li');
li.appendChild(document.createTextNode(newItem))
const button=createButton('remove-item btn-link text-red')
li.appendChild(button)
itemList.appendChild(li);
itemInput.value==='';
}

function createButton(classes){
    const button=document.createElement('button')
    button.className=classes
    const icon=createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}

function createIcon(iclasses){
    const icon=document.createElement('i')
    icon.className=iclasses
    return icon
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove()
    }
}

function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
}
itemForm.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
clearBtn.addEventListener('click',clearItems)

