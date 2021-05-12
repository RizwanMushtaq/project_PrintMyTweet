
//This function will show newFileDialogBox to user
function showNewFileDialog(){
    let whiteBackground = document.querySelector(".whiteBackground");
    let newFileDialogBox = document.querySelector(".newFileDialogBox");
    whiteBackground.style.display = "block";
    newFileDialogBox.style.display = "block";

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    newFileDialogBox.style.left = (winWidth/2)- 480/2 + "px";
    newFileDialogBox.style.top = "150px";
    resetAllInputs();

}
//This function will hide newFileDialogBox
function hideNewFileDialog(){
    let whiteBackground = document.querySelector(".whiteBackground");
    let newFileDialogBox = document.querySelector(".newFileDialogBox");
    whiteBackground.style.display = "none";
    newFileDialogBox.style.display = "none";
}
//This function will reset all inputs in the App
function resetAllInputs(){
    //Reset All properties inputs to default Properties
    document.querySelector(".printName").value = "My Tweet";
    document.querySelector(".canvasWidth").value = 720;
    document.querySelector(".canvasHeight").value = 480;
    document.querySelector(".backgroundColor").value = "#ffffff";
    document.querySelector(".backgroundShape").value = "none";
    document.querySelector(".backgroundShapeColor").value = "#8AB3FF";
    document.querySelector(".tweetTextArea").value = "";
    document.querySelector(".textPostionX").value = 180; //It is calculated dynamically when opening property panel 
    document.querySelector(".textPostionY").value = 120; //It is calculated dynamically when opening property panel
    document.querySelector(".textColor").value = "#007BFF";
    document.querySelector(".fontSize").value = 36;
    document.querySelector(".fontFamily").value = "Arial";
    document.querySelector(".icon").checked = false;
    document.querySelector(".iconSize").value = "medium";
    document.querySelector(".iconPostionX").value = 540; //It is calculated dynamically when opening property panel
    document.querySelector(".iconPostionY").value = 120; //It is calculated dynamically when opening property panel
}
