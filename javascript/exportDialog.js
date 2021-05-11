//This function will show newFileDialogBox to user
function showExportDialog(){
    document.querySelector(".whiteBackgroundExportDialogBox").style.display = "block";
    document.querySelector(".exportDialogBox").style.display = "block";

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    document.querySelector(".exportDialogBox").style.left = (winWidth/2)- 480/2 + "px";
    document.querySelector(".exportDialogBox").style.top = "150px";
}
//This function will hide newFileDialogBox
function hideExportDialog(){
    document.querySelector(".whiteBackgroundExportDialogBox").style.display = "none";
    document.querySelector(".exportDialogBox").style.display = "none";
}