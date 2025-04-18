
async function saveCommand() {
  const content = document.getElementById('commandInput').value;
  const token = localStorage.getItem('access');
  const statusText = document.getElementById('status');

  const response = await fetch('http://69.67.175.26:8000/api/commandline/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  });

  if (response.ok) {
    statusText.textContent = 'Command line saved!';
  } else {
    statusText.textContent = 'Failed to save command.';
    statusText.classList.remove('text-green-400');
    statusText.classList.add('text-red-400');
  }
}

async function loadCommand() {
  const token = localStorage.getItem('access');

  const response = await fetch('http://69.67.175.26:8000/api/commandline/', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    document.getElementById('commandInput').value = data.content || "";
  }
}

window.onload = loadCommand;
