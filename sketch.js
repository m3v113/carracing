var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var batmobile, ferrari, lamborghini, bugatti;
var car1, car2, car3, car4, ground, track;
var cars;

function preload() {

  car1 = loadImage("images/car1.png");
  car2 = loadImage("images/car2.png");
  car3 = loadImage("images/car3.png");
  car4 = loadImage("images/car4.png");

  ground = loadImage("images/ground.png");

  track = loadImage("images/track.jpg");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth - 20,displayHeight - 20);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if (playerCount === 4) {
    game.updateState(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }

  if (gameState === 2) {
    game.end();
  }

}

