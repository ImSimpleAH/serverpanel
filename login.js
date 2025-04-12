
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error');
  errorMsg.classList.add('hidden');

  const response = await fetch('http://69.67.175.26:8000/api/token/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('access', data.access);
    window.location.href = 'dashboard.html';
  } else {
    errorMsg.classList.remove('hidden');
  }
});
