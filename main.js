const apiUrl = 'https://metacodeid.github.io/filebase/userdata.json';                                                                   
const token = '//api.github.com/repos/metacodeid/admin-panel/contents/users.json';
const token = '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';

                                     
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const users = JSON.parse(atob(data.content));
    const usersTbody = document.getElementById('// Mengambil data user dari file JSON
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const users = JSON.parse(atob(data.content));
    const usersTbody = document.getElementById('users-tbody');
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button class="edit-user-button" data-id="${user.id}">Edit</button>
          <button class="delete-user-button" data-id="${user.id}">Delete</button>
        </td>
      `;
      usersTbody.appendChild(row);
    });
  });

                             
const addUserForm = document.getElementById('// Menambahkan data user baru
const addUserForm = document.getElementById('add-user-form');
addUserForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
  };
                                                
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const users = JSON.parse(atob(data.content));
      users.push(newUser);
      const updatedContent = btoa(JSON.stringify(users));
      fetch(apiUrl, {
        method: '// Mengupdate file JSON menggunakan GitHub API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const users = JSON.parse(atob(data.content));
      users.push(newUser);
      const updatedContent = btoa(JSON.stringify(users));
      fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Menambahkan data user baru',
          content: updatedContent,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        location.reload();
      });
    });
});

                     
document.addEventListener('// Mengedit data user
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-user-button')) {
    const userId = e.target.dataset.id;
    const name = prompt('Masukkan nama baru:');
    const email = prompt('Masukkan email baru:');
    // Mengupdate file JSON menggunakan Git
