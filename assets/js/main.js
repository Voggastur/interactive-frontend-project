$(document).ready(function () {
    $(".button").click(function () {
        $(".buttoncontainer").slideUp("slow");
        $("#background").show();
        $("#score").html("Score:" + scoreCount);
        setInterval(gameLoop, 100);
        gameLoop();
    });
});

var spaceship = {
    top: 400,
    left: 100,
};

var lasers = [];

var aliens = [
    { left: 1000, top: 250 },
    { left: 1000, top: 300 },
    { left: 1000, top: 350 },
    { left: 1000, top: 400 },
    { left: 1000, top: 450 },
    { left: 1000, top: 500 },
    { left: 1000, top: 550 },
    { left: 1000, top: 600 },
    { left: 1000, top: 650 },
    { left: 1000, top: 700 }
];

function moveSpaceship() {
    $("#spaceship").css("top", spaceship.top + "px");
    $("#spaceship").css("left", spaceship.left + "px");
}

$(document).keydown(function (e) {
    console.log(e.keyCode);

    if (e.keyCode === 40) {
        spaceship.top = spaceship.top + 10;
        console.log("DOWN");
        moveSpaceship();
    } else if (e.keyCode === 38) {
        spaceship.top = spaceship.top - 10;
        console.log("UP");
        moveSpaceship();
    } else if (e.keyCode === 17) {
        lasers.push({
            top: spaceship.top - 70,
            left: spaceship.left
        });
        console.log("FIRE LASER");
        drawLasers();
    }
});

function drawLasers() {
    document.getElementById("lasers").innerHTML = ""; // An empty string is set to remove the image from the last loop, before the new paste
    for (var laser = 0; laser < lasers.length; laser += 1) {
        document.getElementById(
            "lasers"
        ).innerHTML += `<div class='laser' style='left:${lasers[laser].left}px;
    top:${lasers[laser].top}px;'></div>`;
        // lasers are pasted the same way
    }
}

function moveLasers() {
    for (var laser = 0; laser < lasers.length; laser += 1) {
        lasers[laser].left = lasers[laser].left + 14; // laser speed is set to move faster than the rockets
    }
}

var alienStep = -25;
var alienDirection = 2;
const height = $("#background").height();
const width = $("#background").width();

function drawAliens() {
    document.getElementById("aliens").innerHTML = ""; // An empty string is set to remove the image from the last loop, before the new paste
    for (var alien = 0; alien < aliens.length; alien += 1) {
        // This for loop will draw as many aliens as there are in the array
        document.getElementById("aliens").innerHTML += `<div class='alien' style='left:${aliens[alien].left}px; 
        top:${aliens[alien].top}px;'></div>`;
        // aliens are pasted directly to the HTML inside the id element #aliens which is styled as an overlay, using the position of
    }
};

function moveAliens() {
    for (var alien = 0; alien < aliens.length; alien += 1) {
        aliens[alien].top += alienDirection;
        if (aliens[alien].top > 800 || aliens[alien].top < 0) {
            switch (alienDirection) {
                case 2:
                    alienDirection += -4;
                    alienAxis();
                    break;
                case -2:
                    alienDirection += 4;
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

function gameLoop() {
    moveLasers();
    drawLasers();
    drawAliens();
};
