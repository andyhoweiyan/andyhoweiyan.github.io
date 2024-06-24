var eye_x1 = 0;
var eye_y1 = 70;
var eye_x2 = 60;
var eye_y2 = 30;
var eye_x3 = 60;
var eye_y3 = -30;
var eye_x4 = 0;
var eye_y4 = -70;
var eye_x5 = -60;
var eye_y5 = -30;
var eye_x6 = -60;
var eye_y6 = 30;



var diamond1_x1 = 0;
var diamond1_y1 = -500;
var diamond1_x2 = 330;
var diamond1_y2 = 0;
var diamond1_x3 = 0;
var diamond1_y3 = 500;
var diamond1_x4 = -330;
var diamond1_y4 = 0;



var diamond2_x1 = 0;
var diamond2_y1 = -165;
var diamond2_x2 = 290;
var diamond2_y2 = 0;
var diamond2_x3 = 0;
var diamond2_y3 = 165;
var diamond2_x4 = -290;
var diamond2_y4 = 0;

// Correct Shape Before rotate
// var diamond3_x1 = -500;
// var diamond3_y1 = -650;
// var diamond3_x2 = 0;
// var diamond3_y2 = 0;
// var diamond3_x3 = -500;
// var diamond3_y3 = 650;
// var diamond3_x4 = -1000;
// var diamond3_y4 = 0;

var diamond3_x1 = -1200;
var diamond3_y1 = -650;
var diamond3_x2 = -700;
var diamond3_y2 = 0;
var diamond3_x3 = -1200;
var diamond3_y3 = 650;
var diamond3_x4 = -1700;
var diamond3_y4 = 0;

  


// Correct Position for hexagon part 2
// var part2hexagon_x1 = 0;
// var part2hexagon_y1 = 0;
// var part2hexagon_x2 = 300;
// var part2hexagon_y2 = -400;
// var part2hexagon_x3 = 700;
// var part2hexagon_y3 = -400;
// var part2hexagon_x4 = 1000;
// var part2hexagon_y4 = 0;
// var part2hexagon_x5 = 700;
// var part2hexagon_y5 = 400;
// var part2hexagon_x6 = 300;
// var part2hexagon_y6 = 400;

var part2hexagon_x1 = 700;
var part2hexagon_y1 = 0;
var part2hexagon_x2 = 1000;
var part2hexagon_y2 = -400;
var part2hexagon_x3 = 1400;
var part2hexagon_y3 = -400;
var part2hexagon_x4 = 1700;
var part2hexagon_y4 = 0;
var part2hexagon_x5 = 1400;
var part2hexagon_y5 = 400;
var part2hexagon_x6 = 1000;
var part2hexagon_y6 = 400;


let rotationStep = 0.01; // Adjust this value for the desired rotation speed
let rotationProgress = 0;
let rotationSpeed = 1; // Adjust the rotation speed as needed


var movementstage = 0;


let animationDuration = 60;  // 60 frames for 1 second at 60 FPS

var diamondrotatex = 0;
var diamondrotatey = 0;


var count1 = 0;
var count2 = 0;

let img;

var angle1 = 0;
var angle2 = 0; // Initialize rotation angle
var angle10=0;
var angle3 = 0;
var angle11 = 0;

var movementdiamondx = 0 ;
var movementdiamondy = 0;function preload() {
  // Load the image file
  img = loadImage('path/to/your/image.jpg');
}

var anglemove = 0;


function setup() {
    createCanvas(1280, 720);
    background('#142467');
    angleMode(DEGREES);
    
}

function draw(){
    background('#142467'); // Clear the background each frame

    shape();
    animation();

    image(img, 0,0 ,100, 100); // Adjust the size as needed

    
    // shape2();
}

function preload() {
  img = loadImage('ciclogo.jpg'); // Load the image
}

