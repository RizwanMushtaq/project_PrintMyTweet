function hideAlreadyOpenedPropertyPanel(){
    const propertyPanelAll = document.querySelectorAll(".propertyPanel");
    propertyPanelAll.forEach(function(item){
        let style = getComputedStyle(item);
        if(style.display != "none"){
            item.style.top = "0";
            item.style.left = (window.innerWidth-item.offsetWidth) + "px";
            item.style.display = "none";
        }
    });
}