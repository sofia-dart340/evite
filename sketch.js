let ellipseSize = 50;
let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(400, 400);
    
    let canvas = createCanvas(400,400);
    canvas.parent("bat");
}

function draw() {
  background(123, 141, 177);
  
  fill(21, 31, 49);
  ellipse(0, 0, ellipseSize);
  
  ellipseSize = ellipseSize + 5;
  
  noStroke();
  fill(195, 119, 0);
  ellipse(200, 200, 300, 300);
  
  fill(206, 147, 0);
  ellipse(185, 175, 200, 200);
  
  fill(0, 0, 0);
  ellipse(200, 184, 71, 71);
  triangle(160, 196, 235, 196, 200, 296);
  triangle(168, 170, 165, 136, 192, 149);
  triangle(207, 149, 233, 136, 233, 170);
  
  beginShape();
  vertex(173, 220);
  bezierVertex(151, 215, 140, 226, 131, 232);
  bezierVertex(121, 212, 100, 206, 69, 224);
  bezierVertex(68, 195, 47, 186, 11, 190);
  bezierVertex(32, 155, 70, 144, 123, 151);
  bezierVertex(133, 168, 147, 180, 166, 182)
  endShape();
  
  beginShape();
  vertex(226, 220);
  bezierVertex(248, 215, 259, 226, 268, 242);
  bezierVertex(278, 215, 299, 206, 330, 224);
  bezierVertex(331, 195, 352, 186, 388, 190);
  bezierVertex(367, 155, 329, 144, 275, 151);
  bezierVertex(266, 168, 252, 180, 233, 182)
  endShape();
}