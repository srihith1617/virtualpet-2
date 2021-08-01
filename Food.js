
class food {
    constructor(foodS) {
        this.foodStock = 0
        this.lastFed;
        this.image = loadImage("images/Milk.png")
      }
    getfoodStock(data) {
      return this.foodStock.on("value", function(data) {foodStock = data.val()})  
    }
    updatefoodStock(foodStock) {
      this.foodStock = foodStock
        }
    deductFood() {
    if (this.foodStock>=0) {
      this.foodStock=-1;
    }
    }
    getFeedTime(lastFed) {
    this.lastFed = lastFed
    }
    display() {
     var x=80
     var y=100
      imageMode(CENTER);
      image(this.image,730,220,70,70);
      if (this.foodStock!=0) {
        for (var i = 0;i<this.foodStock;i++) {
          if (i%10===0) {
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30
        }
      }
    }
}
