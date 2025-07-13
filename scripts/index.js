let balance = Number(localStorage.getItem("balance")) || 0;
let firstTime = localStorage.getItem("firstTime");
firstTime = firstTime === null ? true : JSON.parse(firstTime);
let movement = localStorage.getItem("movement") || 1;
let movementPeshy = localStorage.getItem("movementPeshy");
let movementVelo = localStorage.getItem("movementVelo");
let movementByke = localStorage.getItem("movementByke");
let movementCar = localStorage.getItem("movementCar");
let happyProcent = Number(localStorage.getItem("happyProcent")) || 100;
let staminaProcent = Number(localStorage.getItem("staminaProcent")) || 100;

setInterval(() => {
  localStorage.setItem("happyProcent", happyProcent);
  localStorage.setItem("staminaProcent", staminaProcent);
}, 1000);

let chay = Number(localStorage.getItem("chay")) || 0;
let chayPlus = 2.5;
let chayLvl = Number(localStorage.getItem("chayLvl")) || 0;
let chayProgress = Number(localStorage.getItem("chayProgress")) || 0;

let speed = Number(localStorage.getItem("speed")) || 0;
let speedPlus = 2.5;
let speedLvl = Number(localStorage.getItem("speedLvl")) || 0;
let speedProgress = Number(localStorage.getItem("speedProgress")) || 0;

let upBalance = Number(localStorage.getItem("upBalance")) || 0;
let upBalancePlus = 1;
let upBalanceLvl = Number(localStorage.getItem("upBalanceLvl")) || 0;
let upBalanceProgress = Number(localStorage.getItem("upBalanceProgress")) || 0;

let krit = Number(localStorage.getItem("krit")) || 0;
let kritPlus = 0.5;
let kritLvl = Number(localStorage.getItem("kritLvl")) || 0;
let kritProgress = Number(localStorage.getItem("kritProgress")) || 0;

let goodEvent = Number(localStorage.getItem("goodEvent")) || 25;
let goodEventPlus = 2.5;
let goodEventLvl = Number(localStorage.getItem("goodEventLvl")) || 0;
let goodEventProgress = Number(localStorage.getItem("goodEventProgress")) || 0;

let events = {
  happyEvent: {
    speed: {
      chance: 1,
      img: "images/event1.png",
      color: "var(--green)",
      text: "Вам повезло, вы доставили заказ очень быстро, за это компания предоставила вам бонус в размере: ",
      btn: "супер!",
    },
    goodHappy: {
      chance: 2,
      img: "images/event2.png",
      color: "var(--green)",
      text: "У вас на лице сверкает улыбка, вы заслужили чаевые: ",
      btn: "супер!",
    },
    wind: {
      chance: 3,
      img: "images/event1.png",
      color: "var(--green)",
      text: "Весь путь ветер вас подгонял, заказ доставлен быстро, за скорость вы получили: ",
      btn: "супер!",
    },
    fragile: {
      chance: 4,
      img: "images/event4.png",
      color: "var(--green)",
      text: "Вы везли хрупкий заказ, и доставили его очень аккуратно, вам положен бонус: ",
      btn: "супер!",
    },
    house: {
      chance: 5,
      img: "images/event5.png",
      color: "var(--green)",
      text: "Заказ оказался в этом же доме, не часто доставка занимает несколько минут, за это вы получаете бонус: ",
      btn: "супер!",
    },
  },
  badEvent: {
    speed: {
      chance: 1,
      img: "images/event6.png",
      color: "var(--danger)",
      text: "К сожалению, вы везли заказ слишком долго, у вас вычли часть оплаты: -",
      btn: "жаль",
    },
    badHappy: {
      chance: 2,
      img: "images/event7.png",
      color: "var(--danger)",
      text: "Вы встретили клиента со злым лицом, он написал жалобу, у вас вычли: -",
      btn: "жаль",
    },
    wind: {
      chance: 3,
      img: "images/event8.png",
      color: "var(--danger)",
      text: "Весь путь ветер был будто бы против вас, вы очень сильно опоздали, у вас вычли часть оплаты: -",
      btn: "жаль",
    },
    fragile: {
      chance: 4,
      img: "images/event9.png",
      color: "var(--danger)",
      text: "Все разбилось... В следующий раз нужно аккуратней с хрупкими заказами, оплату за заказ вы взяли на себя: -",
      btn: "жаль",
    },
    byke: {
      chance: 5,
      img: "images/event10.png",
      color: "var(--danger)",
      text: "Ваше транспортное средство сломалось, как не вовремя. Жаль, что разбираться в этом никто не будет, у вас вычли: -",
      btn: "жаль",
    },
  },
};

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

