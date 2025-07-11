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

let chay = 0;
let chayPlus = 2.5;
let chayLvl = 0;
let chayProgress = 0;

let speed = 0;
let speedPlus = 2.5;
let speedLvl = 0;
let speedProgress = 0;

let upBalance = 0;
let upBalancePlus = 1;
let upBalanceLvl = 0;
let upBalanceProgress = 0;

let krit = 0;
let kritPlus = 0.5;
let kritLvl = 0;
let kritProgress = 0;

let goodEvent = 25;
let goodEventPlus = 2.5;
let goodEventLvl = 0;
let goodEventProgress = 0;

let updatesCost = [
  250, 300, 450, 550, 650, 750, 850, 950, 1150, 1300, 1500, 2000, 2500, 3000,
  4000, 3800, 5000, 6000, 7000, 8000,
];
let updatesCostGoodEvent = [
  250, 750, 1500, 2000, 2500, 3500, 5500, 8000, 11000, 15000,
];

const eventsPercent = {
  nothing: 50,
  good: 25,
  bad: 25,
};

const eventPercentFunc = () => {
  eventsPercent.nothing -= 1.25;
  eventsPercent.good += 2.5;
  eventsPercent.bad -= 1.25;
};

const chayNode = document.getElementById("chayNode");
const speedNode = document.getElementById("speedNode");
const upBalanceNode = document.getElementById("upBalanceNode");
const kritNode = document.getElementById("kritNode");
const goodEventNode = document.getElementById("goodEventNode");
const chayBtn = document.getElementById("chayBtn");
const speedBtn = document.getElementById("speedBtn");
const upBalanceBtn = document.getElementById("upBalanceBtn");
const kritBtn = document.getElementById("kritBtn");
const goodEventBtn = document.getElementById("goodEventBtn");

