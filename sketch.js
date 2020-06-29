const textToShow = "lex.haszard";
let textShowing = "a";
let index = 0;
setInterval(updateText, 100);
updateText();

function updateText() {
  if (textToShow[index] === undefined) {
    index++;
    if (document.getElementById("outputText").innerHTML === textShowing + "_" && index % 20 === 10) {
      document.getElementById("outputText").innerHTML = textShowing;
    } else if (index % 20 === 0) {
      document.getElementById("outputText").innerHTML = textShowing + "_";
    }
    return;
  }
  textShowing += textToShow[index];
  index++;
  document.getElementById("outputText").innerHTML = textShowing + "_";
}