$(document).ready(function () {
    $(".button").click(function () {
        $(".buttoncontainer").slideUp("slow");
        $("#background").show();
        setInterval(removeBombs, 4750);
        removeBombs();
        setInterval(triggerBombs, 4750);
        triggerBombs();
        setInterval(gameLoop, 50);
        gameLoop();
    });
});

// window.location.assign(http://...game.html?score=3) ----- one way to remember score between rounds //

var score = 0;
var scoreUpdate = 0;

var lasers = [];
var maxLasers = 5;

var rockets = [];
const maxRockets = 5;

var energy = [];
const maxEnergy = 3;

var aliens = [
    { left: 1150, top: 250, height: 30, width: 30 },
    { left: 1150, top: 300, height: 30, width: 30 },
    { left: 1150, top: 350, height: 30, width: 30 },
    { left: 1150, top: 400, height: 30, width: 30 },
    { left: 1150, top: 450, height: 30, width: 30 },
    { left: 1150, top: 500, height: 30, width: 30 },
    { left: 1150, top: 550, height: 30, width: 30 },
    { left: 1150, top: 600, height: 30, width: 30 }
];

var alienStep = - 50; // As aliens touch the boundaries on the transversal path, they will take a step -50 closer to the player
var alienDirection = 3; // Direction of aliens will switch from either +3 or -3 as they touch the boundaries

const height = $("#background").height();
const width = $("#background").width();

var spaceship = {
    top: 400,
    left: 100,
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    lasers: [],
    rockets: []
};

$(document).keydown(function (e) {
    console.log(e.keyCode);

    if (e.keyCode === 40) {
        spaceship.top += 10;
        console.log("DOWN");
        moveSpaceship();
    } else if (e.keyCode === 38) {
        spaceship.top -= 10;
        console.log("UP");
        moveSpaceship();
    } else if (e.keyCode === 37) {
        spaceship.left -= 5;
        console.log("LEFT");
        moveSpaceship();
    } else if (e.keyCode === 39) {
        spaceship.left += 5;
        console.log("RIGHT");
        moveSpaceship();
    } else if (e.keyCode === 32) {
        rockets.push({
            top: spaceship.top - 50,
            left: spaceship.left
        });
        console.log("FIRE ROCKET");
        pushRockets();
    } else if (e.keyCode === 17) {
        lasers.push({
            top: spaceship.top - 75,
            left: spaceship.left
        });
        console.log("FIRE LASER");
        pushLasers();
    }
});

function moveSpaceship() { // moveSpaceship() function is called every time we do a keydown in the former function, this function specifies the new top/left coordinates on screen
    $("#spaceship").css("top", spaceship.top + "px");
    $("#spaceship").css("left", spaceship.left + "px");
}

function pushRockets() {
    $("#rockets").html(""); // An empty string is set to remove the image from the last loop, before the new paste is made
    for (var rocket = 0; rocket < rockets.length; rocket += 1) {
        document.getElementById("rockets").innerHTML += `<div class='rocket' style='left:${rockets[rocket].left}px; top:${rockets[rocket].top}px;'></div>`;
        // rockets are pasted onto HTML using handy template literals
    };
};

function moveRockets() {
    for (var rocket = 0; rocket < rockets.length; rocket += 1) {
        rockets[rocket].left += 11; // rocket speed is slower than lasers but have a bit larger hit zone due to increased width and height, 
        // as well as (.splice alien, 2) so they will always remove 2 aliens
    };
};

function pushLasers() {
    $("#lasers").html(""); // This removes previous image from the previous iteration before the new paste in the next for loop, creating illusion of moving
    for (var laser = 0; laser < lasers.length; laser += 1) {
        document.getElementById("lasers").innerHTML += `<div class='laser' style='left:${lasers[laser].left}px; top:${lasers[laser].top}px;'></div>`;
        // lasers are pasted the same way as rockets
    };
};

function moveLasers() {
    for (var laser = 0; laser < lasers.length; laser += 1) {
        lasers[laser].left += 18; // laser speed is set to move faster than the rockets
        if (lasers.left > width || lasers.left < width) {
            lasers.splice(laser, 1);
        }
    };
};

function triggerBombs() {
    for (var alien = 0; alien < aliens.length; alien += 1) {
        energy.push({
            top: aliens[0].top,
            left: aliens[0].left
        });
        console.log("FIRE BOMBS");
    };
};

function removeBombs() {
    for (var alien = 0; alien < aliens.length; alien += 1) {
        for (var i = 0; i < energy.length; i += 1) {
            energy.splice(i, 1);
        };
    };
};

