const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');

userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Generate a unique ID
  const userId = crypto.randomUUID();
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${userId}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td class="actions">
      <button class="view">View Details</button>
      <button class="update">Update</button>
      <button class="delete">Delete</button>
    </td>
  `;

  userList.appendChild(row);
  userForm.reset();

  row.querySelector('.view').addEventListener('click', () => alert(`User Details:\nUsername: ${username}\nEmail: ${email}`));
  row.querySelector('.update').addEventListener('click', () => toggleEditUser(row));
  row.querySelector('.delete').addEventListener('click', () => row.remove());
});

function toggleEditUser(row) {
  const cells = row.querySelectorAll('td');
  const editBtn = row.querySelector('.update');

  if (editBtn.textContent === 'Update') {
    for (let i = 1; i < 3; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = cells[i].textContent;
      cells[i].textContent = '';
      cells[i].appendChild(input);
    }
    editBtn.textContent = 'Save';
  } else {
    for (let i = 1; i < 3; i++) {
      const input = cells[i].querySelector('input');
      cells[i].textContent = input.value;
    }
    editBtn.textContent = 'Update';
  }
}
