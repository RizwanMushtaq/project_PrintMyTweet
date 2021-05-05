class File {
    constructor(name, width, height, 
                backgroundColor, backgroundShape, backgroundShapeColor, 
                tweetText, textPositionX, textPositionY, textColor, fontSize, fontFamily,
                icon, iconSize, iconPositionX, iconPositionY) {
        
        this.name = name;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.backgroundShape = backgroundShape;
        this.backgroundShapeColor = backgroundShapeColor;
        this.tweetText = tweetText;
        this.textPositionX = textPositionX;
        this.textPositionY = textPositionY;
        this.textColor = textColor;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.icon = icon;
        this.iconSize = iconSize;
        this.iconPositionX = iconPositionX;
        this.iconPositionY = iconPositionY;
    }
    
    /*
    draw() {
        let myCanvas = document.querySelector(".myCanvas");
        let context = myCanvas.getContext("2d");
        myCanvas.width = this.width;
        myCanvas.height = this.height;        
        context.fillStyle = this.backgroundColor;
        context.fillRect(0,0,this.width,this.height);
    };
    */
}
