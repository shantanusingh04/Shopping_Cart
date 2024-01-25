const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

function displayItems(){
  const itemsFromStorage=getItemsFromStorage();
  itemsFromStorage.forEach((item)=>addItemToDOM(item))
  checkUI()
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please enter item");
    return;
  }
  addItemToDOM(newItem)
  addItemToStorage(newItem)
  checkUI();
  itemInput.value === "";
}

function addItemToDOM(item){
    const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
}


function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(iclasses) {
  const icon = document.createElement("i");
  icon.className = iclasses;
  return icon;
}

function addItemToStorage(item){
  const itemsFromStorage=getItemsFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem('items',JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage(){
  let itemsFromStorage;
  if(localStorage.getItem('items')===null){
    itemsFromStorage=[];
  }
  else{
    itemsFromStorage=JSON.parse(localStorage.getItem('items'))
  }
  return itemsFromStorage
}

function onClickItem(e){
  if (e.target.parentElement.classList.contains("remove-item")){
removeItem(e.target.parentElement.parentElement)
  }
}
function removeItem(item) {
  if(confirm("Are you sure?")){
    item.remove()
    removeItemFromStorage(item.textContent)
    checkUI()
  }
}
function removeItemFromStorage(item){
  let itemsFromStorage=getItemsFromStorage();
  itemsFromStorage=itemsFromStorage.filter((i)=>i!==item);
  localStorage.setItem('items',JSON.stringify(itemsFromStorage))
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  localStorage.removeItem('items')
  checkUI()
}

function filterItems(e){
    const items = document.querySelectorAll("li");
    const text=e.target.value.toLowerCase()
    console.log(text)
    items.forEach((item)=>{
        const itemName=item.firstChild.textContent.toLowerCase();
        console.log(itemName)

        if(itemName.indexOf(text)!=-1){
            item.style.display='flex'
        }else{
            item.style.display='none'
        }
    })
}

function checkUI() {
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

function init(){
itemForm.addEventListener("submit", onAddItemSubmit);
itemList.addEventListener("click", onClickItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);
document.addEventListener('DOMContentLoaded',displayItems)

checkUI();
}

// localStorage.setItem('name','Shantanu')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
// localStorage.clear()
init();