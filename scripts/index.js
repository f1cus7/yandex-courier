let balance = Number(localStorage.getItem("balance")) || 0;
let firstTime = localStorage.getItem("firstTime");
firstTime = firstTime === null ? true : JSON.parse(firstTime);
let movement = localStorage.getItem("movement") || 1;
let movementPeshy = localStorage.getItem("movementPeshy");
let movementVelo = localStorage.getItem("movementVelo");
let movementByke = localStorage.getItem("movementByke");
let movementCar = localStorage.getItem("movementCar");
balance += 500;
let happyProcent = 100;
let staminaProcent = 100;


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

  document.getElementById("node-happy").textContent = Number(
    happyProcent.toFixed()
  );
  document.getElementById("node-stamina").textContent = Number(
    staminaProcent.toFixed()
  );
});

const updateBalance = () => {
  for (let balanced of document.querySelectorAll(".balance-count")) {
    balanced.textContent = Math.floor(balance);
    localStorage.setItem("balance", JSON.stringify(balance));
  }
};

const updateCharacteristic = () => {
  document.getElementById("node-happy").textContent =
    Number(happyProcent).toFixed();
  document.getElementById("node-stamina").textContent =
    Number(staminaProcent).toFixed();
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
    if (staminaProcent >= 25 && happyProcent >= 25) {
      document.querySelector(".main-section-start").style.display = "none";
      document.querySelector(".main-section-deliver").style.display = "flex";
      // let random = Math.floor(Math.random() * (240 - 60 + 1)) + 60;
      let random = 15;
      document.querySelector(".main-section-deliver").innerHTML = `
    <div class="time">
            <p>Осталось времени на заказе: <span class="time-span p-happy-color">0 мин 00 сек</span>
            <img src="images/rout.gif" alt="" style="width: 6vw; height: 6vw;"></p>
            <img src="images/deliver.png" alt="" class="img-deliver">
            <button class="speed-deliver" onclick="">Ускорить доставку</button>
          </div>
    `;
      let randomStart = random;
      const timeSpan = document.querySelector(".time-span");

      function updateTime(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        timeSpan.textContent = `${min} мин ${sec < 10 ? "0" : ""}${sec} сек`;
      }
      document.querySelector(".speed-deliver").addEventListener("click", () => {
        if (random > 2) {
          random -= 1;
          updateTime(random);
        }
      });

      updateTime(random);

      const timer = setInterval(() => {
        random--;
        if (random >= 0) {
          updateTime(random);
        } else {
          clearInterval(timer);
          document.querySelector(".main-section-start").style.display = "flex";
          document.querySelector(".main-section-deliver").style.display =
            "none";

          let randomForBalance;
          if (usingTransport == 'peshy') {
            randomForBalance = Math.random() * (3 - 1) + 1;
          } else if (usingTransport == 'velo') {
            randomForBalance = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
          } else if (usingTransport == 'byke') {
            randomForBalance = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
          } else if (usingTransport == 'car') {
            randomForBalance = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
          }

          balance += Number((randomStart * randomForBalance).toFixed());
          updateBalance();
          staminaProcent -= (randomStart / 10) * 2;
          happyProcent -= (randomStart / 10) * 2.5;
          updateCharacteristic();
        }
      }, 1000);
    } else {
      document.querySelector(".btn-start").style.backgroundColor =
        "var(--danger)";
      setTimeout(() => {
        document.querySelector(".btn-start").style.backgroundColor =
          "var(--yellow)";
      }, 300);
    }
  }
};

balance = 10110;

const buyCharacteristic = (sum, char, plus, time) => {
  if (char == "stamina" && staminaProcent < 100) {
    if (balance >= sum) {
      balance -= sum;
      updateBalance();
      staminaProcent += plus;
      if (staminaProcent > 100) {
        staminaProcent = 100;
      }
      updateCharacteristic();
    }
  }
  if (char == "happy" && happyProcent < 100) {
    if (balance >= sum) {
      balance -= sum;
      updateBalance();
      happyProcent += plus;
      if (happyProcent > 100) {
        happyProcent = 100;
      }
      updateCharacteristic();
    }
  }
};

const useCharacteristic = (char) => {
  if (char == "sleep") {
    buyCharacteristic(0, "stamina", 5);
  } else if (char == "energy") {
    buyCharacteristic(100, "stamina", 15);
  } else if (char == "sauna") {
    buyCharacteristic(1000, "stamina", 25);
  } else if (char == "ukol") {
    buyCharacteristic(2500, "stamina", 50);
  } else if (char == "asmr") {
    buyCharacteristic(5000, "stamina", 100);
  } else if (char == "tiktok") {
    buyCharacteristic(0, "happy", 5);
  } else if (char == "wb") {
    buyCharacteristic(200, "happy", 15);
  } else if (char == "sushi") {
    buyCharacteristic(700, "happy", 25);
  } else if (char == "friends") {
    buyCharacteristic(1500, "happy", 50);
  } else if (char == "restoraunt") {
    buyCharacteristic(3000, "happy", 100);
  }
};

balance = 500000;