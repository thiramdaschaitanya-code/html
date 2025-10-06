document.getElementById("addBtn").addEventListener("click", addUser);

function addUser() {
  const input = document.getElementById("userInput");
  const name = input.value.trim();
  const userList = document.getElementById("userList");

  if (name === "") {
    alert("Please enter a user name");
    return;
  }

  // Check if user already exists
  const existingNames = Array.from(userList.children).map(li => li.firstChild.textContent);
  if (existingNames.includes(name)) {
    alert(`User ${name} is already present in the list`);
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = name;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  userList.appendChild(li);

  input.value = "";
}