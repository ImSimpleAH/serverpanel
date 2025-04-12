
if (!localStorage.getItem('access')) {
  window.location.href = 'login.html';
}

function logout() {
  localStorage.removeItem('access');
  window.location.href = 'login.html';
}

async function sendAction(action) {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Sending command...';
  const token = localStorage.getItem('access');

  const response = await fetch('http://69.67.175.26:8000/api/server/control/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action })
  });

  const data = await response.json();
  if (response.ok) {
    statusDiv.textContent = data.status;
  } else {
    statusDiv.textContent = data.error || 'Command failed';
  }
}
