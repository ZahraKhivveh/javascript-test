const textarea = document.querySelector("textarea");
const wordsElem = document.querySelector(".words");
const charactersElem = document.querySelector(".characters");
const sentencesElem = document.querySelector(".sentences");

textarea.addEventListener("keyup", countWords);

function countWords() {
  const value = textarea.value;
  const words = value.split(" ");
  const chars = value.split("").filter(function (char) {
    return char !== " ";
  });
  const sentences = value.split(".");

  wordsElem.innerHTML = words.length;
  charactersElem.innerHTML = chars.length;
  sentencesElem.innerHTML = sentences.length;
}
