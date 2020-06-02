const poi = ["Shark", "Pleasant", "Craggy", "Steamy", "Yacht", "Sweaty", "Risky", "Frenzy", "Dirty", "Agency", "Holly", "Weeping", "Lazy", "Retail", "Grotto", "Slurpy", "Misty", "Rig"];
let currentPoi = "Press button for POI"

function buttonPressed() {
  let index = Math.floor(Math.random() * poi.length)
  currentPoi = poi[index]
  document.getElementById("poi").innerHTML = currentPoi
}