const updateSkills = (update) => {
  if (update == "chay" && chayLvl < 20) {
    if (balance >= updatesCost[chayLvl]) {
      balance -= updatesCost[chayLvl];
      updateBalance();
      chayLvl++;
      chay += chayPlus;
      chayNode.textContent = `${chay}%`;
      chayLvl < 20
        ? (chayBtn.textContent = `${updatesCost[chayLvl]} ₽`)
        : (chayBtn.textContent = "мах");
      chayProgress += 5;
      document.querySelector(
        ".item-chance"
      ).style.background = `linear-gradient(90deg, var(--blue) ${chayProgress}%, white 0%)`;
    } else {
      chayBtn.style.backgroundColor = "var(--danger)";
      setTimeout(() => {
        chayBtn.style.backgroundColor = "var(--green)";
      }, 300);
    }
  } else if (update == "speed" && speedLvl < 20) {
    if (balance >= updatesCost[speedLvl]) {
      balance -= updatesCost[speedLvl];
      updateBalance();
      speedLvl++;
      speed += speedPlus;
      speedNode.textContent = `${speed}%`;
      speedLvl < 20
        ? (speedBtn.textContent = `${updatesCost[speedLvl]} ₽`)
        : (speedBtn.textContent = "мах");
      speedProgress += 5;
      document.querySelector(
        ".item-speed"
      ).style.background = `linear-gradient(90deg, var(--blue) ${speedProgress}%, white 0%)`;
    } else {
      speedBtn.style.backgroundColor = "var(--danger)";
      setTimeout(() => {
        speedBtn.style.backgroundColor = "var(--green)";
      }, 300);
    }
  } else if (update == "upBalance" && upBalanceLvl < 20) {
    if (balance >= updatesCost[upBalanceLvl]) {
      balance -= updatesCost[upBalanceLvl];
      updateBalance();
      upBalanceLvl++;
      upBalance += upBalancePlus;
      upBalanceNode.textContent = `${upBalance}%`;
      upBalanceLvl < 20
        ? (upBalanceBtn.textContent = `${updatesCost[upBalanceLvl]} ₽`)
        : (upBalanceBtn.textContent = "мах");
      upBalanceProgress += 5;
      document.querySelector(
        ".item-dohod"
      ).style.background = `linear-gradient(90deg, var(--blue) ${upBalanceProgress}%, white 0%)`;
    } else {
      upBalanceBtn.style.backgroundColor = "var(--danger)";
      setTimeout(() => {
        upBalanceBtn.style.backgroundColor = "var(--green)";
      }, 300);
    }
  } else if (update == "krit" && kritLvl < 20) {
    if (balance >= updatesCost[kritLvl]) {
      balance -= updatesCost[kritLvl];
      updateBalance();
      kritLvl++;
      krit += kritPlus;
      kritNode.textContent = `${krit}%`;
      kritLvl < 20
        ? (kritBtn.textContent = `${updatesCost[kritLvl]} ₽`)
        : (kritBtn.textContent = "мах");
      kritProgress += 5;
      document.querySelector(
        ".item-krit"
      ).style.background = `linear-gradient(90deg, var(--blue) ${kritProgress}%, white 0%)`;
    } else {
      kritBtn.style.backgroundColor = "var(--danger)";
      setTimeout(() => {
        kritBtn.style.backgroundColor = "var(--green)";
      }, 300);
    }
  } else if (update == "goodEvent" && goodEventLvl < 10) {
    if (balance >= updatesCostGoodEvent[goodEventLvl]) {
      balance -= updatesCostGoodEvent[goodEventLvl];
      eventPercentFunc();
      updateBalance();

      goodEventLvl++;
      goodEvent += goodEventPlus;
      goodEventNode.textContent = `${goodEvent}%`;
      goodEventLvl < 10
        ? (goodEventBtn.textContent = `${updatesCostGoodEvent[goodEventLvl]} ₽`)
        : (goodEventBtn.textContent = "мах");
      goodEventProgress += 10;
      document.querySelector(
        ".item-luck"
      ).style.background = `linear-gradient(90deg, var(--blue) ${goodEventProgress}%, white 0%)`;
    } else {
      goodEventBtn.style.backgroundColor = "var(--danger)";
      setTimeout(() => {
        goodEventBtn.style.backgroundColor = "var(--green)";
      }, 300);
    }
  }
};

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
  let randomStart;
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
      let random = Math.floor(Math.random() * (240 - 60 + 1)) + 60;
      document.querySelector(".main-section-deliver").innerHTML = `
    <div class="time">
            <p>Осталось времени на заказе: <span class="time-span p-happy-color">0 мин 00 сек</span>
            <img src="images/rout.gif" alt="" style="width: 6vw; height: 6vw;"></p>
            <img src="images/deliver.png" alt="" class="img-deliver">
            <button class="speed-deliver" onclick="">Ускорить доставку</button>
          </div>
    `;
      randomStart = random;
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

      // ивент
      const intervalEvent = setInterval(() => {
        if (random <= randomStart / 2) {
          clearInterval(intervalEvent);
        }
      }, 1000);

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
          if (usingTransport == "peshy") {
            randomForBalance = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          } else if (usingTransport == "velo") {
            randomForBalance = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
          } else if (usingTransport == "byke") {
            randomForBalance = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
          } else if (usingTransport == "car") {
            randomForBalance = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
          }
          // крит
          if (Number((Math.random() * 100).toFixed(2)) <= krit) {
            balance += Number((randomStart * randomForBalance * 2).toFixed());
            updateBalance();
            document.querySelector(".krit").style.opacity = 100;
            document.querySelector(".krit").style.transform = "scale(1.3)";
            setTimeout(() => {
              document.querySelector(".krit").style.opacity = 0;
              document.querySelector(".krit").style.transform = "scale(1.0)";
            }, 300);
          } else {
            balance += Number((randomStart * randomForBalance).toFixed());
            updateBalance();
          }
          // чай
          let randomForChay = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
          if (Number((Math.random() * 100).toFixed(2)) <= chay) {
            const base = randomStart * randomForBalance * 2;
            const tipMultiplier = randomForChay / 100 + 1;
            const withTip = Number((base * tipMultiplier).toFixed());
            const withoutTip = Number(base.toFixed());
            const difference = withTip - withoutTip;
            balance += difference;
            balance += base;
            updateBalance();
            document.querySelector(".chay").style.opacity = 100;
            document.querySelector(".chay").style.transform = "scale(1.3)";
            document.querySelector(
              ".chay"
            ).innerHTML = `чаевые<br>${difference}`;
            setTimeout(() => {
              document.querySelector(".chay").style.opacity = 0;
              document.querySelector(".chay").style.transform = "scale(1.0)";
            }, 300);
          }
          // апБаланс
          const QWEbase = randomStart * randomForBalance * 2;
          const QWEtipMultiplier = QWEbase * (1 + upBalance / 100);
          balance += Number((QWEtipMultiplier - QWEbase).toFixed());
          updateBalance();
          // минус характеристики
          updateBalance();
          staminaProcent -= (randomStart / 10) * 1.5;
          happyProcent -= (randomStart / 10) * 1.8;
          updateCharacteristic();
        }
      }, 1000 - (1000 * speed) / 100);
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

