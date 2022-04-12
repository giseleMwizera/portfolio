const email = document.querySelector("#email");
const password = document.querySelector("#password");

const form = document.querySelector("#authenticate");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value == "") {
    alert("Please provide your name!");
    document.authenticate.Name.focus();
    return false;
  }
  return true;
});
