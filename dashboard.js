
function controlServer(action) {
  const token = localStorage.getItem("access");
  const profile = document.getElementById("profileSelect").value;

  if (!token) {
    alert("No token found. Please log in first.");
    return;
  }

  console.log("Sending request with token:", token);
  console.log("Selected profile:", profile);
  console.log("Action:", action);

  fetch("http://69.67.175.26:8000/api/server/control/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ action, profile })
  })
  .then(async res => {
    const data = await res.json().catch(() => ({}));
    console.log("Response status:", res.status);
    console.log("Response data:", data);

    if (data.status) {
      alert(data.status);
    } else if (data.error) {
      alert("Error: " + data.error);
    } else {
      alert("Unauthorized or unknown error.");
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    alert("Request failed: " + err.message);
  });
}
