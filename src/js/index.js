import "../scss/main.scss";

const daily = document.querySelector(".daily--js");
const weekly = document.querySelector(".weekly--js");
const monthly = document.querySelector(".monthly--js");
const activDaily = document.querySelectorAll(".daily");
const activWeekly = document.querySelectorAll(".weekly");
const activMonthly = document.querySelectorAll(".monthly");

const showDaily = function () {
  activDaily.forEach((p) => p.classList.remove("hidden"));
  activWeekly.forEach((p) => p.classList.add("hidden"));
  activMonthly.forEach((p) => p.classList.add("hidden"));
};

const showWeekly = function () {
  activDaily.forEach((p) => p.classList.add("hidden"));
  activWeekly.forEach((p) => p.classList.remove("hidden"));
  activMonthly.forEach((p) => p.classList.add("hidden"));
};

const showMonthly = function () {
  activDaily.forEach((p) => p.classList.add("hidden"));
  activWeekly.forEach((p) => p.classList.add("hidden"));
  activMonthly.forEach((p) => p.classList.remove("hidden"));
};

daily.addEventListener("click", showDaily);
weekly.addEventListener("click", showWeekly);
monthly.addEventListener("click", showMonthly);
