let balance = Number(localStorage.getItem("balance")) || 0;
let firstTime = localStorage.getItem("firstTime");
firstTime = firstTime === null ? true : JSON.parse(firstTime);
let movement = localStorage.getItem("movement") || 1;
let movementPeshy = localStorage.getItem("movementPeshy");
let movementVelo = localStorage.getItem("movementVelo");
let movementByke = localStorage.getItem("movementByke");
let movementCar = localStorage.getItem("movementCar");
balance += 50000;
let usingTransport = localStorage.getItem("usingTransport") || "peshy";
window.addEventListener("DOMContentLoaded", () => {
  if (movementPeshy) {
    document.getElementById("btn-peshy").style.backgroundColor = "var(--blue)";
    document.getElementById("btn-peshy").textContent = "Активен";
    usingTransport = "peshy";
    localStorage.setItem("usingTransport", usingTransport);
  }
  if (movementVelo) {
    document.getElementById("btn-velo").style.backgroundColor = "var(--blue)";
    document.getElementById("btn-velo").textContent = "Активен";
    document.getElementById("peshy-container").style.display = "none";
    usingTransport = "velo";
    localStorage.setItem("usingTransport", usingTransport);
  }
  if (movementByke) {
    document.getElementById("btn-byke").style.backgroundColor = "var(--blue)";
    document.getElementById("btn-byke").textContent = "Активен";
    document.getElementById("velo-container").style.display = "none";
    usingTransport = "byke";
    localStorage.setItem("usingTransport", usingTransport);
  }
  if (movementCar) {
    document.getElementById("btn-car").style.backgroundColor = "var(--blue)";
    document.getElementById("btn-car").textContent = "Активен";
    document.getElementById("byke-container").style.display = "none";
    usingTransport = "car";
    localStorage.setItem("usingTransport", usingTransport);
  }
});

const updateBalance = () => {
  for (let balanced of document.querySelectorAll(".balance-count")) {
    balanced.textContent = balance;
    localStorage.setItem("balance", JSON.stringify(balance));
  }
};

setInterval(() => {
  for (let balanced of document.querySelectorAll(".balance-count")) {
    balanced.textContent = balance;
    localStorage.setItem("balance", JSON.stringify(balance));
  }
}, 100);

const btnTransportPeshy = () => {
  document.getElementById("btn-peshy").style.backgroundColor = "var(--blue)";
  document.getElementById("btn-peshy").textContent = "Активен";
  movement = 1;
  localStorage.setItem("movement", movement);
  firstTime = false;
  localStorage.setItem("firstTime", JSON.stringify(false));
  movementPeshy = true;
  localStorage.setItem("movementPeshy", true);
  usingTransport = "peshy";
  localStorage.setItem("usingTransport", usingTransport);
};

const start = () => {
  if (firstTime) {
    startModal.style.display = "flex";
    document.getElementById("closeModalStart").addEventListener("click", () => {
      startModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === startModal) {
        startModal.style.display = "none";
      }
    });
  } else {
  }
};

const btnBuyTransport = (modeOfTransport) => {
  if (modeOfTransport == "btn-velo") {
    if (balance < 10000) {
      document.getElementById("btn-velo").style.backgroundColor =
        "var(--danger)";
      setTimeout(() => {
        document.getElementById("btn-velo").style.backgroundColor =
          "var(--green)";
      }, 300);
    } else {
      balance -= 10000;
      updateBalance();
      document.getElementById("btn-velo").style.backgroundColor = "var(--blue)";
      document.getElementById("btn-velo").textContent = "Активен";
      movementVelo = true;
      localStorage.setItem("movementVelo", true);
      document.getElementById("peshy-container").style.display = "none";
      usingTransport = "velo";
      localStorage.setItem("usingTransport", usingTransport);
    }
  } else if (modeOfTransport == "btn-byke") {
    if (balance < 40000) {
      document.getElementById("btn-byke").style.backgroundColor =
        "var(--danger)";
      setTimeout(() => {
        document.getElementById("btn-byke").style.backgroundColor =
          "var(--green)";
      }, 300);
    } else {
      balance -= 10000;
      updateBalance();
      document.getElementById("btn-byke").style.backgroundColor = "var(--blue)";
      document.getElementById("btn-byke").textContent = "Активен";
      movementByke = true;
      localStorage.setItem("movementByke", true);
      document.getElementById("velo-container").style.display = "none";
      usingTransport = "byke";
      localStorage.setItem("usingTransport", usingTransport);
    }
  } else if (modeOfTransport == "btn-car") {
    if (balance < 40000) {
      document.getElementById("btn-car").style.backgroundColor =
        "var(--danger)";
      setTimeout(() => {
        document.getElementById("btn-car").style.backgroundColor =
          "var(--green)";
      }, 300);
    } else {
      balance -= 10000;
      updateBalance();
      document.getElementById("btn-car").style.backgroundColor = "var(--blue)";
      document.getElementById("btn-car").textContent = "Активен";
      movementCar = true;
      localStorage.setItem("movementCar", true);
      document.getElementById("byke-container").style.display = "none";
      usingTransport = "car";
      localStorage.setItem("usingTransport", usingTransport);
    }
  }
};

// localStorage.clear()