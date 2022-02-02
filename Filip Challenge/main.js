let bodyBg = document.querySelector("body");
let radioBtn= document.querySelector(".main");
let radioClick = document.querySelector(".pri");

//add click event to radioClick
//change background color of body
//change background color of button

function darkMode(){
        bodyBg.style.background = "black";

        radioBtn.style.background = "black";
        radioBtn.style.borderColor = "white";

        radioClick.style.background = "white";
        radioClick.style.left = "150px";
        radioClick.style.borderColor = "black";
}

function lightMode(){
        bodyBg.style.background = "white";

        radioBtn.style.background = "white";
        radioBtn.style.borderColor = "black";
    
        radioClick.style.background = "black";
        radioClick.style.left = "3px";
        radioClick.style.borderColor = "white"; 
}

var clickAction=()=>(bodyBg.style.background == "white") ? darkMode() : lightMode()
    



// function clickAction(){
//     if(bodyBg.style.background == "white"
//     ){
//         console.log("cow")
//         darkMode()

//     }
//     else{
//         lightMode()
//     }

// }