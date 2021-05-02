window.onload = function() {
    //Selectors
        const newFileButton = document.querySelector(".newFileButton");
        //NewFileDialog Buttons
        const createNewFileButton = document.querySelector(".createNewFileButton");
        const cancelNewFileButton = document.querySelector(".cancelNewFileButton");
        //ActionBar buttons
        const home = document.querySelector(".home");
        const save = document.querySelector(".save");
        const download = document.querySelector(".download");
        const size = document.querySelector(".size");
        const background = document.querySelector(".background");
        const text = document.querySelector(".text");
        const twitterIcon = document.querySelector(".twitterIcon");
        //Property Panel
        const propertyPanelAll = document.querySelectorAll(".propertyPanel");
        const closeButtonAll = document.querySelectorAll(".closeButton");

    //Make all the Property panels draggable:
    dragPropertyPanel();
    const updateMyFile = updateOfFile();
    //events
    newFileButton.onclick = showNewFileDialog;
    //New File Dialog Buttons
    createNewFileButton.onclick = function(){
        const welcomePanel = document.querySelector(".welcomePanel");
        welcomePanel.style.display = "none";
        const appViewer = document.querySelector(".appViewer");
        appViewer.style.display = "grid";
        updateMyFile.showFileInViewer(); 
    };
    cancelNewFileButton.onclick = hideNewFileDialog;
    //ActionBar buttons
    home.onclick = function(){
        console.log("home button event triggered");
        const welcomePanel = document.querySelector(".welcomePanel");
        welcomePanel.style.display = "grid";
        const appViewer = document.querySelector(".appViewer");
        appViewer.style.display = "none";
    }
    save.onclick = function(){
        console.log("save button event triggered");
    }
    download.onclick = function(){
        console.log("download button event triggered");
    }
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
            const target = e.target;
            target.parentElement.parentElement.parentElement.style.top = "0";
            target.parentElement.parentElement.parentElement.style.left = (window.innerWidth-target.parentElement.parentElement.parentElement.offsetWidth) + "px";
            target.parentElement.parentElement.parentElement.style.display = "none";
        }
    });

}




/*
//selectors-----------------------------------------------------------------------------
const newFileButton = document.getElementById("newFileButton");
const exportButton = document.getElementById("exportButton");

//NewFileDialog
const createNewFileButton = document.getElementById("createNewFileButton");
const cancelNewFileButton = document.getElementById("cancelNewFileButton");
const shirtSize = document.querySelector("#shirtSize");
const dialogIconContainer = document.getElementById("dialogIconContainer");

//ActionBar
const backgroundColor = document.getElementById("backgroundColor");
const backgroundShape = document.getElementById("backgroundShape");
const backgroundShapeColor = document.getElementById("backgroundShapeColor");
const textColor = document.getElementById("textColor");
const pickTweet = document.getElementById("pickTweet");
const twitterIcon = document.getElementById("twitterIcon");

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