const audioSuccess = new Audio("/audio/success.mp3");
let savedVolumeSuccess = localStorage.getItem("musicSuccess");
let volumeSuccess = savedVolumeSuccess ? parseFloat(savedVolumeSuccess) : 0.5;
audioSuccess.volume = volumeSuccess;
const inputZvuk = document.getElementById("inputZvuk");
inputZvuk.value = volumeSuccess * 100;

inputZvuk.addEventListener("input", (e) => {
  const volume = e.target.value / 100;
  audioSuccess.volume = volume;
  localStorage.setItem("musicSuccess", volume);
});
const zvukPlay = () => {
  audioSuccess.volume = parseFloat(localStorage.getItem("musicSuccess")) || 0.5;
  audioSuccess.play();
};

const eventFunction = (randomNumber) => {
  const { nothing, good, bad } = eventsPercent;
  let resultEvent;
  if (randomNumber < nothing) {
    resultEvent = "nothing";
  } else if (randomNumber < nothing + good) {
    resultEvent = "good";
  } else {
    resultEvent = "bad";
  }

  if (resultEvent === "good" || resultEvent === "bad") {
    const randomEventNumber = Math.floor(Math.random() * 5) + 1;

    const currentEvents =
      resultEvent === "good" ? events.happyEvent : events.badEvent;

    const foundEvent = Object.values(currentEvents).find(
      (e) => e.chance === randomEventNumber
    );

    if (foundEvent) {
      showModal(foundEvent, resultEvent);
    }
  }
};

function showModal(event, resultEvent) {
  const modal = document.createElement("div");
  modal.classList.add("event-modal");
  let percent = balance / 100 > 0 ? balance / 100 : 0;

  modal.innerHTML = `
    <div class="event-modal-content" style="--event-color: ${event.color}">
      <img src="${event.img}" alt="event image" class="event-img">
      <p class="event-text">${event.text} <b class="eventMoney">${percent} ₽</b></p>
      <button class="event-btn">${event.btn}</button>
    </div>
  `;
  if (resultEvent == "good") {
    balance += Number(percent.toFixed());
    updateBalance();
  } else if (resultEvent == "bad") {
    balance -= Number(percent.toFixed());
    updateBalance();
  }
  document.body.appendChild(modal);

  modal.querySelector(".event-btn").addEventListener("click", () => {
    modal.remove();
  });
}

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

const localUpdates = () => {
  localStorage.setItem("chay", chay);
  localStorage.setItem("speed", speed);
  localStorage.setItem("upBalance", upBalance);
  localStorage.setItem("krit", krit);
  localStorage.setItem("goodEvent", goodEvent);
  localStorage.setItem("chayLvl", chayLvl);
  localStorage.setItem("speedLvl", speedLvl);
  localStorage.setItem("upBalanceLvl", upBalanceLvl);
  localStorage.setItem("kritLvl", kritLvl);
  localStorage.setItem("goodEventLvl", goodEventLvl);
  localStorage.setItem("chayProgress", chayProgress);
  localStorage.setItem("speedProgress", speedProgress);
  localStorage.setItem("upBalanceProgress", upBalanceProgress);
  localStorage.setItem("kritProgress", kritProgress);
  localStorage.setItem("goodEventProgress", goodEventProgress);
};

