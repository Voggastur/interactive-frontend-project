$(document).ready(function () {
    $(".button").click(function () {
        $(".buttoncontainer").slideUp("slow");
        $("#background").show();
        $("#score").html("Score " + score);
        setInterval(gameLoop, 30);
        setInterval(triggerBombs, 90);
        gameLoop();
    });
});

// window.location.assign(http://...game.html?score=3) ----- one way to remember score between rounds //

var score = 0;

var lasers = [];

var rockets = [];

var energy = [];

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

var spaceship = {
    top: 400,
    left: 100
};

function moveSpaceship() { // moveSpaceship() function is called every time we do a keydown in the next function, this function specifies the new top/left coordinates on screen
    $("#spaceship").css("top", spaceship.top + "px");
    $("#spaceship").css("left", spaceship.left + "px");
}

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

function pushRockets() {
    document.getElementById("rockets").innerHTML = ""; // An empty string is set to remove the image from the last loop, before the new paste is made
    for (var rocket = 0; rocket < rockets.length; rocket += 1) {
        document.getElementById(
            "rockets"
        ).innerHTML += `<div class='rocket' style='left:${rockets[rocket].left}px; 
                top:${rockets[rocket].top}px;'></div>`;
        // rockets are pasted onto HTML using handy template literals
    }
};

function moveRockets() {
    for (var rocket = 0; rocket < rockets.length; rocket += 1) {
        rockets[rocket].left += 12; // rocket speed is slower than lasers but have a larger hit zone due to increased width and height
    }
};

function pushLasers() {
    document.getElementById("lasers").innerHTML = ""; // An empty string is set to remove the image from the last loop, before the new paste
    for (var laser = 0; laser < lasers.length; laser += 1) {
        document.getElementById("lasers").innerHTML += `<div class='laser' style='left:${lasers[laser].left}px;top:${lasers[laser].top}px;'></div>`;
        // lasers are pasted the same way as rockets
    }
}

function moveLasers() {
    for (var laser = 0; laser < lasers.length; laser += 1) {
        lasers[laser].left += 18; // laser speed is set to move faster than the rockets
    }
}

function triggerBombs() {
    energy.push({
        top: aliens[alien].top,
        left: aliens[alien].left
    });
};


function pushBombs() { // this function handles the enemy weapons
    document.getElementById("energy").innerHTML = "";
    for (var energyBomb = 0; energyBomb < energy.length; energyBomb += 1) {
        document.getElementById("energy").innerHTML += `<div class='energybomb' style='left:${energy[energyBomb].left}px;top:${energy[energyBomb].top}px;'></div>`
        // alienBombs are pasted the same way as before
    };
};

function moveBombs() {
    for (var energyBomb = 0; energyBomb < energy.length; energyBomb += 1) {
        energy[energyBomb].left -= 12; // == Alien bomb speed
    }
};

function drawAliens() {
    document.getElementById("aliens").innerHTML = ""; // An empty string is set to remove the image from the last loop, before the new paste
    for (var alien = 0; alien < aliens.length; alien += 1) {
        // This for loop will repeat for as many aliens are in the array (8)
        document.getElementById("aliens").innerHTML += `<div class='alien' style='left:${aliens[alien].left}px; 
        top:${aliens[alien].top}px;'></div>`;
        // aliens are pasted directly to the HTML inside the id element #aliens which is styled as an overlay, using the position of the replaced alien
    }
};

var alienStep = - 30;
var alienDirection = 3;
const height = $("#background").height();
const width = $("#background").width();

function moveAliens() {
    for (var alien = 0; alien < aliens.length; alien += 1) {
        aliens[alien].top += alienDirection;
        if (aliens[alien].top > 750 || aliens[alien].top < 50) {
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
        for (var alien = 0; alien < aliens.length; alien += 1)
            aliens[alien].left += alienStep;
    };
};

function collisionDetection(score) {
    for (var alien = 0; alien < aliens.length; alien += 1) {
        for (var rocket = 0; rocket < rockets.length; rocket += 1) {
            if (rockets[rocket].top <= aliens[alien].top - 30 &&
                rockets[rocket].top >= aliens[alien].top - 60 &&
                rockets[rocket].left >= aliens[alien].left - 10 &&
                rockets[rocket].left <= aliens[alien].left + 10) {
                // Collision has occured, remove weapon and alien from game, increment score
                aliens.splice(alien, 1);
                rockets.splice(rocket, 1);
                score += 1;
                console.log("ROCKETHIT");
                return score; // I try to return score to my variable and show it but it's not working, score keeps showing 0
            };
        };
        for (var laser = 0; laser < lasers.length; laser += 1) {
            if (lasers[laser].top <= aliens[alien].top - 30 &&
                lasers[laser].top >= aliens[alien].top - 60 &&
                lasers[laser].left >= aliens[alien].left - 10 &&
                lasers[laser].left <= aliens[alien].left + 10) {
                // Collision occured, remove weapon and alien from game, increment score
                aliens.splice(alien, 1);
                lasers.splice(laser, 1);
                score += 1;
                console.log("LASERHIT");
                return score; // I try to return score to my variable and show it but it's not working, score keeps showing 0
            };
        };
    };
};

function gameOver() {
    if (score = 8) {
        $(".buttoncontainer").slideDown("slow");
        $("#background").show();
    }
};

function gameLoop() {
    moveRockets();
    pushRockets();
    moveLasers();
    pushLasers();
    moveBombs();
    pushBombs();
    moveAliens();
    drawAliens();
    collisionDetection();
};
