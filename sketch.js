const textToShow = "alex.haszard";
let textShowing = "";
let index = 0;
setTimeout(function() {
  setInterval(updateText, 150);
}, 500);

function updateText() {
  if (textToShow[index] === undefined) {
    index++;
    if (
      document.getElementById("outputText").innerHTML === textShowing + "_" &&
      index % 16 === 8
    ) {
      document.getElementById("outputText").innerHTML = textShowing;
    } else if (index % 16 === 0) {
      document.getElementById("outputText").innerHTML = textShowing + "_";
    }
    return;
  }
  textShowing += textToShow[index];
  index++;
  document.getElementById("outputText").innerHTML = textShowing + "_";
}
