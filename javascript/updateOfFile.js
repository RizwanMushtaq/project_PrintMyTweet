function updateOfFile(){
    let myFile = new File(500,250,"#F1F5FE","none","#8AB3FF","#007bff","Hi",false);
    console.log(myFile);

    showFileInViewer = function(){
        hideNewFileDialog();
        myFile.draw();
    }
    updateBackgroundColor = function(){
        console.log("In update bg Color");
    }

    return {
        showFileInViewer,
        updateBackgroundColor
    };
}