const buyCharacteristic = (sum, char, plus, duration, timeNodeId) => {
  const currentProcent = char === "stamina" ? staminaProcent : happyProcent;
  if (currentProcent >= 100 || balance < sum) return;

  balance -= sum;
  updateBalance();

  let remainingMs = duration;
  const display = document.getElementById(timeNodeId);
  display.textContent = `${Math.ceil(remainingMs / 1000)} сек`;

  const timer = setInterval(() => {
    remainingMs -= 1000;
    display.textContent = `${Math.max(0, Math.ceil(remainingMs / 1000))} сек`;

    if (remainingMs <= 0) {
      clearInterval(timer);
      display.textContent = `${duration / 1000} сек`;
      if (char === "stamina") {
        staminaProcent = Math.min(100, staminaProcent + plus);
      } else {
        happyProcent = Math.min(100, happyProcent + plus);
      }
      updateCharacteristic();
    }
  }, 1000);
};

const useCharacteristic = (char, button) => {
  const lockButton = (duration) => {
    button.disabled = true;
    button.style.backgroundColor = "#42e79a";
    setTimeout(() => {
      button.disabled = false;
      button.style.backgroundColor = "var(--green)";
    }, duration);
  };

  switch (char) {
    case "sleep":
      buyCharacteristic(0, "stamina", 5, 8000, "sleepTime");
      lockButton(8000);
      break;
    case "energy":
      buyCharacteristic(100, "stamina", 15, 3000, "energyTime");
      lockButton(3000);
      break;
    case "sauna":
      buyCharacteristic(1000, "stamina", 25, 5000, "saunaTime");
      lockButton(5000);
      break;
    case "ukol":
      buyCharacteristic(2500, "stamina", 50, 2000, "ukolTime");
      lockButton(2000);
      break;
    case "asmr":
      buyCharacteristic(5000, "stamina", 100, 4000, "asmrTime");
      lockButton(4000);
      break;
    case "tiktok":
      buyCharacteristic(0, "happy", 5, 8000, "tiktokTime");
      lockButton(8000);
      break;
    case "wb":
      buyCharacteristic(200, "happy", 15, 3000, "wbTime");
      lockButton(3000);
      break;
    case "sushi":
      buyCharacteristic(700, "happy", 25, 5000, "sushiTime");
      lockButton(5000);
      break;
    case "friends":
      buyCharacteristic(1500, "happy", 50, 2000, "friendsTime");
      lockButton(2000);
      break;
    case "restoraunt":
      buyCharacteristic(3000, "happy", 100, 4000, "restorauntTime");
      lockButton(4000);
      break;
  }
};

balance = 100000;
