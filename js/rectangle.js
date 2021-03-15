let Rectangle = function(length, width){
    this.length=length;
    this.width=width;
    
    this.getArea=function(){
        return this.length*this.width;
    }
    this.getPerimeter=function(){
        return (this.length+this.width)*2;
    }
    this.getDisplay=function(){
        for(let i=1;i<=this.width;i++){
            for(let j=1;j<=this.length;j++){
                document.write("*");
            }
            document.write("<br>");
        }
    }
}