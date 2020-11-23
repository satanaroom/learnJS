let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let date = new Date();

for (let day of week) {
  if (day === week[date.getDay()]) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<br><strong>${day}</strong>`
    );
  } else if (day === "Суббота" || day === "Воскресенье") {
    document.body.insertAdjacentHTML("beforeend", `<br><i>${day}</i>`);
  } else {
    document.body.insertAdjacentHTML("beforeend", `<br>${day}`);
  }
}
console.log();