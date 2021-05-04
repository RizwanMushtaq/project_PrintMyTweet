window.onload = function() {
    //Make all the Property panels draggable:
    dragPropertyPanel();
    //Function call to create closure for new file Object
    const updateMyFile = updateOfFile();
    //events--------------------------------------------------------------------------------------------------------------
    //New File Button in WP
    document.querySelector(".newFileButton").onclick = showNewFileDialog;
    //Create File Dialog Buttons
    document.querySelector(".createNewFileButton").onclick = function(){
        document.querySelector(".welcomePanel").style.display = "none";
        document.querySelector(".appViewer").style.display = "grid";
        updateMyFile.showFileInViewer(); 
    };
    //Cancel New File Dialog Button
    document.querySelector(".cancelNewFileButton").onclick = hideNewFileDialog;
    //ActionBar buttons
    document.querySelector(".home").onclick = function(){
        console.log("home button event triggered");
        const welcomePanel = document.querySelector(".welcomePanel");
        welcomePanel.style.display = "grid";
        const appViewer = document.querySelector(".appViewer");
        appViewer.style.display = "none";
    }
    document.querySelector(".save").onclick = function(){
        console.log("save button event triggered");
    }
    document.querySelector(".download").onclick = function(){
        console.log("download button event triggered");
    }
    document.querySelector(".canvasSize").onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".canvasSizePropertyPanel").style.display = "block";
    }
    document.querySelector(".background").onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".backgroundPropertyPanel").style.display = "block";
    }
    document.querySelector(".text").onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".textPropertyPanel").style.display = "block";
    }
    document.querySelector(".twitterIcon").onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".twitterIconPropertyPanel").style.display = "block";
    }
    //Property Panel -> Close button for each property panel 
    document.querySelectorAll(".closeButton").forEach(function(item){
        item.onclick = function(e){
            const target = e.target;
            target.parentElement.parentElement.parentElement.style.top = "0";
            target.parentElement.parentElement.parentElement.style.left = (window.innerWidth-target.parentElement.parentElement.parentElement.offsetWidth) + "px";
            target.parentElement.parentElement.parentElement.style.display = "none";
        }
    });
    //Properties in Property Panels
    //Canvas Size property Panel
    document.querySelector(".canvasWidth").onblur = () => {
        updateMyFile.updateWidth();
    } 
    document.querySelector(".canvasHeight").onblur = () => {
        updateMyFile.updateHeight();
    } 
    //Canvas Background property Panel
    document.querySelector(".backgroundColor").addEventListener("input", () => {
        updateMyFile.updateBackgroundColor();
    });
    document.querySelector(".backgroundShape").onchange = () => {
        updateMyFile.updateBackgroundShape();
    }
    document.querySelector(".backgroundShapeColor").addEventListener("input", () => {
        updateMyFile.updateBackgroundShapeColor();
    });
    //Canvas Text property Panel
    document.querySelector(".tweetText").onclick = () => {
        console.log("TweetText button pressed");
        updateMyFile.updateTweetText();
    }
}
