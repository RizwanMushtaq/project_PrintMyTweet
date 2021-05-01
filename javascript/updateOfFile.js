function updateOfFile(){
    let myFile = new File(500,250,"#F1F5FE","none","#8AB3FF","#007bff","Hi",false);
    console.log(myFile);

    drawFile = function(){
        console.log("In draw File function");
        hideNewFileDialog();
        let welcomePanel = document.querySelector(".welcomePanel");
        welcomePanel.style.display = "none";
        let appViewer = document.querySelector(".appViewer");
        appViewer.style.display = "grid";
        myFile.draw();
    }
    updateBackgroundColor = function(){
        console.log("In update bg Color");
    }

    return {
        drawFile,
        updateBackgroundColor
    };
}