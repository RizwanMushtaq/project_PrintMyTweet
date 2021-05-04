//Function to be called when Tweet text Area is draged
function dragTweetTextArea(dragMeArea, myCanvas) {

    console.log("In dragTweetTextArea function");
    //Varaible to store x and y position before drag and after drag event
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    
    dragMeArea.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        //get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
       
        let target = e.target;
        if(target.className == "tweetTextArea"){
            //do nothing
        }else{
            e.preventDefault();
            window.onmouseup = closeDragElement;
            myCanvas.onmousemove = elementDrag;
        }
    }

    function elementDrag(e) {
        e.preventDefault();
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        //set the element new position
        dragMeArea.style.top = (dragMeArea.offsetTop - pos2) + "px";
        dragMeArea.style.left = (dragMeArea.offsetLeft - pos1) + "px";

        if(dragMeArea.offsetTop <= 0){
            dragMeArea.style.top = 0;
        }
        if(dragMeArea.offsetLeft <= 0){
            dragMeArea.style.left = 0;
        }
        if((myCanvas.width - dragMeArea.offsetWidth) <= dragMeArea.offsetLeft){
            dragMeArea.style.left = (myCanvas.width - dragMeArea.offsetWidth) + "px";
        }
        if((myCanvas.height - dragMeArea.offsetHeight) <= dragMeArea.offsetTop){
            dragMeArea.style.top = (myCanvas.height - dragMeArea.offsetHeight) + "px";
        }
    }

    function closeDragElement(e) {
        myCanvas.onmouseup = null;
        myCanvas.onmousemove = null;
    }

}