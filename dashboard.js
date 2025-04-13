
function controlServer(action) {
  const token = localStorage.getItem("token");
  const profile = document.getElementById("profileSelect").value;

  fetch("http://69.67.175.26:8000/api/server/control/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ action, profile })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status) {
      alert(data.status);
    } else if (data.error) {
      alert("Error: " + data.error);
    } else {
      alert("Unauthorized or unknown error.");
    }
  });
}
