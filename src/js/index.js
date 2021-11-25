import "../scss/main.scss";

const daily = document.querySelector(".daily--js");
const weekly = document.querySelector(".weekly--js");
const monthly = document.querySelector(".monthly--js");
const activDaily = document.querySelectorAll(".daily");
const activWeekly = document.querySelectorAll(".weekly");
const activMonthly = document.querySelectorAll(".monthly");

// daily.addEventListener("click", function () {});

const showDaily = function () {
  //   activWeekly.classList.add("hidden");
  //   activMonthly.classList.add("hidden");
  activDaily.classList.remove("hidden");
  console.log("as");
};

const showWeekly = function () {
  activDaily.classList.add("hidden");
  activMonthly.classList.add("hidden");
  activWeekly.classList.remove("hidden");
  console.log("dupa");
};

const showMonthly = function () {
  activWeekly.classList.add("hidden");
  activDaily.classList.add("hidden");
  activMonthly.classList.remove("hidden");
  console.log("elo");
};

daily.addEventListener("click", showDaily);

activWeekly.forEach((p) => p.addEventListener("click", showWeekly));
activMonthly.forEach((p) => p.addEventListener("click", showMonthly));
