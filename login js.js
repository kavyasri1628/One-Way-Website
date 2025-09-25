// Handle login
function handleLogin(event) {
  event.preventDefault();
  localStorage.setItem("isLoggedIn", true);
  window.location.href = "home.html";
}
