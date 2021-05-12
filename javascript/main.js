window.onload = function() {
    //Make all the Property panels draggable:
    dragPropertyPanel();
    //Function call to create closure for new file Object
    const updateMyFile = updateOfFile();
    //events--------------------------------------------------------------------------------------------------------------
    //New File Button in WP
    document.querySelector(".newFileButton").onclick = showNewFileDialog;
    //New File Dialog Name Input Field
    document.querySelector(".printName").onblur = function(){
        console.log("name input in new file dialog is onblur now");
        let newName = document.querySelector(".printName").value;
        if(newName == "" || newName.trim() == ""){
            //alert("Please enter name");
            document.querySelector(".printName").value = "My Tweet";
        }else{
            //do nothing
        }
    }
    //Create New File Dialog Buttons
    document.querySelector(".createNewFileButton").onclick = function(){
        document.querySelector(".welcomePanel").style.display = "none";
        document.querySelector(".appViewer").style.display = "grid";
        updateMyFile.showFileInViewer();
    };
    //Cancel New File Dialog Button
    document.querySelector(".cancelNewFileButton").onclick = hideNewFileDialog;
    //ActionBar Name Input Field
    document.querySelector(".fileNameActionBar").onblur = function(){
        console.log("name input in action bar is onblur now");
        updateMyFile.updateFileNameOnBlur();
    }
    //ActionBar buttons
    document.querySelector(".home").onclick = function(){
        console.log("home button event triggered");
        const welcomePanel = document.querySelector(".welcomePanel");
        welcomePanel.style.display = "grid";
        const appViewer = document.querySelector(".appViewer");
        appViewer.style.display = "none";
    }
    document.querySelector(".export").onclick = function(){
        console.log("export button event triggered");
        showExportDialog();
    }
    //Export Dialog Box Button
    document.querySelector(".exportDialogBoxButton").onclick = function(){
        console.log("export button in Export Dialog Box event triggered");
        updateMyFile.exportImage(); 
    }
    //Cancel Export Dialog Box Button
    document.querySelector(".cancelExportDialogBoxButton").onclick = hideExportDialog;

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
        updateMyFile.updateText();
    }
    document.querySelector(".twitterIcon").onclick = function(){
        hideAlreadyOpenedPropertyPanel();
        document.querySelector(".twitterIconPropertyPanel").style.display = "block";
        updateMyFile.updateIconPanel();
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
    document.querySelector(".canvasWidth").onchange = () => {
        updateMyFile.updateWidth();
    } 
    document.querySelector(".canvasHeight").onchange = () => {
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
    document.querySelector(".tweetTextArea").oninput = () => {
        console.log("TweetTextArea input added by user");
        updateMyFile.updateTweetTextArea();
    }
    document.querySelector(".textPostionX").oninput = () => {
        console.log("textPostionX updated");
        updateMyFile.updateTextPostionX();
    }
    document.querySelector(".textPostionY").oninput = () => {
        console.log("textPostionY updated");
        updateMyFile.updateTextPostionY();
    }
    document.querySelector(".textColor").addEventListener("input", () => {
        console.log("TextColor Input updated");
        updateMyFile.updateTextColor();
    });
    document.querySelector(".fontSize").onchange = () => {
        console.log("FontSize Input updated");
        updateMyFile.updateFontSize();
    }
    document.querySelector(".fontFamily").onchange = () => {
        console.log("FontFamily Input updated");
        updateMyFile.updateFontFamily();
    }
    //Canvas Twitter Icon property Panel
    document.querySelector(".icon").onchange = () => {
        console.log("Twiter Icon check box Input updated");
        updateMyFile.updateIcon();
    }
    document.querySelector(".iconSize").onchange = () => {
        console.log("Twiter Icon Size Input updated");
        updateMyFile.updateIconSize();
    }
    document.querySelector(".iconPostionX").oninput = () => {
        console.log("iconPostionX updated");
        updateMyFile.updateIconPostionX();
    }
    document.querySelector(".iconPostionY").oninput = () => {
        console.log("IconPostionY updated");
        updateMyFile.updateIconPostionY();
    }
}
