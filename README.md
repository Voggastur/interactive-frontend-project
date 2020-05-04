# Alien Invaders

[Deployed website](https://voggastur.github.io/interactive-frontend-project/)
[Project Repository](https://github.com/Voggastur/interactive-frontend-project)

The aim of this website is to present my Javascript skills as a front end developer.


## Table of Contents

1. [UX](#UX)

    I. [User stories](#UX2)
    
    II. [Wireframes](#UX3)

    II. [Development Progress](#UX4)
    
2. [Features](#Features)
3. [Features for the future](#Features2)
4. [Technologies used](#Technologies)
5. [Testing](#Testing)

    I. [Testing Functionality](#Testing2)
    
    II. [Testing user stories](#Testing3)
    
6. [Deployment](#Deployment)

    I. [How to clone this project locally](#Deployment2)

7. [Credits](#Credits)


## 1. UX <a name="UX"></a>

The primary target audience are collaborators/employers in the game industry who wish to see my knowledge in Javascript/jQuery in particular.


#### I. User Stories: <a name="UX2"></a>

1. As an employer who recieved a link to Johans website, I want to see the game and test it to judge his skills, so that I can assess if he's eligible for a position.

2. As an assessor I will judge the website on the totality of looks, documentation, testing, and functions among other things. I will take a particular look at the Javascript portion of the page, so that I can assess his score.

3. As a collaborator I want to see if Johan can be of use in a project, so I want to test Johans game. Additionally I want to scroll through the game.js to eye through the written functions for the game and see Johans familiarity with the language.



#### II. Wireframes: <a name="UX3"></a>

* [Wireframes.pdf](assets/wireframes/wireframe.pdf)


1. I changed the direction of the game to scroll horizontal instead of vertical since I wanted to stand out from other examples I found on the internet.

2. The spaceship can move in 4 directions, up, right, down and left. Even though only sideways movement is vital to the game, I thought it could enhance the game experience to move up closer to the aliens.
The key to this knowledge was to learn that every button has its own keyCode and so I looked up needed keys by console.log(e.keyCode), and lastly how to put them to use.

3. At first I thought I could just move the objects via a for loop, but I had to include a function to push every object onto the HTML via template literals,
then another function adds looped movement

4. The alien movement matches the wireframes overall, and moves sideways until it bounces into walls and drops a closer to the player and changes sideway direction to the other side

5. The overlay(startmenu) matches the wireframe overall as well, but I added the game title as a larger h1 above the Start Game button instead of the title inside the button, to make more use of empty estate



#### III. Development Process: <a name="UX4"></a>

* I struggled initially to understand how to begin writing Javascript on my own. So I began researching until I settled for a simpler type of space shooter game. I watched many videos and tried followed along as they coded nonsense before my tiring eyes, and it didn't make much sense at all. 
However small increments of experience came ticking in as I tried modifying the code myself, and then brief tides of progress instilled a great feeling of pride, and so I was on my way to my own project.

* Finding a control scheme gave a nice inspiration boost, adding new triggers became easy, however to make functional loops for pushed HTML is harder.

* Every object in my project needs 2 functions, a HTML push and a movement increase. Movement increase was easy, however the pushLaser was difficult because of the template literals used.

* The moveAliens function took some time to learn how to move the whole array with the for loop, and not just single aliens. An if switch statement was later added to change directions as they touch the game boundaries.

* I use only for loops and if conditions in this project, and one switch. For loops are needed to iterate through array-objects, and if conditions are essential for every condition in the game.
* I didn't use other loops because I don't really understand the usage of the other loops when and while yet.

* I learned so much during the development of this project, I had to read up on W3C articles everyday and I saw many youtube tutorials on similar projects.

* collisionDetection is my most worked on function, and it detects rockets against aliens, and lasers against aliens, then splices the array-objects and calls the checkGameover() function.
* For a while earlier in my development everything was offset by a few pixels so I had to test my way to find arbitrary numbers to match the alien hitboxes, this took me more time than I want to admit..
* however later the offset bug was fixed and now it just includes the + 30 to detect the alien size.



## 2. Features <a name="Features"></a>

* The game is a Space Invaders type of game with moving pictures and a slow scrolling background, 
* The player is tasked with destroying 8 Aliens with his spaceship equipped with advanced weaponry while avoiding Alien energybombs, and he must do so before the aliens reach the left side of the screen.

* The spaceship is controllable with arrows Up, Right, Down and Left, as well as Space for a Rocket weapon and Ctrl for a Laser Cannon.

* The two weapons have different properties, the rocket image is slightly wider and higher and so has a higher chance to trigger the collisionDetection function,
* and to imitate splash damage the rocket splices 2 alien out of the aliens array-object, however the laser cannon particles travel faster across the screen and is easier to hit the aliens with.

* CSS animated scifi button with on("click") function to initialize the game via jQuery

* Start game menu shows the game title and a start game button

* As all aliens are destroyed, an alert is made to notify the player of the Win Game, and a location.reload() repopulates the game with aliens



## 3. Features for the future <a name="Features2"></a>

* Score

* More Levels

* Better alien movement, and hitdetection for enemy weaponry

* During my research I came upon some other examples of similar games, and specifically another control scheme where something like .keydown(true) or .keydown(false) is used to determine when to move and not move the spaceship,
* I believe this is why these games have a superior sense of control of the playerobject, however it was deemed to complicated for me to include before submit date.

* Better winGame content, like a new weapon for the next level, and a nice styled HTML overlay rewarding the player who reached the winGame condition



## 4. Technologies used <a name="Technologies"></a>

* HTML5

* CSS3

* Javascript

* Github Deployment

* Gitpod IDE

* W3C Validator

* Autoprefixer

* Free Formatter



## 5. Testing <a name="Testing"></a>

#### I. Testing Functionality <a name="Testing2"></a>

1. I have done manual testing throughout the development process, because I didn't know how to implement test-driven-development effectively with jasmine.
2. However I have added a Jasmine test suite near the end of my development process to do (18) checks against my functions, objects, numbers and variables.
3. I have run the HTML through [W3C HTML Validator](https://validator.w3.org) to check for errors in the code, none observed.
4. I have run the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to check for errors in the code, none observed.
5. I formatted the HTML through the use of [Free Formatter](www.freeformatter.com/html-formatter.html)
6. I added vendor prefixes to my css through the help of [Autoprefixer](https://autoprefixer.github.io/)



#### II. User stories testing <a name="Testing3"></a>

1. As an employer I go to see Johans game determined to see his skills, if he's really as good as he postulated in his CV.

    * I click the button to start the game, and try to shoot all the aliens.

2. As a collaborator I check out Johans game to evaluate his skills, to measure his eligibility for inclusion in my development team.

    * Click button to start the game, I will also go to google developer mode to check the console, and the source of the material.

3. As an assessor I go to Johans website determined to check every nook and cranny.

    * Play the game and shoot all the aliens.
    * Go through the javascript document to see if Johan follows coding conventions and uses proper semantics.



## 6. Deployment <a name="Deployment"></a>

This project was developed in Gitpod.
The project has been deployed to Github Pages - [Deployed Website](https://voggastur.github.io/interactive-frontend-project/)
The repository for this website can be found at this GitHub link: [Interactive Frontend Repository](https://github.com/Voggastur/interactive-frontend-project)

The following process was used to deploy the project:
1. Log into GitHub.
2. Select Voggastur/user-centric-frontend-project
3. Select settings
4. Scroll down to Github Pages
5. Select Source: master branch
6. Retrieve the link to the deployed website

### How to clone this project locally <a name="Deployment2"></a>
​
To clone this project from GitHub:
1. At the top of this repository, click the green button **Clone or download**.
2. In the Clone with HTTPs section, copy the clone URL for the repository. 
3. Open your favourite terminal (cmd, powershell, bash, git bash, etc.)
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type `git clone`, and then paste the URL you copied in Step 2.
```console
git clone https://github.com/Voggastur/interactive-frontend-project
```
6. Press Enter. Your local clone will be created.



## 7. Credits <a name="Credits"></a>


* My main attribution is to 2 guys at Coding Dojo with a video on youtube where they wrote easily digestible code while discussing what was going on. [Coding Dojo - Space Invaders](https://www.youtube.com/watch?v=XmqAPQsc1n4&t=1745s). 
* This is basically when I started writing myself.

* My Start Game button should be attributed to one youtube video where I searched for css neon button, [Udemy Course - Neon Button](https://www.youtube.com/watch?v=ex7jGbyFgpA)

* I followed along in writing some other short games as well, another space invaders game where I understood nothing, an asteroids game with some concepts better explained, and a paddlegame which really explained canvas properties well, but these were using HTML canvas with code that looked strange for someone new to javascript,
* however now at this late stage in my development I understand more of the canvas properties and I realize it might be more suited for a moving parts game, as well as being an API as one of my project requirements.

* I used jQuery as much as I could, it has very handy shortcuts, specifically event handlers or for DOM targetting, but sometimes I don't know if there's any equivalent to regular javascript

* Some of the pictures used were taken from flaticon.com, namely the #spaceship and .alien.

* The energy, laser and rocket pictures were found in various picture archives via Google Search

* Scrolling background image was taken from NASAs website, but converted to a minimum size better suited for my website project

* The letters J and K for my favicon.ico were found on google picture search, upon finding them I combined them and made a new .png for the navbar-brand and later converted it for my favicon.ico.

