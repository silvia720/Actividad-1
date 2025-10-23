let borrarfondo = true //limpia cada frame
let usarcolorA = true // alterna colores

function setup() {
  createCanvas(550, 550);
  background(0, 22, 255); //color
  noStroke() // sense borde
}

function draw() {
  if(borrarfondo) background(0, 22, 255)
  //elegir color simple A/B
  if(usarcolorA){
    fill(0)
  } else{
    fill(150)
  }
  ellipse(mouseX, mouseY, 30, 30);
}

function mousePressed(){
  usarcolorA = !usarcolorA
}

function keyPressed(){
  if(key === 'b' || key === 'B'){
    borrarfondo = !borrarfondo
  }
}