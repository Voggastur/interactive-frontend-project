# Alien Invaders

[Deployed website](https://voggastur.github.io/interactive-frontend-project/)
[Project Repository](https://github.com/Voggastur/interactive-frontend-project)

The aim of this website is to present my javascript skills as a front end developer.


## Table of Contents

1. [UX](#UX)

    I. [User stories](#UX2)
    
    II. [Wireframes](#UX3)

    II. [Development Progress](#UX4)
    
2. [Features](#Features)
3. [Features for the future](#Features2)
4. [Technologies used](#Technologies)
5. [Testing](#Testing)

    I. [Testing links functioning properly, and responsiveness for different screen sizes.](#Testing2)
    
    II. [Testing user stories](#Testing3)
    
6. [Deployment](#Deployment)
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

2. The spaceship can move in 4 directions, up, right, down and left. Even though only sideways movement is vital to the game core, I thought it could enhance the game experience when I learned how to add new keytriggers.
The key to this knowledge for me was when I learned that every button has its own keyCode and I looked up console.log(e.keyCode), and lastly how to put them to use.

3. The boxed layout of the wireframes was deemed to be impractical for the amount of content. So I settled for making sections of one longer page with the content designated for Portfolio, About and Contact.

4. The About Section grew in scope into a different Skills, Profile and Interests sections, which made the information relevant to my User Stories since it only showcased my interests originally.

5. I decided to not use background images because of difficulty implementing strong contrasts/opacity and a fitting color scheme, I settled for using linear-gradients with mild colors to provide a smooth change between sections.



#### III. Development Process: <a name="UX4"></a>

* I struggled initially to understand how to begin writing Javascript on my own. So I began researching until I settled for a simpler type of space shooter game. I watched many videos and tried followed along as they coded nonsense before my tiring eyes, and it didn't make much sense at all. 
However small increments of experience came ticking in as I tried modifying the code myself, and then brief tides of progress that instilled a great feeling of pride, and so i was on my way to make my own laser cannon!

* The moveAliens function was modified to increase speed, and an if statement bounces the aliens back when they touch my boundaries, as well as push them closer to the player by 50pixels per wallbounce

* Lorem ipsum dolor

* I learned so much during the development of this project, I had to put everything I learnt so far into use, and I read up on a ton of W3C articles and youtube tutorials on countless topics.

* I used iframes initially for my showcases, and while it looked nice for youtube videos I didn't like the result when iframing another webpage, specifically an e-commerce webpages with many small buy buttons in the frame.
I didn't want one iframe and two images either, I wanted consistency so I was prepared to settle for images at this stage. I didn't know if you must have javascript for a carousel to work, but I found out that you don't through the instruction page https://w3bits.com/css-image-slider/ . So I imported it and try to attribute it correctly here and in the HTML through comments.
I had to do some minor changes to the buttons and sizes for it to work properly.

* I included Javascript initially only for the use of the collapsable navbar, but later I thought, why don't I just import a Bootstrap Component Javascript Carousel?
But by then my CSS slideshow worked as intended, even if the Javascript ones looked nicer so I let it out.
Also I am reluctant about using Javascript components since I don't understand it yet. As a puritanic afterthought it feels good to use pure css though, even though I still have the javascript navbar.



## 2. Features <a name="Features"></a>

* The spaceship, aliens, rocket image and a few more was found on the flaticon.com website, other pictures were found by google picture searches.

* The spaceship is controllable with arrows Up, Right, Down and Left, as well as a Torpedo weapon on Space and a Laser Cannon on Ctrl.

* The two weapons have different properties, the torpedo image is slightly wider and higher and so has a higher chance to trigger the collisionDetection function,
to imitate splash damage the torpedo splices 2 alien out of the aliens array-object, however the laser cannon particles travel much faster and is easier to hit with.

* CSS animated scifi button with on("click") function to initialize the game with jQuery .slideUp

* Slideshows with three buttons for switching to different pictures of my projects, the projects have direct links in the adjacent project descriptions.

* Bootstrap cards for displaying items of specialty in my field of programming

* Bootstrap progressbars display the top 5 rudimentary skills of my programming

* Devicons by konpa imported by link into head for listing languages of profession in my profile section

* I put general information about 2 games in the portfolio section and I made up information about my involvement in these games development, as well as for the swedish e-commerce website Ginza.
Linked buttons are put in place under the text for each of these 3 portfolio-items official webpages.

* Progressbars were taken from Bootstrap for a graphical showcase of my abilities

## 3. Features for the future <a name="Features2"></a>

* Score

* More Levels

* Better alien movement, and enemy lasers

* During my research I came upon some good looking examples, and some which had a much better control of the spaceship, as my skills grow I want to implement this as well



## 4. Technologies used <a name="Technologies"></a>

* HTML5

* CSS3

* Github Deployment

* Gitpod IDE

* W3C Validator

* Autoprefixer

* Free Formatter



## 5. Testing <a name="Testing"></a>

#### I. Testing Functionality <a name="Testing2"></a>

1. I have done manual testing throughout the development process, because I didn't understand how to implement test-driven-development effectively with jasmine in realtime.
2. However I have added a Jasmine test suite at the end of my development process to do typeof checks against my functions, objects, numbers and variables.
3. I have run the HTML through [W3C HTML Validator](https://validator.w3.org) to check for errors in the code, none such observed.
4. I have run the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to check for errors in the code, none such observed.
5. I formatted the HTML through the use of [Free Formatter](www.freeformatter.com/html-formatter.html)
6. I added vendor prefixes to my css through the help of https://autoprefixer.github.io/



#### II. User stories testing <a name="Testing3"></a>

1. As an employer I go to see Johans game determined to see his skills, if he's really as good as he postulated in his CV.

    * I click the button to start the game, 

2. As a collaborator I check out Johans game to evaluate his skills, to measure his eligibility for inclusion in my development team.

    * Click button to start the game, ideally I will go back and forth into google developer mode to see the console, and javascript working behind the scenes.

3. As an assessor I go to Johans website determined to check every nook and cranny among which..

    * Click each link once to see it goes where it should.
    * Test responsiveness of the webpage and see realigned columns and that no content isn't clipped off.
    * Fill in an improper email in the form and click send to see that an error message pops up.



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

#### How to run this project locally
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


* I used "Devicons" icons from https://konpa.github.io/devicon/ in my profile section.

* I used "Fontawesome" icons in nav, landing, profile, about and footer sections

* Hover.css by Ian Lunn was used for all my hover effects

* I downloaded the pen and paper picture for matching my form element from downloadclipart.net

* I downloaded the "man sitting in chair in front of desk" for my landing screen from downloadclipart.net

* Bootstrap templates "Carousel" and "Blog" was used to start up my work, however the connection is more abstract at this stage and not much likeness can be observed. For startup inspiration it gave me a jumpstart though.

* The slideshows were imported from https://w3bits.com/css-image-slider/ . Changes were made to accomodate the needs of my website, with properly scaled pictures, changed buttons, label attributes and input types.

* The letters J and K for my favicon.ico were found on google picture search, upon finding them I combined them and made a new .png for the navbar-brand and later converted it for my favicon.ico.

* My Skills Items link to corresponding wikipedia articles

* Wikipedia article links were added for each of the 8 different skill items in my skillset section
