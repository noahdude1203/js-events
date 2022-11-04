var allWords = []
var currentWord = 0

function handleNewWordsEntered(event) {
    var textArea = event.currentTarget
    console.log("== New words entered, textArea.value:", textArea.value)
    var text = textArea.value
    allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
      .toLowerCase().split(' ')
    currentWord = 0
    console.log("  -- allWords:", allWords)
}

var wordsInput = document.getElementById("words-input")
// wordsInput.addEventListener("input", handleNewWordsEntered)
wordsInput.addEventListener("change", handleNewWordsEntered)

function generateWordElem(word, highlightColor) {
  var wordElem = document.createElement('span')
  wordElem.classList.add('word')
  wordElem.textContent = word
  if (highlightColor) {
      wordElem.classList.add('highlight')
  	  wordElem.classList.add(highlightColor)
  }
}

function getHighlightColor() {
  // var radioButtons = document.querySelectorAll("input[name='highlight-color']")
  // console.log("  -- radioButtons:", radioButtons)
  var selectedRadioButton = document.querySelector("input[name='highlight-color']:checked")
  console.log("  -- selectedRadioButton:", selectedRadioButton)
  return selectedRadioButton.value
}

function handleButtonClick(event) {
  console.log("== A button was clicked")
  var word = allWords[currentWord]
  if (word) {
    console.log("  -- word:", word)

    var dropdown = document.getElementById("every-nth-select")
    console.log("  -- dropdown.value:", dropdown.value)
    var n = parseInt(dropdown.value)
    var highlight
    if ((currentWord + 1) % n === 0) {
      highlight = getHighlightColor()
    }

    // radioButton.checked
    var wordElem = generateWordElem(word, highlight)
    console.log("wordElem:", wordElem)
    var currentButton = event.currentTarget
    console.log("  -- currentButton:", currentButton)
    var container = currentButton.parentNode.parentNode
    var wordsContainer = container.getElementsByClassName("words-container")
    console.log("  -- wordsContainer:", wordsContainer)
    wordsContainer.appendChild(wordElem)

    currentWord = (currentWord + 1) % allWords.length
  }
}

var buttons = document.getElementsByClassName("add-word-button")
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleButtonClick)
}