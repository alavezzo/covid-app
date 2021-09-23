const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login").value.trim();
  const passwordEl = document.querySelector("#password-login").value.trim();

  const response = await fetch("/api/users/login", {
    method: "post",
    body: JSON.stringify({
      name: usernameEl,
      password: passwordEl
    }),
    headers: { "Content-Type": "application/json" }
  })
  
  if (response.ok) {
      console.log('LOGIN ROUTE');
      document.location.replace("/dashboard");
    } else { 
      alert(response.statusText);
    }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
console.log('Login JS file loaded')