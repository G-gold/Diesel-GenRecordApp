const gen1 = document.getElementById("gen1");
const gen2 = document.getElementById("gen2");
const tank1 = document.getElementById("tank1");
const tank2 = document.getElementById("tank2");
const sendBtn = document.querySelector(".send");
const checkbox = document.getElementById("checkbox");
let today = new Date();
var month = today.toLocaleString("default", { month: "long" });
let date =
  month + " " + today.getDate() + "," + " " + today.getFullYear() + ".";

// today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
sendBtn.addEventListener("click", () => {
  let whatsappurl =
    "https://wa.me/23407038596595?text=" +
    checkbox.value +
    " Reading [Annex2 Facility]" +
    "%0a" +
    date +
    "%0a" +
    "%0a" +
    "Gen" +
    "%0a" +
    "500Kva: " +
    gen1.value +
    "hrs" +
    "%0a" +
    "%0a" +
    "100Kva: " +
    gen2.value +
    "hrs" +
    "%0a" +
    "%0a" +
    "Diesel" +
    "%0a" +
    "Tank1: " +
    tank1.value +
    "ltrs" +
    "%0a" +
    "%0a" +
    "Tank2: " +
    tank2.value +
    "ltrs";
  window.open(whatsappurl, "_blank").focus();
});

// let period_value;
// for (let times of period) {
//   if (times.checked) {
//     period_value = period.value;
//   }
// }

// var time = document.getElementsByName("time");
// var time_value;
// for (var i = 0; i < time.length; i++) {
//   if (time[i].checked) {
//     time_value = time[i].value;
//   }
// }

// "https://wa.me/23407038596595?text=" +
// "d:" +
// checkbox.innerHTML +
// "%0a" +
// "gen1:" +
// gen1.value +
// "%0a" +
// "gen2:" +
// gen2.value +
// "%0a" +
// "tank1:" +
// tank1.value +
// "%0a" +
// "tank2:" +
// tank2.value;
