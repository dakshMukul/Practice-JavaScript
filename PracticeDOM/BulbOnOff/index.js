var bulb = document.querySelector("#bulb");
var button = document.getElementById("button");

bulb.style.backgroundColor = "black";

button.addEventListener("click", function () {
  if (button.innerText === "Off") {
    bulb.style.backgroundColor = "black";
    button.innerText = "On";
  } else {
    bulb.style.backgroundColor = "yellow";
    button.innerText = "Off";
  }
});
