x = 0;
y = 0;

draw_apple = "";

 screen_width=0;
 screen_height=0;
 speak_data="";
 to_number="";

function preload(){
  draw_apple = loadImage('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
recognition.onresult = function(event) {
  
 console.log(event); 

 content = event.results[0][0].transcript;
 console.log(content);

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content); 

 console.log(to_number);
 
 if(Number.isInteger(to_number)){
  draw_apple="set";
  document.getElementById("status").innerHTML = "Started drawing Apple " ;

}
else{
  document.getElementById("status").innerHTML = "The speech has not been recognized: "; 
}
}



function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(screen_width,screen_height-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for (let i = 0; i <= to_number; i++) {
    x=Math.floor(Math.random()*700);
    y=Math.floor(Math.random()*400);
    image(draw_apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = "Apples drawn are "+to_number;
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    speak_data="";

}
