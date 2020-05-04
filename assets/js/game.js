$(document).ready(function () {
  $(".button").click(function () {
    $(".buttoncontainer").slideUp("slow"); //slideUp game menu
    $("#background").show(); // Show the game background
    setInterval(removeBombs, 5000); // Removing bombs as they leave the game to avoid overload
    removeBombs();
    setInterval(triggerBombs, 5000); // Aliens drops bombs at this interval
    triggerBombs();
    setInterval(gameLoop, 50); // gameLoop function is repeated every 50 ms
    gameLoop();
  });
});

var lasers = []; // Spaceship weapons array
var rockets = []; // Spaceship weapons array
var energy = []; // Alien weapons array

var aliens = [
  { left: 1150, top: 250, height: 30, width: 30 }, // Aliens are placed at specific points
  { left: 1150, top: 300, height: 30, width: 30 },
  { left: 1150, top: 350, height: 30, width: 30 },
  { left: 1150, top: 400, height: 30, width: 30 },
  { left: 1150, top: 450, height: 30, width: 30 },
  { left: 1150, top: 500, height: 30, width: 30 },
  { left: 1150, top: 550, height: 30, width: 30 },
  { left: 1150, top: 600, height: 30, width: 30 },
];

const alienStep = -50; // As aliens touch the boundaries on the transversal path, they will take a step -50 closer to the player
var alienDirection = 3; // Direction of aliens will switch from either 3 or -3 as they touch the boundaries

const gameWidth = $("#background").width(); // Alien boundary movement

var spaceship = {
  // Spaceship object has defined top, left, width and height
  top: 400,
  left: 100,
  width: 30,
  height: 30,
};

$(document).keydown(function (e) {
  if (e.keyCode === 40 && spaceship.top <= 760) {
    // Limits to move outside of gamescreen which has a 1200x800 size
    // Move down
    spaceship.top += 10;
    moveSpaceship();
  } else if (e.keyCode === 38 && spaceship.top >= 40) {
    // Limit
    // Move up
    spaceship.top -= 10;
    moveSpaceship();
  } else if (e.keyCode === 37 && spaceship.left >= 40) {
    // Limit
    // Move left
    spaceship.left -= 5;
    moveSpaceship();
  } else if (e.keyCode === 39 && spaceship.left <= 1100) {
    // Limit
    // Move right
    spaceship.left += 5;
    moveSpaceship();
  } else if (e.keyCode === 32) {
    // Push rockets onto the game
    rockets.push({
      top: spaceship.top + 20,
      left: spaceship.left,
    });
    pushRockets();
  } else if (e.keyCode === 17) {
    // Push lasers onto the game
    lasers.push({
      top: spaceship.top - 10, // The lasercannon hangs under my left wing and the rocketpod under my right wing so the difference in .top coordinates are cosmetical
      left: spaceship.left,
    });
    pushLasers();
  }
});

function moveSpaceship() {
  // moveSpaceship() function is called every time we do a keydown in the former function
  $("#spaceship").css("top", spaceship.top + "px"); // New css style top/left coordinates are added to the element from the previous function
  $("#spaceship").css("left", spaceship.left + "px");
}

function pushRockets() {
  $("#rockets").html(""); // An empty string is set to remove the image from the last loop, before the new paste is made
  for (var rocket = 0; rocket < rockets.length; ++rocket) {
    // Iterate through the rocket array
    document.getElementById(
      "rockets"
    ).innerHTML += `<div class='rocket' style='left:${rockets[rocket].left}px; top:${rockets[rocket].top}px;'></div>`;
    // Rockets are pasted onto HTML using handy template literals, but I first wrote it in jQuery like this =
    // $("#rockets").html(`<div class='rocket' style='left:${rockets[rocket].left}px; top:${rockets[rocket].top}px;'></div>`);
    // However it won't push a new rocket if I shoot a second shot, instead it removes the old rocket halfway in flight and pushes a new singular rocket from the spaceship,
    // after some time testing I reverted to vanilla javascript instead so I can push multiple rockets on screen at the same time
  }
}

function moveRockets() {
  for (var rocket = 0; rocket < rockets.length; ++rocket) {
    // Iterate through the rocket array
    rockets[rocket].left += 11; // Rocket speed is slower than lasers but have a larger hit zone due to increased width and height,
    // as well as .splice(alien, 2) so they will always remove the 2 closest aliens
  }
}

function pushLasers() {
  $("#lasers").html(""); // This removes previous image from the previous iteration before the new paste in the next for loop, creating illusion of moving
  for (var laser = 0; laser < lasers.length; ++laser) {
    document.getElementById(
      "lasers"
    ).innerHTML += `<div class='laser' style='left:${lasers[laser].left}px; top:${lasers[laser].top}px;'></div>`;
    // lasers are pasted the same way as rockets
  }
}

function moveLasers() {
  for (var laser = 0; laser < lasers.length; ++laser) {
    lasers[laser].left += 18; // laser speed is set to move faster than the rockets
  }
}

function triggerBombs() {
  // This function is on a setinterval nearly every 5 seconds whereas a bomb is pushed from the aliens.top and aliens.left coordinates
  for (var alien = 0; alien < aliens.length; ++alien) {
    energy.push({
      top: aliens[3].top,
      left: aliens[3].left,
    });
  }
}

