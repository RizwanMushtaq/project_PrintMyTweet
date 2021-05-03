function updateOfFile(){
    let myFile = new File("MyTweetPrint","600","200","#F1F5FE","none","#8AB3FF","#007bff","Hi",false);
    let oldWidth = myFile.width;
    let oldHeight = myFile.height;
    console.log(myFile);

    showFileInViewer = () => {
        hideNewFileDialog();
        myFile.draw();
    }
    updateWidth = function() {
        myFile.width = document.querySelector(".canvasWidth").value;
        redrawCanvas();
        oldWidth = myFile.width;
    }
    updateHeight = () => {
        myFile.height = document.querySelector(".canvasHeight").value;
        redrawCanvas();
        oldHeight = myFile.height;
    }
    updateBackgroundColor = function(){
        console.log("In update bg Color");
        myFile.backgroundColor = document.querySelector(".backgroundColor").value;
        redrawCanvas();
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
    }

    return {
        showFileInViewer,
        updateWidth,
        updateHeight,
        updateBackgroundColor
    };
}