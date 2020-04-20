$("document").ready(function () {
  $(".button").click(function () {
    $(".buttoncontainer").slideUp("slow");
    $("#background").show();
    setInterval(gameLoop, 50);
    gameLoop();
  });

  const background = document.getElementById("background");
  const height = background.innerHeight;
  const width = background.innerwidth;

  var spaceship = {
    top: 400,
    left: 100,
  };

  var lasers = [];

  var aliens = [];

  const fireFrequency = 2;

  document.onkeydown = function (e) {
    console.log(e.keyCode);

    if (e.keyCode === 37) {
      spaceship.left = spaceship.left - 10;
      moveSpaceship();
    } else if (e.keyCode === 39) {
      spaceship.left = spaceship.left + 10;
      moveSpaceship();
    } else if (e.keyCode === 40) {
      spaceship.top = spaceship.top + 10;
      console.log("DOWN");
      moveSpaceship();
    } else if (e.keyCode === 38) {
      spaceship.top = spaceship.top - 10;
      console.log("UP");
      moveSpaceship();
    } else if (e.keyCode === 17) {
      lasers.push({
        top: spaceship.top,
        left: spaceship.left
      });
      console.log("FIRE LASER");
      drawLasers();
    }
  };

  function moveSpaceship() {
    document.getElementById("spaceship").style.top = spaceship.top + "px";
    document.getElementById("spaceship").style.left = spaceship.left + "px";
  }

  function drawLasers() {
    document.getElementById("lasers").innerHTML = ""; // An empty string to put moving laser images
    for (var laser = 0; laser < lasers.length; laser += 1) {
      document.getElementById(
        "lasers"
      ).innerHTML += `<div class='laser' style='left:${lasers[laser].left}px;
    top:${lasers[laser].top}px;'></div>`;
    lasers[laser].left = lasers[laser].left + 14; // lasers are pasted with template literals and speed is set to 14;
    }
    for (var laser = 0; laser < lasers.length; laser += 1) {
      
    }
  }

  function gameLoop() {
    drawLasers();
  }

});