function removeBombs() {
  for (var alien = 0; alien < aliens.length; ++alien) {
    // Iterate through the alien array
    for (var energybomb = 0; energybomb < energy.length; ++energybomb) {
      // Iterate through the energy array, and remove object at setInterval nearly 5s after launch
      energy.splice(i, 1);
    }
  }
}

function pushBombs() {
  // This function pushes the aliens energybombs
  $("#energy").html(""); // This removes previous image from the previous iteration before the new paste is made
  for (var energybomb = 0; energybomb < energy.length; ++energybomb) {
    document.getElementById(
      "energy"
    ).innerHTML += `<div class='energybomb' style='left:${energy[energybomb].left}px;
        top:${energy[energybomb].top}px;'></div>`;
    // energybombs are placed similar to other weapons, but use another trigger on a setInterval at the top
  }
}

function moveBombs() {
  for (var energybomb = 0; energybomb < energy.length; ++energybomb) {
    energy[energybomb].left -= 12; // == Alien bomb goes in opposite direction toward the player
  }
}

function pushAliens() {
  $("#aliens").html(""); // An empty string is set to remove the image from the last loop, before the new paste
  for (var alien = 0; alien < aliens.length; ++alien) {
    // Iterate through the aliens.length
    document.getElementById(
      "aliens"
    ).innerHTML += `<div class='alien' style='left:${aliens[alien].left}px; 
        top:${aliens[alien].top}px;'></div>`;
    // Aliens are pasted onto HTML using handy template literals
  }
}

function moveAliens() {
  for (var alien = 0; alien < aliens.length; ++alien) {
    // Iterate through aliens array
    aliens[alien].top += alienDirection; // aliens.top get alienDirection(3) variable added
    if (aliens[alien].top > 775 || aliens[alien].top < 25) {
      // aliens switch directions as they reach the top(775) and bottom (25) of the gamewindow
      switch (alienDirection) {
        case 3: // Either direction -3
          alienDirection -= 6;
          alienAxis(); // The alienAxis() function triggers here, which steps the aliens closer to the player
          break;
        case -3: // Or direction 3
          alienDirection += 6;
          alienAxis(); // The alienAxis() triggers here as well
          break;
      }
    }
  }
  function alienAxis() {
    for (
      var alien = 0;
      alien < aliens.length;
      ++alien // iterate through aliens.length so the whole array will do the next command
    )
      aliens[alien].left += alienStep; // Aliens take one step towards the player upon reaching gamewindows boundaries
  }
}

function collisionDetection() {
  // This function detects collisions between aliens and weapons by iterating through them and crosschecking their .top and .left coordinates
  for (var alien = 0; alien < aliens.length; ++alien) {
    // Iterate through the aliens length..
    for (var rocket = 0; rocket < rockets.length; ++rocket) {
      // and iterate through the rockets length..
      if (
        rockets[rocket].top <= aliens[alien].top + 30 && // In order to get collision to work it just needs to include + 30 from the top/left corner because of the pixel height of the aliens
        rockets[rocket].top >= aliens[alien].top - 1 && // Otherwise the hitbox window would be 1 pixels wide
        rockets[rocket].left >= aliens[alien].left &&
        rockets[rocket].left <= aliens[alien].left + 30 // Similarly + 30 here because from the left side of the alien image, + 30 is the width of the alien
      ) {
        // Collision has occured, remove weapon and alien from game, check gameOver condition
        aliens.splice(alien, 2); // rockets have splash damage, represented by 2 spliced aliens. However at the point of this rocket splice it throws a console error sometimes(not always), sign of a race condition?
        rockets.splice(rocket, 1); // BUG Report = "Cant read property of undefined, on line 219"  which is in the laser collisions just below. However the game continues to work fine, with functional collisionDetection for the remainder of the aliens
        checkGameover(); // this function is exluded from the gameLoop(), and checks different gameOver conditions like (aliens.length == 0) and presents gameOver alert
      }
    }
    for (var laser = 0; laser < lasers.length; ++laser) {
      // this for loop is directly after the alien for loop and iterates through the lasers.length
      if (
        lasers[laser].top <= aliens[alien].top + 30 &&
        lasers[laser].top >= aliens[alien].top - 1 &&
        lasers[laser].left >= aliens[alien].left &&
        lasers[laser].left <= aliens[alien].left + 30
      ) {
        // Collision has occured, remove weapon and alien from game, check gameOver condition
        aliens.splice(alien, 1); // lasers don't have splash damage, remove only 1 alien from game
        lasers.splice(laser, 1);
        checkGameover(); // this function is called from the lasers collisionDetection as well
      }
    }
  }
}

function checkGameover() {
  // if condition == true: Show win game alert, slideDown menu and reload document; = to my knowledge at this point the only way to repopulate with aliens
  if (
    aliens.length == 0 || // If no aliens are left
    aliens.left <= 50 // or if the aliens reach the left side
  ) {
    alert("Congratulations! The aliens are destroyed and Earth is saved!"); // Alert on winning the game
    $(".buttoncontainer").slideDown(1000);
    setTimeout(reloadGame, 1000);
  }
}

function reloadGame() {
  location.reload(); // Reload page to repopulate with aliens
}

function gameLoop() {
  // gameLoop collects all the core functions and repeats on a setInterval
  moveRockets();
  pushRockets();
  moveLasers();
  pushLasers();
  moveBombs();
  pushBombs();
  moveAliens();
  pushAliens();
  collisionDetection();
}
