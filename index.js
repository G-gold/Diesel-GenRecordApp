const gen1 = document.getElementById("gen1")
const gen2 = document.getElementById("gen2")
const tank1 = document.getElementById("tank1")
const tank2 = document.getElementById("tank2")
const sendBtn = document.querySelector(".send")
const checkbox = document.getElementById("checkbox")
const program = document.getElementById("program")
const timer = document.getElementById("timer")

let today = new Date()
var month = today.toLocaleString("default", { month: "long" })
let date = month + " " + today.getDate() + "," + " " + today.getFullYear() + "."

sendBtn.addEventListener("click", () => {
  let whatsappurl =
    "https://wa.me/23408036218977?text=" +
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
    "ltrs" +
    "%0a" +
    "%0a" +
    "Total: " +
    (+tank1.value + +tank2.value) +
    "ltrs" +
    "%0a" +
    "%0a" +
    "Programs" +
    "%0a" +
    program.value +
    "%0a" +
    "%0a" +
    "Setup Time: " +
    timer.values
  window.open(whatsappurl, "_blank").focus()
})
