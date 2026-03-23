function calculateEnergy() {
  let power = document.getElementById("power").value;
  let time = document.getElementById("time").value;

  if (power === "" || time === "") {
    document.getElementById("result").innerText = "Please enter values!";
    return;
  }

  let energy = power * time; // Energy = Power × Time

  document.getElementById("result").innerText =
    "Energy Consumed: " + energy + " Wh";
}
