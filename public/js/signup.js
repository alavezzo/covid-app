const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-signup");
  const passwordEl = document.querySelector("#password-signup");
  const emailEl = document.querySelector("#emailaddress-signup");
  console.log(usernameEl);
  console.log(emailEl);

  fetch("/api/users", {
    method: "post",
    body: JSON.stringify({
      name: usernameEl.value,
      password: passwordEl.value,
      email: emailEl.value
    }),
    headers: { "Content-Type": "application/json" }
    })
    .then(function () {
      console.log("POST")
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

document
  .querySelector("#signUpEl")
  .addEventListener("submit", signupFormHandler);
console.log("Signup JS loaded")