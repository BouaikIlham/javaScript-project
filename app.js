const form = document.getElementById("form");
const firstInput = document.getElementById("first-input");
const lastInput = document.getElementById("last-input");
const subInput = document.getElementById("sub-input");
const phoneInput = document.getElementById("phone-input");
const dateInput = document.getElementById("date-input");
const list = document.querySelector(".content-right");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstInput.value &&
    lastInput.value &&
    subInput.value &&
    phoneInput.value &&
    dateInput.value
  ) {
    createApp(
      firstInput.value,
      lastInput.value,
      subInput.value,
      phoneInput.value,
      dateInput.value
    );
  } else {
    error.classList.remove("showError");
    setTimeout(() => {
      error.classList.add("showError");
    }, 3000);
  }
  firstInput.value = "";
  lastInput.value = "";
  subInput.value = "";
  phoneInput.value = "";
  dateInput.value = "";
});
const showAppointment = (app) => {
  const li = document.createElement("li");
  li.classList.add("item");
  const p = document.createElement("p");
  for (value in app) {
    p.textContent += app[value] + ", ";
  }

  const iconDelete = document.createElement("i");
  iconDelete.classList.add("fas", "fa-trash");
  li.appendChild(p);
  li.appendChild(iconDelete);
  list.appendChild(li);
};

const createApp = (firstName, lastName, subject, phone, date) => {
  let newApp = {
    firstName,
    lastName,
    subject,
    phone,
    date,
  };
  showAppointment(newApp);
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.outerHTML = "";
  }
});
