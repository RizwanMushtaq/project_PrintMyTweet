class File {
    constructor(name, width, height, backgroundColor, backgroundShape, backgroundShapeColor, textColor, pickTweet, twitterIcon) {
        this.name = name;
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
        let myCanvas = document.querySelector(".myCanvas");
        let context = myCanvas.getContext("2d");
        myCanvas.width = this.width;
        myCanvas.height = this.height;        
        context.fillStyle = this.backgroundColor;
        context.fillRect(0,0,this.width,this.height);
    };
}
