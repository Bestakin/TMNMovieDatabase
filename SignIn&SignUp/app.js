// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });


function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send signup data to the server (you'll implement this in server.js)
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  });
}

function signin() {
  const signinUsername = document.getElementById('signinUsername').value;
  const signinPassword = document.getElementById('signinPassword').value;

  // Send signin data to the server (you'll implement this in server.js)
  fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: signinUsername, password: signinPassword }),
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  });
}
