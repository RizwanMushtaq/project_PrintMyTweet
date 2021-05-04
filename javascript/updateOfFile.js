function updateOfFile(){
    let myFile = new File("MyTweetPrint","567","378","#ffffff","none","#8AB3FF","#007bff","Hi",false);
    let oldWidth = myFile.width;
    let oldHeight = myFile.height;
    let circles; //variable to hold circles comimg from function saveCirclesinArray() defined in backgroundShapes.js
    console.log(myFile);

    showFileInViewer = () => {
        hideNewFileDialog();
        myFile.draw();
    }
     /*
    Converting cm to pixals
    let dpi = 96; //let dots per pixal value
    let widthPixal = Math.round((96/2.54) * parseFloat(widthLabel.value)); 
    let heightPixal = Math.round((96/2.54) * parseFloat(heightLabel.value));
    */
    updateWidth = function() {
        myFile.width = Math.round( (96/2.54) * parseFloat(document.querySelector(".canvasWidth").value) );
        console.log(myFile.width);
        redrawCanvas();
        oldWidth = myFile.width;
    }
    updateHeight = () => {
        myFile.height = Math.round( (96/2.54) * parseFloat(document.querySelector(".canvasHeight").value) );
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
    updateTweetText = function(){
        console.log("In updateTweetText function");
        let tweetTextAreaDiv = document.createElement("div");
        tweetTextAreaDiv.setAttribute("class", "tweetTextAreaDiv");
        let tweetTextArea = document.createElement("textarea");
        tweetTextArea.setAttribute("class", "tweetTextArea");
        tweetTextAreaDiv.appendChild(tweetTextArea);
        document.querySelector(".workingArea").appendChild(tweetTextAreaDiv);

        //Call drag function for tweetTextAreaDiv element
        dragTweetTextArea(tweetTextAreaDiv, document.querySelector(".myCanvas"));
        
        //What to do onblur event is fired
        tweetTextArea.onblur = function(){
            if(tweetTextArea.value === ""){
                tweetTextAreaDiv.remove();
            }else{
                console.log(tweetTextArea.value);
            }
        }
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
    }

    return {
        showFileInViewer,
        updateWidth,
        updateHeight,
        updateBackgroundColor,
        updateBackgroundShape,
        updateBackgroundShapeColor,
        updateTweetText
    };
}