function shape(){
    push ();
    translate (width/2 , height/ 2);

    
    // //Diamond1
    beginShape();
    fill('pink');
    noStroke();
    vertex(diamond1_x1, diamond1_y1); // Top vertex
    vertex(diamond1_x2, diamond1_y2); // Right vertex
    vertex(diamond1_x3, diamond1_y3); // Bottom vertex
    vertex(diamond1_x4, diamond1_y4); // Left vertex
    endShape(CLOSE);

    // //Diamond 2

    beginShape();
    fill('#7357D3');
    noStroke();
    vertex(diamond2_x1, diamond2_y1); // Top vertex
    vertex(diamond2_x2, diamond2_y2); // Right vertex
    vertex(diamond2_x3, diamond2_y3); // Bottom vertex
    vertex(diamond2_x4, diamond2_y4); // Left vertex
    endShape(CLOSE); 

    //Eye
    beginShape();
    fill('#0F1A46');
    noStroke();
    vertex(eye_x1,eye_y1);
    vertex(eye_x2,eye_y2);
    vertex(eye_x3,eye_y3);
    vertex(eye_x4,eye_y4);
    vertex(eye_x5,eye_y5);
    vertex(eye_x6,eye_y6);
    endShape(CLOSE);
    pop ();
}







function animation(){
    switch(movementstage){

        case 0:
            movementstage = 1;
            break;
            
        case 1:
          for (x = 0 ; x < 10 ; x ++){
          diamond1_x2 -= 3;
          diamond1_x4 += 3;

          eye_y6 -= 2;
          eye_y5 -= 2;
          eye_y4 -= 2;
          eye_y3 -= 2;
          eye_y2 -= 2;
          eye_y1 -= 2;


          diamond2_y1 += 1;
          diamond2_y3 -= 1;


          diamond2_y1 += 1;
          diamond2_y3 -= 1;


          
          }
        
          movementstage = 2;
            break;

          case 2:
            if (count1 < 10) {
            // Eye move right-bottom
            eye_x1 += 10;
            eye_y1 += 10;
            eye_x2 += 10;
            eye_y2 += 10;
            eye_x3 += 10;
            eye_y3 += 10;
            eye_x4 += 10;
            eye_y4 += 10;
            eye_y5 += 10;
            eye_x5 += 10;
            eye_x6 += 10;
            eye_y6 += 10;

            diamond1_y1 += 3;
            diamond1_y2 += 3;
            diamond1_y3 += 3;
            diamond1_y4 += 3;

            diamond2_y1 += 3;
            diamond2_y2 += 3;
            diamond2_y3 += 3;
            diamond2_y4 += 3;

            diamond2_x1 += 2;
            diamond2_x2 += 2;
            diamond2_x3 += 2;
            diamond2_x4 += 2;
  
            diamond1_x1 += 2;
            diamond1_x2 += 2;
            diamond1_x3 += 2;
            diamond1_x4 += 2;

            count1 += 2;
        } else if (count1 < 30){

          diamond2_y1 += 2;
          diamond2_y3 -= 2;
            count1 += 2;
        } else if (count1 < 40){
          diamond2_y1 -= 8;
          diamond2_y3 += 8;


          count1 += 4;
        } else if (count1 < 55){

          // eye move top-right
          eye_y1 -= 4;
          eye_x1 += 6;
          eye_y2 -= 4;
          eye_x2 += 6;
          eye_y3 -= 4;
          eye_x3 += 6;
          eye_y4 -= 4;
          eye_x4 += 6;
          eye_y5 -= 4;
          eye_x5 += 6;
          eye_y6 -= 4;
          eye_x6 += 6;

          diamond2_x1 += 2;
          diamond2_x2 += 2;
          diamond2_x3 += 2;
          diamond2_x4 += 2;

          diamond1_x1 += 2;
          diamond1_x2 += 2;
          diamond1_x3 += 2;
          diamond1_x4 += 2;

          count1 += 2;
        
        } else if (count1 < 65){

          diamond2_y1 += 1;
          diamond2_y3 -= 1;
          count1 += 1;
        } else if (count1 < 85){

          diamond2_y1 -= 4;
          diamond2_y3 += 4;
          count1 += 4;
        } else if (count1 < 100){
          // eye move top-left
          eye_x1 -= 13;
          eye_x2 -= 13;
          eye_x3 -= 13;
          eye_x4 -= 13;
          eye_x5 -= 13;
          eye_x6 -= 13;

          eye_y1 -= 4;
          eye_y2 -= 4;
          eye_y3 -= 4;
          eye_y4 -= 4;
          eye_y5 -= 4;
          eye_y6 -= 4;

          diamond2_y1 -= 2;
          diamond2_y2 -= 2;
          diamond2_y3 -= 2;
          diamond2_y4 -= 2;

          diamond2_x1 -= 4;
          diamond2_x2 -= 4;
          diamond2_x3 -= 4;
          diamond2_x4 -= 4;

          diamond1_y1 -= 2;
          diamond1_y2 -= 2;
          diamond1_y3 -= 2;
          diamond1_y4 -= 2;

          diamond1_x1 -= 4;
          diamond1_x2 -= 4;
          diamond1_x3 -= 4;
          diamond1_x4 -= 4;


          count1 += 1;
        } else if (count1 < 110){

          diamond2_y1 += 1;
          diamond2_y3 -= 1;
          count1 += 1;
        } else if (count1 < 130){

          diamond2_y1 -= 4;
          diamond2_y3 += 4;
          count1 += 4;
        } else if (count1 < 145){

          eye_y1 += 8;
          eye_y2 += 8;
          eye_y3 += 8;
          eye_y4 += 8;
          eye_y5 += 8;
          eye_y6 += 8;

          diamond2_y1 += 2;
          diamond2_y2 += 2;
          diamond2_y3 += 2;
          diamond2_y4 += 2;

          diamond1_y1 += 2;
          diamond1_y2 += 2;
          diamond1_y3 += 2;
          diamond1_y4 += 2;

          count1 += 1;
        } else if (count1 < 155){

          diamond2_y1 += 2;
          diamond2_y3 -= 2;
          count1 += 1;
        } else if (count1 < 175){
          // return back center
          eye_x1 += 10;
          eye_y1 -= 7;
          eye_x2 += 10;
          eye_y2 -= 7;
          eye_x3 += 10;
          eye_y3 -= 7;
          eye_x4 += 10;
          eye_y4 -= 7;
          eye_x5 += 10;
          eye_y5 -= 7;
          eye_x6 += 10;
          eye_y6 -= 7;   
          
          
          diamond2_y1 += 5;
          diamond2_y3 -= 5;

          


          count1 += 3;

        } else if (count1 < 190){

          diamond1_x2 += 1;
          diamond1_x4 -= 1;

          // Zoom
          diamond2_y1 -= 30;
          diamond2_x2 += 10;
          diamond2_y3 += 30;
          diamond2_x4 -= 10;

          diamond1_y1 -= 60;
          diamond1_x2 += 60;
          diamond1_y3 += 60;
          diamond1_x4 -= 60;

          count1 += 4;

        }  else  if (count1 < 210) {

          fill (255, 128, 0);
          // Diamond 1 shrink
          diamond1_y1 /=  4;
          diamond1_x2 /= 2;
          diamond1_y3 /= 4;
          diamond1_x4 /= 2;

          fill (255, 128, 0);
          // Diamond 2 shrink
          diamond2_y1 /= 2;
          diamond2_x2 /= 4;
          diamond2_y3 /= 2;
          diamond2_x4 /= 4;
      


          // Eye shrink
          fill (255, 128, 0);
          eye_y1 /= 2;
          eye_x2 /= 2;
          eye_y2 /= 2;
          eye_x3 /= 2;
          eye_y3 /= 2;
          eye_x4 /= 2;
          eye_y4 /= 2;
          eye_x5 /= 2;
          eye_y5 /= 2;
          eye_x6 /= 2;
          eye_y6 /= 2;

          count1 += 1;
        } else {
            movementstage = 3;
        } 
        break;
    
        case 3:
          
        if (diamond3_x2 < 0){
        push ();

        beginShape();
        translate (width/2 , height/2);
        fill('#7357D3');
        noStroke();
        vertex(part2hexagon_x1,part2hexagon_y1);
        vertex(part2hexagon_x2,part2hexagon_y2);
        vertex(part2hexagon_x3,part2hexagon_y3);
        vertex(part2hexagon_x4,part2hexagon_y4);
        vertex(part2hexagon_x5,part2hexagon_y5);
        vertex(part2hexagon_x6,part2hexagon_y6);
        endShape(CLOSE);   
    


        beginShape();
        fill('pink');
        noStroke();
        vertex(diamond3_x1, diamond3_y1); // Top vertex
        vertex(diamond3_x2, diamond3_y2); // Right vertex
        vertex(diamond3_x3, diamond3_y3); // Bottom vertex
        vertex(diamond3_x4, diamond3_y4); // Left vertex
        endShape(CLOSE);
        pop ();
    
    
        // Moving to center
        diamond3_x1 += 20;
        diamond3_x2 += 20;
        diamond3_x3 += 20;
        diamond3_x4 += 20;

        part2hexagon_x1 -= 20;
        part2hexagon_x2 -= 20;
        part2hexagon_x3 -= 20;
        part2hexagon_x4 -= 20;
        part2hexagon_x5 -= 20;
        part2hexagon_x6 -= 20;


        } else if (count2 < 160){
        
        // Rotate shape

        push ();
        beginShape();
        translate (width/2, height/2);
        rotate(angle2);
        fill('#7357D3');
        noStroke();
        vertex(part2hexagon_x1,part2hexagon_y1);
        vertex(part2hexagon_x2,part2hexagon_y2);
        vertex(part2hexagon_x3,part2hexagon_y3);
        vertex(part2hexagon_x4,part2hexagon_y4);
        vertex(part2hexagon_x5,part2hexagon_y5);
        vertex(part2hexagon_x6,part2hexagon_y6);
        endShape(CLOSE);  
        pop ();

        push ();
        translate(width/2 , height/2);
        rotate(angle1); 
        beginShape();
        fill('pink');
        noStroke();
        vertex(diamond3_x1, diamond3_y1); // Top vertex
        vertex(diamond3_x2, diamond3_y2); // Right vertex
        vertex(diamond3_x3, diamond3_y3); // Bottom vertex
        vertex(diamond3_x4, diamond3_y4); // Left vertex
        endShape(CLOSE); 
        pop ();



        // Smaller size when their are rotate
        diamond3_y1 += 20;
        diamond3_x1 += 16;
        diamond3_x3 += 16;
        diamond3_y3 -= 20;
        diamond3_x4 += 32;
        

        part2hexagon_x2 -= 9;
        part2hexagon_y2 += 11;
        part2hexagon_x3 -= 19;
        part2hexagon_y3 += 11;
        part2hexagon_x4 -= 28;
        part2hexagon_x5 -= 19;
        part2hexagon_y5 -= 11;
        part2hexagon_x6 -= 9;
        part2hexagon_y6 -= 11;
        

            
            angle2 += 8.2;
            angle1 += 6.7;
            
            count2 += 6;

         } else if (count2 < 300) {


          // center animation movement
          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('#7357D3');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();

          
          push ();
          beginShape();
          translate(width/2 , height/2);
          rotate(angle1);
          fill('pink');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();



            
            angle2 += 5;
            // angle1 = 5;
            count2 += 5;
    
        } else if (count2 < 450) {

          // First rotate diamond
            push ();
            beginShape();
            translate(width/2, height/2);
            rotate (angle2);
            fill('#7357D3');
            noStroke();
            vertex(part2hexagon_x1,part2hexagon_y1);
            vertex(part2hexagon_x2,part2hexagon_y2);
            vertex(part2hexagon_x3,part2hexagon_y3);
            vertex(part2hexagon_x4,part2hexagon_y4);
            vertex(part2hexagon_x5,part2hexagon_y5);
            vertex(part2hexagon_x6,part2hexagon_y6);
            endShape(CLOSE);   
            pop ();

            push ();
            beginShape();
            translate(width/2, height/2);
            rotate(angle1);
            translate(diamond3_x1, diamond3_y1);
            rotate(angle10);
            translate(-diamond3_x1, -diamond3_y1);
            fill('pink');
            noStroke();
            vertex(diamond3_x1, diamond3_y1); // Top vertex
            vertex(diamond3_x2, diamond3_y2); // Right vertex
            vertex(diamond3_x3, diamond3_y3); // Bottom vertex
            vertex(diamond3_x4, diamond3_y4); // Left vertex
            endShape(CLOSE); 
            pop ();


            if(angle10< 90){
                angle10 += 1 ;
                angle2 += 3;
                angle1 += 3;
            }
            count2 += 2.5; 
           
            text (diamond3_x3 ,100, 100);
            text(diamond3_y3 , 100, 120);

        } else if (count2 < 600){

          // Second rotate Diamond
          background('#7357D3');

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('pink');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate(angle1);

          translate(diamond3_x3 - 180, diamond3_y3 - 100);
          rotate(angle10);
          translate(-diamond3_x3, -diamond3_y3);
          fill('#142467');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();

          
          // angle10 += 1;

          // if(angle11< 90){
          //     angle11 += 1 ;
          //     angle2 += 2;
          //     angle1 += 2;
          // }

          if(angle10< 1000){
            angle10 += 1 ;
            angle2 += 3;
            angle1 += 3;
        }

        count2 += 2.6;      

        } else if (count2 < 1000) {
          
          // Third rotate Diamond
          background('#142467');

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('#7357D3');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate(angle1);

          translate(diamond3_x1 + 10, diamond3_y1 + 210);
          rotate(angle10);
          translate(-diamond3_x1, -diamond3_y1);
          fill('pink');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();


          text (diamond3_x1 ,100, 100);
          text(diamond3_y1 , 100, 120);
          
          if(angle10< 1000){
            angle10 += 1 ;
            angle2 += 3;
            angle1 += 3;
        }
        count2 += 6.7;
        } else if (count2 < 1600){

          // change long and  rotate Diamond
          background('#142467');

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('#7357D3');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();

          part2hexagon_x1 -= 75;
          part2hexagon_x2 -= 75;
          part2hexagon_y2 += 7;
          part2hexagon_x3 += 30;
          part2hexagon_y3 += 7;
          part2hexagon_x4 += 30;
          part2hexagon_x5 += 30;
          part2hexagon_y5 -= 7;
          part2hexagon_x6 -= 75;
          part2hexagon_y6 -= 5;
        

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate(angle1);
          translate(diamond3_x2 + 10, diamond3_y2 + 210);
          rotate(angle10);
          translate(-diamond3_x2, -diamond3_y2);
          fill('pink');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();
          

          // diamond3_x1 += 5;
          // diamond3_y3 -= 10;
          // diamond3_y1 -= 10;
          // diamond3_y2 +

          angle10 += 3;



          // angle1 += 1;
          angle2 += 2;
          count2 += 100;
          
        } else if (count2 < 2000){

          // Make hexagon spin 
          background('#142467');

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('#7357D3');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();
          


          push ();
          beginShape();
          translate(width/2, height/2);
          rotate(angle1);

          translate(diamond3_x1 + 10, diamond3_y1 + 210);
          rotate(angle10);
          translate(-diamond3_x1, -diamond3_y1);
          fill('pink');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();
          angle2 += 2;
          count2+= 4.5;


        } else if (count2 < 2500){

          background('#142467');

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('#7357D3');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();

          part2hexagon_x1 += 15;
          part2hexagon_x2 += 10;
          part2hexagon_x6 += 10;

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate(angle1);

          translate(diamond3_x1 + 10, diamond3_y1 + 210);
          rotate(angle10);
          translate(-diamond3_x1, -diamond3_y1);
          fill('pink');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();

          count2 += 100;
        } else if (count2 < 2500){

          background('#142467');

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate (angle2);
          fill('#7357D3');
          noStroke();
          vertex(part2hexagon_x1,part2hexagon_y1);
          vertex(part2hexagon_x2,part2hexagon_y2);
          vertex(part2hexagon_x3,part2hexagon_y3);
          vertex(part2hexagon_x4,part2hexagon_y4);
          vertex(part2hexagon_x5,part2hexagon_y5);
          vertex(part2hexagon_x6,part2hexagon_y6);
          endShape(CLOSE);   
          pop ();

          push ();
          beginShape();
          translate(width/2, height/2);
          rotate(angle1);

          translate(diamond3_x1 + 10, diamond3_y1 + 210);
          rotate(angle10);
          translate(-diamond3_x1, -diamond3_y1);
          fill('pink');
          noStroke();
          vertex(diamond3_x1, diamond3_y1); // Top vertex
          vertex(diamond3_x2, diamond3_y2); // Right vertex
          vertex(diamond3_x3, diamond3_y3); // Bottom vertex
          vertex(diamond3_x4, diamond3_y4); // Left vertex
          endShape(CLOSE); 
          pop ();
        } else {
          movementstage = 0;
        }
        
      
}

}