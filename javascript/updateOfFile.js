function updateOfFile(){
    let myFile = new File;
    let oldWidth = myFile.width;
    let oldHeight = myFile.height;
    let circles; //variable to hold circles comimg from function saveCirclesinArray() defined in backgroundShapes.js
    console.log(myFile);

    showFileInViewer = () => {
        hideNewFileDialog();
        
        //Updating File
        myFile.name = document.querySelector(".printName").value;
        myFile.width = document.querySelector(".canvasWidth").value;
        myFile.height = document.querySelector(".canvasHeight").value;
        myFile.backgroundColor = document.querySelector(".backgroundColor").value;
        myFile.backgroundShape = document.querySelector(".backgroundShape").value;
        myFile.backgroundShapeColor = document.querySelector(".backgroundShapeColor").value;
        myFile.tweetText = document.querySelector(".tweetTextArea").value;
        myFile.textPositionX = document.querySelector(".textPostionX").value;
        myFile.textPositionY = document.querySelector(".textPostionY").value;
        myFile.textColor = document.querySelector(".textColor").value;
        myFile.fontSize = document.querySelector(".fontSize").value;
        myFile.fontFamily = document.querySelector(".fontFamily").value;
        myFile.icon = document.querySelector(".icon").checked;
        myFile.iconSize = document.querySelector(".iconSize").value;
        myFile.iconPositionX = document.querySelector(".iconPostionX").value;
        myFile.iconPositionY = document.querySelector(".iconPostionY").value;
        console.log(myFile);
        document.querySelector(".fileNameActionBar").value = document.querySelector(".printName").value;
        redrawCanvas();
    }
   
    updateFileNameOnBlur = function() {
        console.log("In update File Name On Blur function");
        let newName = document.querySelector(".fileNameActionBar").value;
        if(newName == "" || newName.trim() == ""){
            //alert("Please enter name");
            document.querySelector(".fileNameActionBar").value = myFile.name;
        }else{
            myFile.name = document.querySelector(".fileNameActionBar").value;
        }
        console.log(myFile.name);
    }
    updateWidth = function() {
        //myFile.width = Math.round( (96/2.54) * parseFloat(document.querySelector(".canvasWidth").value) );
        myFile.width = document.querySelector(".canvasWidth").value;
        console.log(myFile.width);
        redrawCanvas();
        oldWidth = myFile.width;
    }
    updateHeight = () => {
        //myFile.height = Math.round( (96/2.54) * parseFloat(document.querySelector(".canvasHeight").value) );
        myFile.height = document.querySelector(".canvasHeight").value;
        console.log(myFile.height);
        redrawCanvas();
        oldHeight = myFile.height;
    }
    updateBackgroundColor = function(){
        myFile.backgroundColor = document.querySelector(".backgroundColor").value;
        redrawCanvas();
    }
    updateBackgroundShape = function(){
        myFile.backgroundShape = document.querySelector(".backgroundShape").value;
        console.log(myFile.backgroundShape);
        if(myFile.backgroundShape === "none"){
            //do nothing
        } else if(myFile.backgroundShape === "circle"){
            circles = saveCirclesinArray(myFile.width,myFile.height);
        }
        console.log(circles);
        redrawCanvas();
    }
    updateBackgroundShapeColor = function(){
        myFile.backgroundShapeColor = document.querySelector(".backgroundShapeColor").value;
        redrawCanvas();
    }
    updateText = function(){
        console.log("In updateTextPosition() function");

        document.querySelector(".textPostionX").value = myFile.width/4;
        document.querySelector(".textPostionY").value = myFile.height/4;
        myFile.textPositionX = myFile.width/4;
        myFile.textPositionY = myFile.height/4;

    }
    updateTweetTextArea = function(){
        console.log("updateTweetTextArea function");
        myFile.tweetText = document.querySelector(".tweetTextArea").value;
        console.log(myFile.tweetText);
        redrawCanvas();
    }
    updateTextPostionX = function(){
        console.log("In updateTextPostionX function");
        myFile.textPositionX = document.querySelector(".textPostionX").value;
        redrawCanvas();
    }
    updateTextPostionY = function(){
        console.log("In updateTextPostionY function");
        myFile.textPositionY = document.querySelector(".textPostionY").value;
        redrawCanvas();
    }
    updateTextColor = function(){
        console.log("In updateTextColor function");
        myFile.textColor = document.querySelector(".textColor").value;
        redrawCanvas();
    }
    updateFontSize = function(){
        console.log("In updateFontSize function");
        myFile.fontSize = document.querySelector(".fontSize").value;
        redrawCanvas();
    }
    updateFontFamily = function(){
        console.log("In updateFontFamily function");
        myFile.fontFamily = document.querySelector(".fontFamily").value;
        redrawCanvas();
    }
    updateIconPanel = function(){
        console.log("In updateIconPanel() function");

        document.querySelector(".iconPostionX").value = 3*(myFile.width/4);
        document.querySelector(".iconPostionY").value = myFile.height/4;
        myFile.iconPositionX = 3*(myFile.width/4);
        myFile.iconPositionY = myFile.height/4;
    }
    updateIcon = function(){
        console.log("In updateTwitter Icon function");
        myFile.icon = document.querySelector(".icon").checked;
        console.log(myFile);
        redrawCanvas();
    }
    updateIconSize = function(){
        console.log("In updateTwitter Icon Size function");
        myFile.iconSize = document.querySelector(".iconSize").value;
        console.log(myFile);
        redrawCanvas();
    }
    updateIconPostionX = function(){
        console.log("In updateIconPostionX function");
        myFile.iconPositionX = document.querySelector(".iconPostionX").value;
        redrawCanvas();
    }
    updateIconPostionY = function(){
        console.log("In updateIconPostionY function");
        myFile.iconPositionY = document.querySelector(".iconPostionY").value;
        redrawCanvas();
    }
    //Function to export image to local drive
    exportImage = function(){
        console.log("In export Image function");
        let myCanvas = document.querySelector(".myCanvas");
        let context = myCanvas.getContext("2d");
        let image = new Image();
        if(document.querySelector(".pngInput").checked){
            //By Default It will save png image
            image.src = myCanvas.toDataURL('image/png');
        }else if(document.querySelector(".jpegInput").checked){
            image.src = myCanvas.toDataURL('image/jpeg');
        }
        //Using a element to get link of image and export it in local drive 
        let exportLink = document.querySelector(".exportLink");
        exportLink.href = image.src;
        hideExportDialog();
    }
    //This function will draw canvas after clearing old canvas and drawing new one on top of that
    function redrawCanvas(){
        let myCanvas = document.querySelector(".myCanvas");
        let context = myCanvas.getContext("2d");
        context.clearRect(0,0,oldWidth,oldHeight);
        myCanvas.width = myFile.width;
        myCanvas.height = myFile.height; 
        context.fillStyle = myFile.backgroundColor;
        context.fillRect(0,0,myFile.width,myFile.height);
        //Drawing background shape in Canvas
        if(myFile.backgroundShape === "none"){
            //do nothing
        }else if(myFile.backgroundShape === "circle"){
            drawCircles(circles, myFile.backgroundShapeColor);
        }
        //Drawing Text on Canvas
        context.font = myFile.fontSize + "px " + myFile.fontFamily;
        context.fillStyle = myFile.textColor;
        context.fillText(myFile.tweetText, myFile.textPositionX, myFile.textPositionY);
        //Updating Twitter Icon
        if(myFile.icon){
            //insert icon image
            console.log("Insert twitter Image");
            let img = new Image();
            if(myFile.iconSize === "small"){
                img.src = "images/twitterIcon64px.png";
            } else if(myFile.iconSize === "medium"){
                img.src = "images/twitterIcon128px.png";
            } else if(myFile.iconSize === "large"){
                img.src = "images/twitterIcon512px.png";
            }
            
            img.onload = function() {
                context.drawImage(img, myFile.iconPositionX, myFile.iconPositionY);
            }; 

        } else{
            //remove icon image
            //console.log("Don't Insert twitter Image");
        }
    }

    return {
        showFileInViewer,
        updateFileNameOnBlur,
        updateWidth,
        updateHeight,
        updateBackgroundColor,
        updateBackgroundShape,
        updateBackgroundShapeColor,
        updateText,
        updateTweetTextArea,
        updateTextPostionX,
        updateTextPostionY,
        updateTextColor,
        updateFontSize,
        updateFontFamily,
        updateIconPanel,
        updateIcon,
        updateIconSize,
        updateIconPostionX,
        updateIconPostionY,
        exportImage
    };
}