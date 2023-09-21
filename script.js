// Get references to HTML elements
const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add a new task when the "Add" button is clicked
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="deleteBtn">Delete</button>
        `;
        
        // Add the new task to the list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
        
        // Attach a click event to the delete button
        const deleteBtn = listItem.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });
    }
});
