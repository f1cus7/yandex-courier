const main = document.querySelector('.main-container')
const transport = document.querySelector('.transport-container')
const stamina = document.querySelector('.stamina-container')
const happy = document.querySelector('.happy-container')
const update = document.querySelector('.update-container')

const openTransport = () => {
    main.classList.add('d-none')
    stamina.classList.add('d-none')
    happy.classList.add('d-none')
    update.classList.add('d-none')
    transport.classList.remove('d-none')
}


const backToMain = () => {
    main.classList.remove('d-none')
    stamina.classList.add('d-none')
    happy.classList.add('d-none')
    update.classList.add('d-none')
    transport.classList.add('d-none')
}

const btnStamina = () => {
    main.classList.add('d-none')
    stamina.classList.remove('d-none')
    happy.classList.add('d-none')
    update.classList.add('d-none')
    transport.classList.add('d-none')
}

const btnHappy = () => {
    main.classList.add('d-none')
    stamina.classList.add('d-none')
    happy.classList.remove('d-none')
    update.classList.add('d-none')
    transport.classList.add('d-none')
}

const btnUpdate = () => {
    main.classList.add('d-none')
    stamina.classList.add('d-none')
    happy.classList.add('d-none')
    update.classList.remove('d-none')
    transport.classList.add('d-none')
}

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".modal-settings-close");

const openSettings = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};