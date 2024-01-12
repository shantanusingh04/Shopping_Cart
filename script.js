const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please enter item");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  checkUI();
  itemInput.value === "";
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

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you want to delete")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
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

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);

checkUI();
