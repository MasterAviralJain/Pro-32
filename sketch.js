const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
 var api= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
  var apiJSON=await api.json();
    console.log(apiJSON);
     var datetime=apiJSON.datetime;
   console.log(datetime);
    // write code slice the datetime
var time = datetime.slice (11,13);
  console.log(time);

    // add conditions to change the background images from sunrise to sunset
  if (time>=06&&time<=07){
    bg="sunrise1.png"
}if (time>=07&&time<=08){
    bg="sunrise2.png"
}if (time>=08&&time<=10){
    bg="sunrise3.png"
}if (time>=10&&time<=11){
    bg="sunrise4.png"
}if (time>=11&&time<=14){
    bg="sunrise5.png"
}if (time>=14&&time<=17){
    bg="sunrise6.png"
}if (time>=17&&time<=18){
    bg="sunset7.png"
}if (time>=18&&time<=19){
    bg="sunset8.png"
}if (time>=19&&time<=20){
    bg="sunset9.png"
}if (time>=20&&time<=21){
    bg="sunset10.png"
}if (time>=21&&time<=24){
    bg="sunset11.png"
}if (time>=1&&time<=06){
    bg="sunset12.png"
}

    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg);

}

