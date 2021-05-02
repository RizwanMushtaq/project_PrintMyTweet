window.onload = function() {
    //Selectors
        let newFileButton = document.querySelector(".newFileButton");
        //NewFileDialog Buttons
        let createNewFileButton = document.querySelector(".createNewFileButton");
        let cancelNewFileButton = document.querySelector(".cancelNewFileButton");
        //ActionBar buttons
        let size = document.querySelector(".size");
        let background = document.querySelector(".background");
        let text = document.querySelector(".text");
        let twitterIcon = document.querySelector(".twitterIcon");
        //Property Panel
        let propertyPanelAll = document.querySelectorAll(".propertyPanel");
        let closeButtonAll = document.querySelectorAll(".closeButton");

    //Make all the Property panels draggable:
    dragPropertyPanel();
    //events
    newFileButton.onclick = showNewFileDialog;
    //New File Dialog Buttons
    createNewFileButton.onclick = function(){
        let drawMyFile = updateOfFile();
        drawMyFile.drawFile(); 
    };
    cancelNewFileButton.onclick = hideNewFileDialog;
    //ActionBar buttons
    size.onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".sizePropertyPanel").style.display = "block";
    }
    background.onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".backgroundPropertyPanel").style.display = "block";
    }
    text.onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".textPropertyPanel").style.display = "block";
    }
    twitterIcon.onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".twitterIconPropertyPanel").style.display = "block";
    }
    //Property Panel -> Close button for each property panel 
    closeButtonAll.forEach(function(item){
        item.onclick = function(e){
            let target = e.target;
            target.parentElement.parentElement.parentElement.style.top = "0";
            target.parentElement.parentElement.parentElement.style.left = (window.innerWidth-target.parentElement.parentElement.parentElement.offsetWidth) + "px";
            target.parentElement.parentElement.parentElement.style.display = "none";
        }
    });

}




/*
//selectors-----------------------------------------------------------------------------
let newFileButton = document.getElementById("newFileButton");
let exportButton = document.getElementById("exportButton");

//NewFileDialog
let createNewFileButton = document.getElementById("createNewFileButton");
let cancelNewFileButton = document.getElementById("cancelNewFileButton");
let shirtSize = document.querySelector("#shirtSize");
let dialogIconContainer = document.getElementById("dialogIconContainer");

//ActionBar
let backgroundColor = document.getElementById("backgroundColor");
let backgroundShape = document.getElementById("backgroundShape");
let backgroundShapeColor = document.getElementById("backgroundShapeColor");
let textColor = document.getElementById("textColor");
let pickTweet = document.getElementById("pickTweet");
let twitterIcon = document.getElementById("twitterIcon");

//events------------------------------------------------------------------------------
//Window onload Event
window.onload = function() {
    //Disable all input fields in ActionBar except NewFile Input Field
    diableActionBar();
}
//This Event-Listner will show New File Dialog 
newFileButton.addEventListener("click", showNewFileDialog);
//This Event-Listner will export File
exportButton.addEventListener("click", exportMyImage); 

//NewFileDialog
//This Event-Listner will create new Canvas 
createNewFileButton.addEventListener("click", createNewCanvas);
//This Event-Listner will cancel new Canvas 
cancelNewFileButton.addEventListener("click", cancelNewCanvas);
//This Event-Listner will update focus on the landscape or potrait Icon
dialogIconContainer.addEventListener("click", updatedialogIcon);
//Updating Print Size in drop down list
shirtSize.addEventListener("change",updateSize);

//ActionBar
//This Event-Listner will update the background color of canvas
backgroundColor.addEventListener("input", updateBackgroundColor); 
//This Event-Listner will update the background shape of canvas
backgroundShape.addEventListener("change", updateBackgroundShape);
//This Event-Listner will update the background shape Color
backgroundShapeColor.addEventListener("input", updateBackgroundShapeColor);
//This Event-Listner will update Text Color
textColor.addEventListener("input", updateTextColor);
//This Event-Listner will update Tweet from list
pickTweet.addEventListener("change", updatePickTweet);
//This Event-Listner will update Tweeter Icon
twitterIcon.addEventListener("change", updatetwitterIcon);

*/