function pushBombs() { // this function handles the enemy weapons
    $("#energy").html(""); // this removes previous image from the previous iteration before the new paste in the next for loop
    for (var energybomb = 0; energybomb < energy.length; energybomb += 1) {
        document.getElementById("energy").innerHTML += `<div class='energybomb' style='left:${energy[energybomb].left}px;
        top:${energy[energybomb].top}px;'></div>`;
        // energyBombs are placed similarly as other weapons, but use another trigger on a setInterval(1500) at the top
    };
};

function moveBombs() {
    for (var energybomb = 0; energybomb < energy.length; energybomb += 1) {
        energy[energybomb].left -= 12; // == Alien bomb speed opposite direction
    };
};

function pushAliens() {
    $("#aliens").html(""); // An empty string is set to remove the image from the last loop, before the new paste
    for (var alien = 0; alien < aliens.length; ++alien) {
        // This for loop will repeat for as many aliens there are, in every interval
        document.getElementById("aliens").innerHTML += `<div class='alien' style='left:${aliens[alien].left}px; 
        top:${aliens[alien].top}px;'></div>`;
        // aliens are pasted directly to the HTML inside the id element #aliens which is styled as an overlay, using the position of the replaced alien
    };
};

function moveAliens() {
    for (var alien = 0; alien < aliens.length; ++alien) {
        aliens[alien].top += alienDirection;
        if (aliens[alien].top > 775 || aliens[alien].top < 25) {
            switch (alienDirection) {
                case 3:
                    alienDirection -= 6;
                    alienAxis();
                    break;
                case -3:
                    alienDirection += 6;
                    alienAxis();
                    break;
            };
        };
    };
    function alienAxis() {
        for (var alien = 0; alien < aliens.length; ++alien)
            aliens[alien].left += alienStep;
    };
};

function collisionDetection() {
    for (var alien = 0; alien < aliens.length; ++alien) {
        for (var rocket = 0; rocket < rockets.length; ++rocket) { // A lot of time testing was needed before I guessed at these arbitrary numbers which gives a good representative hitbox of the aliens
            if (rockets[rocket].top <= aliens[alien].top - 30 && // for some reason I think everything is offset by a few pixels, because normally it would just include + 30 to include the pixelsize
                rockets[rocket].top >= aliens[alien].top - 60 && // of the aliens
                rockets[rocket].left >= aliens[alien].left &&
                rockets[rocket].left <= aliens[alien].left + 30) {
                // Collision has occured, remove weapon and alien from game, increment score, check gameOver condition
                aliens.splice(alien, 2); // rockets have splash damage, represented by this .splice(alien, 2);
                rockets.splice(rocket, 1);
                console.log("ROCKETHIT");
                checkGameover();
                break;
            };
        };
        for (var laser = 0; laser < lasers.length; ++laser) { // I used the same as for rockets
            if (lasers[laser].top <= aliens[alien].top - 30 &&
                lasers[laser].top >= aliens[alien].top - 60 &&
                lasers[laser].left >= aliens[alien].left &&
                lasers[laser].left <= aliens[alien].left + 30) {
                // Collision has occured, remove weapon and alien from game, increment score, check gameOver condition
                aliens.splice(alien, 1);
                lasers.splice(laser, 1);
                console.log("LASERHIT");
                checkGameover();
                break;
            };
        };
    };
};

if (aliens.length -= 1) {
    var score = score + 1;
    localStorage.setItem("score", score); // Save score to localStorage
    console.log(parseInt(score));
};

function checkGameover() { // Evaluate score, slideDown the gameMenu, clearinterval the gameLoop, location.reload(); = my only way of repopulating with aliens at the moment
    var energybomb = {
        left: document.getElementsByClassName("energybomb").left,
        top: document.getElementsByClassName("energybomb").top
    }
    if (aliens.length == 0 || // This primary condition is usually why the game ends, no aliens left
        aliens.left >= width ||
        energybomb.top <= spaceship.top - 30 && // Trying to add collisionDetection for my own spaceship but its not working
        energybomb.top >= spaceship.top - 60 &&
        energybomb.left >= spaceship.left &&
        energybomb.left <= spaceship.left + 30) {
        $(".buttoncontainer").slideDown("slow"); // slideDown window upon mission complete
        var score = localStorage.getItem("score"); // Save score in sessionStorage
        $(".score").html("Score: " + score); // Show score in class .score h2 element
        location.reload(); // reload page to repopulate with aliens
        clearInterval(gameLoop);
    };
};

function gameLoop() {
    moveRockets();
    pushRockets();
    moveLasers();
    pushLasers();
    moveBombs();
    pushBombs();
    moveAliens();
    pushAliens();
    collisionDetection();
};
