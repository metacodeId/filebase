const apiUrl = 'https://metacodeid.github.io/filebase/userdata.json';
const token = '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';

            
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      const jsonData = JSON.parse(atob(data.content));
      const dataTbody = document.getElementById('users-tbody');
      })
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const jsonData = JSON.parse(atob(data.content));
          const dataTbody = document.getElementById('data-tbody');
          jsonData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>
          <button class="edit-data-button" data-id="${item.id}">Edit</button>
          <button class="delete-data-button" data-id="${item.id}">Delete</button>
        </td>
      `;
            dataTbody.appendChild(row);
          });
        });

const addDataForm = document.getElementById('add-data-form');
addDataForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const newData = {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
  };
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const jsonData = JSON.parse(atob(data.content));
      jsonData.push(newData);
      const updatedContent = btoa(JSON.stringify(jsonData));
      fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Add new data',
          content: updatedContent,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    });
});
