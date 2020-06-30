const textToShow = "alex.haszard";
let textShowing = "";
let index = 0;
setInterval(updateText, 200);
updateText();

function updateText() {
  if (textToShow[index] === undefined) {
    index++;
    if (
      document.getElementById("outputText").innerHTML === textShowing + "_" &&
      index % 10 === 5
    ) {
      document.getElementById("outputText").innerHTML = textShowing;
    } else if (index % 10 === 0) {
      document.getElementById("outputText").innerHTML = textShowing + "_";
    }
    return;
  }
  textShowing += textToShow[index];
  index++;
  document.getElementById("outputText").innerHTML = textShowing + "_";
}
