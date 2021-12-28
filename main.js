class Box{
    constructor(x,y,w,h,vx,vy){
        this.x = x;
         this.y = y;
          this.w = w;
          this.h = h;
          this.vx = vx;
          this.vy = vy;
    }
    show(){
        rect(this.x,this.y,this.w,this.h)
    }
    move(){
        this.x = this.x + this.vx;
        this.y = this.y - this.vy;
    }
}
class student{
    constructor(name,age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.grade);
    }
}
var box;
var s1;

function setup(){
    createCanvas(400,400);
    box = new Box(100,100,20,20,2,2);
    s1 = new student("sam",12,9);
    s1.display();
}

function draw(){
   background(220);
   box.show();
   box.move(); 
}