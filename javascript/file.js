class File {
    constructor(width, height, backgroundColor, backgroundShape, backgroundShapeColor, textColor, pickTweet, twitterIcon) {
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.backgroundShape = backgroundShape;
        this.backgroundShapeColor = backgroundShapeColor;
        this.textColor = textColor;
        this.pickTweet = pickTweet;
        this.twitterIcon = twitterIcon;
    }
    
    draw() {
        console.log("In draw function of class");
        let myCanvas = document.querySelector(".myCanvas");
        let context = myCanvas.getContext("2d");        
        context.fillStyle = this.backgroundColor;
        context.fillRect(0,0,this.width,this.height);
    };
}
