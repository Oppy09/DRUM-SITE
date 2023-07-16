buttonLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonLength; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }); 
}
// Detecting KeyBoard Press
document.addEventListener("keydown", function(e) {
    playSound(e.key);
    buttonAnimation(e.key);
});

function playSound(key) {
    switch(key) {
        case"w":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        console.log(this.innerHTML);
        break;
        case"a":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        console.log(this.innerHTML);
        break;
        case"s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        console.log(this.innerHTML);
        break;
        case"d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        console.log(this.innerHTML);
        break;
        case"j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        console.log(this.innerHTML);
        break;
        case"k":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        console.log(this.innerHTML);
        break;
        case"l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        console.log(this.innerHTML);
        break;
        default: console.log(this.innerHTML);
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}