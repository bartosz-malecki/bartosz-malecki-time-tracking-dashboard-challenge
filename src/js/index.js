import "../scss/main.scss";

console.log("Hello, this is my solution to this challenge.");

const daily = document.querySelector(".daily--js");
const weekly = document.querySelector(".weekly--js");
const monthly = document.querySelector(".monthly--js");
const activDaily = document.querySelectorAll(".daily");
const activWeekly = document.querySelectorAll(".weekly");
const activMonthly = document.querySelectorAll(".monthly");

weekly.style.color = "#fff";

const showDaily = function () {
  activDaily.forEach((p) => p.classList.remove("hidden"));
  activWeekly.forEach((p) => p.classList.add("hidden"));
  activMonthly.forEach((p) => p.classList.add("hidden"));
  daily.style.color = "#fff";
  weekly.style.color = "";
  monthly.style.color = "";
};

const showWeekly = function () {
  activDaily.forEach((p) => p.classList.add("hidden"));
  activWeekly.forEach((p) => p.classList.remove("hidden"));
  activMonthly.forEach((p) => p.classList.add("hidden"));
  weekly.style.color = "#fff";
  daily.style.color = "";
  monthly.style.color = "";
};

const showMonthly = function () {
  activDaily.forEach((p) => p.classList.add("hidden"));
  activWeekly.forEach((p) => p.classList.add("hidden"));
  activMonthly.forEach((p) => p.classList.remove("hidden"));
  monthly.style.color = "#fff";
  daily.style.color = "";
  weekly.style.color = "";
};

daily.addEventListener("click", showDaily);
weekly.addEventListener("click", showWeekly);
monthly.addEventListener("click", showMonthly);
