const form = document.getElementById('credForm');
const credList = document.getElementById('credList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const service = document.getElementById('service').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const updated = new Date().toLocaleString();

  const entry = { service, username, password, updated };

  // Get existing credentials from localStorage
  const credentials = JSON.parse(localStorage.getItem('credentials')) || [];

  // Add new entry
  credentials.push(entry);

  // Save back to localStorage
  localStorage.setItem('credentials', JSON.stringify(credentials));

  // Clear form and reload list
  form.reset();
  displayCredentials();
});

function displayCredentials() {
  credList.innerHTML = '';
  const credentials = JSON.parse(localStorage.getItem('credentials')) || [];

  credentials.forEach((cred, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${cred.service}</strong><br>
      User: ${cred.username}<br>
      Pass: ${cred.password}<br>
      <small>Updated: ${cred.updated}</small>
    `;
    credList.appendChild(li);
  });
}

// Initial display
displayCredentials();
