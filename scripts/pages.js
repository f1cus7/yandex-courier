const main = document.querySelector(".main-container");
const transport = document.querySelector(".transport-container");
const stamina = document.querySelector(".stamina-container");
const happy = document.querySelector(".happy-container");
const update = document.querySelector(".update-container");

const openTransport = () => {
  main.classList.add("d-none");
  stamina.classList.add("d-none");
  happy.classList.add("d-none");
  update.classList.add("d-none");
  transport.classList.remove("d-none");
  new Audio("/audio/page.mp3").play();
};

const backToMain = () => {
  main.classList.remove("d-none");
  stamina.classList.add("d-none");
  happy.classList.add("d-none");
  update.classList.add("d-none");
  transport.classList.add("d-none");
  new Audio("/audio/page.mp3").play();
};

const btnStamina = () => {
  main.classList.add("d-none");
  stamina.classList.remove("d-none");
  happy.classList.add("d-none");
  update.classList.add("d-none");
  transport.classList.add("d-none");
  new Audio("/audio/page.mp3").play();
};

const btnHappy = () => {
  main.classList.add("d-none");
  stamina.classList.add("d-none");
  happy.classList.remove("d-none");
  update.classList.add("d-none");
  transport.classList.add("d-none");
  new Audio("/audio/page.mp3").play();
};

const btnUpdate = () => {
  main.classList.add("d-none");
  stamina.classList.add("d-none");
  happy.classList.add("d-none");
  update.classList.remove("d-none");
  transport.classList.add("d-none");
  new Audio("/audio/page.mp3").play();
};

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".modal-settings-close");
const modalHowToPlay = document.getElementById('modalHowToPlay');

const openSettings = () => {
  modal.style.display = "flex";
  new Audio("/audio/page.mp3").play();
};

const howToPlay = () => {
  modal.style.display = "none";
  new Audio("/audio/page.mp3").play();
  modalHowToPlay.style.display = 'flex';
};

const modalEnd = () => {
  modalHowToPlay.style.display = "none";
  new Audio("/audio/page.mp3").play();
}

closeBtn.onclick = () => {
  modal.style.display = "none";
  new Audio("/audio/page.mp3").play();
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const nextPage = (page) => {
  if (page == "stamina") {
    main.classList.add("d-none");
    stamina.classList.add("d-none");
    happy.classList.remove("d-none");
    update.classList.add("d-none");
    transport.classList.add("d-none");
    new Audio("/audio/page.mp3").play();
  } else if (page == "happy") {
    main.classList.add("d-none");
    stamina.classList.add("d-none");
    happy.classList.add("d-none");
    update.classList.remove("d-none");
    transport.classList.add("d-none");
    new Audio("/audio/page.mp3").play();
  } else if (page == "update") {
    main.classList.add("d-none");
    stamina.classList.remove("d-none");
    happy.classList.add("d-none");
    update.classList.add("d-none");
    transport.classList.add("d-none");
    new Audio("/audio/page.mp3").play();
  } else {
    main.classList.remove("d-none");
    stamina.classList.add("d-none");
    happy.classList.add("d-none");
    update.classList.add("d-none");
    transport.classList.add("d-none");
    new Audio("/audio/page.mp3").play();
  }
};

const modalStartBtn = () => {
  main.classList.add("d-none");
  stamina.classList.add("d-none");
  happy.classList.add("d-none");
  update.classList.add("d-none");
  transport.classList.remove("d-none");
  startModal.style.display = "none";
  new Audio("/audio/page.mp3").play();
};
