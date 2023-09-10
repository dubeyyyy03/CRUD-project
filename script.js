const addItemForm = document.getElementById("addItemForm");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

// Creating empty Array to store items
let items = [];

// Track the index of the item being edited
let editIndex = -1;

// Function to add an item
function addItem() {
  const newItem = itemInput.value;
  if (editIndex === -1) {
    items.push(newItem);
  } else {
    // If edit mode is active, replace the item at editIndex
    items[editIndex] = newItem;
    editIndex = -1; // Reset edit mode
  }
  renderList();
  itemInput.value = "";
}

// Function to edit an item
function editItem(index) {
  itemInput.value = items[index];
  editIndex = index;
}

// Function to remove an item
function removeItem(index) {
  items.splice(index, 1);
  renderList();
}

// Function to render the list
function renderList() {
  itemList.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editItem(index));
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => removeItem(index));
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  });
}

addItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

renderList();
