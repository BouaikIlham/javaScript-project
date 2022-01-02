const form = document.getElementById('form')
const firstInput = document.getElementById('first-input')
const lastInput = document.getElementById('last-input')
const subInput = document.getElementById('sub-input')
const phoneInput = document.getElementById('phone-input')
const dateInput = document.getElementById('date-input')
const list = document.querySelector('.content-right')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (firstInput.value){
        createApp(firstInput.value)
    } 
    firstInput.value = ""
    if (lastInput.value){
        createApp(lastInput.value)
    } 
    lastInput.value = ""
    if (subInput.value){
        createApp(subInput.value)
    } 
    subInput.value = ""
})
const showAppointment = (app) => {
    const li = document.createElement("li")
    li.classList.add("item");
    const p = document.createElement("p");
    p.textContent = app.value
    // p.setAttribute("data-id", app.id);

    const iconDelete = document.createElement("i");
    iconDelete.classList.add("fas", "fa-trash");
    li.appendChild(p)
    li.appendChild(iconDelete)
    list.appendChild(li)

}

const createApp = (value) => {
    let newApp = {
      value: value
    };
    showAppointment(newApp);
}
