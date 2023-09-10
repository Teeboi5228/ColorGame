var numSquare = 6;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var colors = generateRandomColor(6);
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
    colors = generateRandomColor(numSquare);
    colorDisplay.textContent = pickedColor;
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

easyButton.addEventListener("click", function() {
    this.classList.add("selected");
    numSquare = 3;
    hardButton.classList.remove("selected");
    colors = generateRandomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none"
        }
    }
})

hardButton.addEventListener("click", function() {
    colors = generateRandomColor(6);
    numSquare = 6;
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }
    
})


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
    
    squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        this.style.backgroundColor = pickedColor;
        changeColor(pickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "New Game"
    }else{
        messageDisplay.textContent = "Try Again!!!";
        this.style.backgroundColor = "#232323";
        resetButton.textContent = "Play Again"
    }
    })
}


function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColor(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" +r+ ", " +b+ ", " +b+ ")";
}