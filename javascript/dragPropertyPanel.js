//Make the Property panel graggable:
dragElement();

//Function to be called when Element is draged
function dragElement() {

    //Varaible to store x and y position before drag and after drag event
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    
    //Elements as variables
    let dragMeArea = document.querySelector(".dragMeArea");
    let workingArea = document.querySelector(".workingArea");
    let propertyPanel = document.querySelector(".propertyPanel")

    dragMeArea.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        //get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        //workingArea.onmouseup = closeDragElement;
        window.onmouseup = closeDragElement;
        workingArea.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let defaultOffsetLeft =  window.innerWidth-propertyPanel.offsetWidth;
        let defaultOffsetTop =  workingArea.offsetHeight-propertyPanel.offsetHeight;

        //set the ement new position
    
        propertyPanel.style.top = (propertyPanel.offsetTop - pos2) + "px";
        propertyPanel.style.left = (propertyPanel.offsetLeft - pos1) + "px";

        if(propertyPanel.offsetTop <= 0){
            propertyPanel.style.top = 0;
        }
        if(propertyPanel.offsetLeft <= 0){
            propertyPanel.style.left = 0;
        }
        if(propertyPanel.offsetLeft >= defaultOffsetLeft){
            propertyPanel.style.left =  defaultOffsetLeft +"px";
        }
        if(propertyPanel.offsetTop >= defaultOffsetTop){
            propertyPanel.style.top =  defaultOffsetTop +"px";
        }
        
    }

    function closeDragElement(e) {
        workingArea.onmouseup = null;
        workingArea.onmousemove = null;
    }

}