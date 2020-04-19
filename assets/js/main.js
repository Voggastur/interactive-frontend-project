$("document").ready(function() {
    $(".button").click(function(){
        $(".buttoncontainer").slideUp("slow");
    });

const background = document.getElementById("background");
const width = background.innerWidth;
const height = background.innerHeight;

var spaceship = {
  top: 750,
  left: 550,
};

var explosion = document.getElementById("explosion");

var aliens = [];

var lasers = [];

var rockets = [];

var shockwave = [];


document.onkeydown = function (e) {
  console.log(e.keyCode);

  if (e.keyCode === 37) {
    spaceship.left = spaceship.left - 10;
    moveSpaceship();
  } else if (e.keyCode === 39) {
    spaceship.left = spaceship.left + 10;
    moveSpaceship();
  }
};

function moveSpaceship() {
  document.getElementById("spaceship").style.top = spaceship.top + "px";
  document.getElementById("spaceship").style.left = spaceship.left + "px";
}

});