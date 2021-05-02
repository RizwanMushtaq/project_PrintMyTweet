//Function to be called when any propertyPanel is draged
function dragPropertyPanel() {

    //Varaible to store x and y position before drag and after drag event
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    
    //Elements as variables
    let dragMeAreaAll = document.querySelectorAll(".dragMeArea");
    let workingArea = document.querySelector(".workingArea");
    let propertyPanelAll = document.querySelectorAll(".propertyPanel")

    dragMeAreaAll.forEach(function(item){
        item.onmousedown = dragMouseDown;
    });

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

        propertyPanelAll.forEach(function(item){
            let style = getComputedStyle(item);
            if(style.display != "none"){
                let defaultOffsetLeft =  window.innerWidth-item.offsetWidth;
                let defaultOffsetTop =  workingArea.offsetHeight-item.offsetHeight;

                //set the element new position
    
                item.style.top = (item.offsetTop - pos2) + "px";
                item.style.left = (item.offsetLeft - pos1) + "px";

                if(item.offsetTop <= 0){
                    item.style.top = 0;
                }
                if(item.offsetLeft <= 0){
                    item.style.left = 0;
                }
                if(item.offsetLeft >= defaultOffsetLeft){
                    item.style.left =  defaultOffsetLeft +"px";
                }
                if(item.offsetTop >= defaultOffsetTop){
                    item.style.top =  defaultOffsetTop +"px";
                }
            }
        });    
    }

    function closeDragElement(e) {
        workingArea.onmouseup = null;
        workingArea.onmousemove = null;
    }

}