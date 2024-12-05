// Select form and table byod
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Listen for form submit
bookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const genre = document.getElementById('genre').value;
  const publicationDate = document.getElementById('publication-date').value;
  const category = document.getElementById('category').value;

  // Create a new row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td>${genre}</td>
    <td>${publicationDate}</td>
    <td>${category}</td>
    <td class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
  `;

  // Append row to table
  bookList.appendChild(row);

  // Clear form fields
  bookForm.reset();

  // Add event listeners for edit and delete buttons
  const editBtn = row.querySelector('.edit');
  const deleteBtn = row.querySelector('.delete');

  editBtn.addEventListener('click', () => toggleEditMode(row, editBtn));
  deleteBtn.addEventListener('click', () => deleteBook(row));
});

// Function to delete book
function deleteBook(row) {
  row.remove();
}

// Function to toggle between edit and save modes
function toggleEditMode(row, editBtn) {
  const cells = row.querySelectorAll('td');

  if (editBtn.textContent === 'Edit') {
    // Enable editing
    for (let i = 0; i < cells.length - 1; i++) {
      const input = document.createElement(i === 4 ? 'input' : 'input');
      input.type = i === 4 ? 'date' : 'text';
      input.value = cells[i].textContent;
      cells[i].textContent = '';
      cells[i].appendChild(input);
    }
    editBtn.textContent = 'Save';
  } else {
    // Save changes
    for (let i = 0; i < cells.length - 1; i++) {
      const input = cells[i].querySelector('input');
      cells[i].textContent = input.value;
    }
    editBtn.textContent = 'Edit';
  }
}
