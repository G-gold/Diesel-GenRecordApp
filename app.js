let gen1 = document.getElementById("gen1");
const gen2 = document.getElementById("gen2").value;
const tank1 = document.getElementById("tank1").value;
const tank2 = document.getElementById("tank2").value;
const sendBtn = document.querySelector(".send");
const checkbox = document.querySelectorAll(".checkbox");
console.log(checkbox.innerHTML);
sendBtn.addEventListener("click", () => {
  let whatsappurl =
    "https://wa.me/23407038596595?text=" +
    "d:" +
    checkbox.innerHTML +
    "%0a" +
    "gen1:" +
    gen1.value +
    "%0a" +
    "gen2:" +
    gen2.value +
    "%0a" +
    "tank1:" +
    tank1.value +
    "%0a" +
    "tank2:" +
    tank2.value;
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