const updateSkills = (update) => {
  if (update == "chay" && chayLvl < 20) {
    if (balance >= updatesCost[chayLvl]) {
      balance -= updatesCost[chayLvl];
      zvukPlay();
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
      localUpdates();
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
      zvukPlay();
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
      localUpdates();
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
      zvukPlay();
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
      localUpdates();
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
      zvukPlay();
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
      localUpdates();
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
      zvukPlay();

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
      localUpdates();
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

  document.querySelector(
    ".item-chance"
  ).style.background = `linear-gradient(90deg, var(--blue) ${chayProgress}%, white 0%)`;
  document.querySelector(
    ".item-speed"
  ).style.background = `linear-gradient(90deg, var(--blue) ${speedProgress}%, white 0%)`;
  document.querySelector(
    ".item-krit"
  ).style.background = `linear-gradient(90deg, var(--blue) ${kritProgress}%, white 0%)`;
  document.querySelector(
    ".item-dohod"
  ).style.background = `linear-gradient(90deg, var(--blue) ${upBalanceProgress}%, white 0%)`;
  document.querySelector(
    ".item-luck"
  ).style.background = `linear-gradient(90deg, var(--blue) ${goodEventProgress}%, white 0%)`;

  chayNode.textContent = `${chay}%`;
  chayLvl < 20
    ? (chayBtn.textContent = `${updatesCost[chayLvl]} ₽`)
    : (chayBtn.textContent = "мах");

  speedNode.textContent = `${speed}%`;
  speedLvl < 20
    ? (speedBtn.textContent = `${updatesCost[speedLvl]} ₽`)
    : (speedBtn.textContent = "мах");

  upBalanceNode.textContent = `${upBalance}%`;
  upBalanceLvl < 20
    ? (upBalanceBtn.textContent = `${updatesCost[upBalanceLvl]} ₽`)
    : (upBalanceBtn.textContent = "мах");

  kritNode.textContent = `${krit}%`;
  kritLvl < 20
    ? (kritBtn.textContent = `${updatesCost[kritLvl]} ₽`)
    : (kritBtn.textContent = "мах");

  goodEventNode.textContent = `${goodEvent}%`;
  goodEventLvl < 10
    ? (goodEventBtn.textContent = `${updatesCostGoodEvent[goodEventLvl]} ₽`)
    : (goodEventBtn.textContent = "мах");
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
      zvukPlay();
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
      zvukPlay();
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
      zvukPlay();
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

localStorage.clear();

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
          const clickSound = new Audio("/audio/click.mp3");
          clickSound.volume = 0.5;
          clickSound.play();
        }
      });

      updateTime(random);

      // ивент
      const intervalEvent = setInterval(() => {
        if (random <= randomStart / 2) {
          clearInterval(intervalEvent);
          eventFunction(Number((Math.random() * 100.001).toFixed(2)));
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

const buyCharacteristic = (sum, char, plus, duration, timeNodeId) => {
  const currentProcent = char === "stamina" ? staminaProcent : happyProcent;
  if (currentProcent >= 100 || balance < sum) return;

  balance -= sum;
  updateBalance();
  zvukPlay();
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
      zvukPlay();
      break;
    case "energy":
      buyCharacteristic(100, "stamina", 15, 3000, "energyTime");
      lockButton(3000);
      zvukPlay();
      break;
    case "sauna":
      buyCharacteristic(1000, "stamina", 25, 5000, "saunaTime");
      lockButton(5000);
      zvukPlay();
      break;
    case "ukol":
      buyCharacteristic(2500, "stamina", 50, 2000, "ukolTime");
      lockButton(2000);
      zvukPlay();
      break;
    case "asmr":
      buyCharacteristic(5000, "stamina", 100, 4000, "asmrTime");
      lockButton(4000);
      zvukPlay();
      break;
    case "tiktok":
      buyCharacteristic(0, "happy", 5, 8000, "tiktokTime");
      lockButton(8000);
      zvukPlay();
      break;
    case "wb":
      buyCharacteristic(200, "happy", 15, 3000, "wbTime");
      lockButton(3000);
      zvukPlay();
      break;
    case "sushi":
      buyCharacteristic(700, "happy", 25, 5000, "sushiTime");
      lockButton(5000);
      zvukPlay();
      break;
    case "friends":
      buyCharacteristic(1500, "happy", 50, 2000, "friendsTime");
      lockButton(2000);
      zvukPlay();
      break;
    case "restoraunt":
      buyCharacteristic(3000, "happy", 100, 4000, "restorauntTime");
      lockButton(4000);
      zvukPlay();
      break;
  }
};
