let maxx = 5
let stop = false

function loadOnReady () {
  maxx--

  if (maxx < 1) {
    return
  }

  if (document.readyState !== 'complete') {
    setTimeout(loadOnReady, 500)
  }
}

loadOnReady()

const alienStep = -30
const spaceshipSpeedTop = 20
const spaceshipSpeedLeft = 20
const laserSpeed = 15
const rocketSpeed = 9
const photonTorpedoSpeed = 9

var alienDirection = 3
var score = 0
var photonTorpedoIntervalID = 0
var gameIntervalID = 0

var lasers = []
var rockets = []
var photontorpedoes = []
var aliens = []

const startIntervals = () => {
  photonTorpedoIntervalID = setInterval(triggerBombs, 2000)
  gameIntervalID = setInterval(gameLoop, 20)
}

const clearIntervals = () => {
  clearInterval(photonTorpedoIntervalID)
  clearInterval(gameIntervalID)
}



const startGame = () => {
  var menu = document.querySelector('#menu')
  var canvas = document.querySelector('#playground')

  canvas.style.display = 'block'
  menu.style.display = 'none'

  populateAliens()
  startIntervals()
}

const populateAliens = () => {
  createAlienData(score)
  pushAliens()
}

let button = document.getElementById('button')
if (button) {
  button.addEventListener('click', startGame)
} else {
  console.log('Failed load, try reload')
}

const createAlienData = score => {
  for (var i = 0; i < 8; i++) {
    const padtop = 50 * i

    aliens.push({
      left: window.innerWidth - 100,
      top: 250 + padtop,
      height: 30,
      width: 30,
      id: i + score
    })
  }
}

var spaceship = {
  top: 400,
  left: 100,
  width: 30,
  height: 30
}

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowDown':
      if (spaceship.top <= 760) {
        spaceship.top += spaceshipSpeedTop
        moveSpaceship()
      }
      break
    case 'ArrowUp':
      if (spaceship.top >= 40) {
        spaceship.top -= spaceshipSpeedTop
        moveSpaceship()
      }
      break
    case 'ArrowLeft':
      if (spaceship.left >= 40) {
        spaceship.left -= spaceshipSpeedLeft
        moveSpaceship()
      }
      break
    case 'ArrowRight':
      if (spaceship.left <= 1100) {
        spaceship.left += spaceshipSpeedLeft
        moveSpaceship()
      }
      break
    case ' ':
      if (rockets.length < 2) {
        rockets.push({
          top: spaceship.top + 10,
          left: spaceship.left
        })
        pushRockets()
      }
      break
    case 'Control':
      if (lasers.length < 4) {
        lasers.push({
          top: spaceship.top - 10,
          left: spaceship.left
        })
        pushLasers()
      }
      break
    case 'p':
      if (stop === true) {
        startIntervals()
        stop = false
      } else {
        clearIntervals()
        stop = true
      }
    default:
      break
  }
})

function moveSpaceship () {
  let htmlSpaceship = document.querySelector('#spaceship')

  htmlSpaceship.style.top = spaceship.top + 'px'
  htmlSpaceship.style.left = spaceship.left + 'px'
}

function pushRockets () {
  let htmlRockets = document.getElementById('rockets')

  htmlRockets.innerHTML = ''

  for (var i = 0; i < rockets.length; ++i) {
    let curr = rockets[i]
    let left = curr.left
    let top = curr.top

    htmlRockets.innerHTML += `<div class='rocket' style='left:${left}px; top:${top}px;'></div>`
  }
}

function moveRockets () {
  rockets = rockets.filter(rocket => rocket.left < 2000)

  for (var i = 0; i < rockets.length; ++i) {
    rockets[i].left += rocketSpeed
  }
  pushRockets()
}

function pushLasers () {
  let htmlLasers = document.getElementById('lasers')
  htmlLasers.innerHTML = ''

  for (var i = 0; i < lasers.length; ++i) {
    let curr = lasers[i]
    let left = curr.left
    let top = curr.top

    htmlLasers.innerHTML += `<div class='laser' style='left:${left}px; top:${top}px;'></div>`
  }
}

function moveLasers () {
  lasers = lasers.filter(laser => laser.left < 2000)

  for (var i = 0; i < lasers.length; ++i) {
    lasers[i].left += laserSpeed
  }

  pushLasers()
}

function triggerBombs () {
  const length = aliens.length
  if (length === 0) {
    return
  }

  const random = Math.floor(Math.random() * length)
  const randomAlien = aliens[random]

  photontorpedoes.push({
    top: randomAlien.top,
    left: randomAlien.left
  })
}

function pushBombs () {
  var energybombs = document.getElementById('energy')
  energybombs.innerHTML = ''

  for (var i = 0; i < photontorpedoes.length; ++i) {
    let curr = photontorpedoes[i]
    let left = curr.left
    let top = curr.top

    energybombs.innerHTML += `<div class='energybomb' style='left:${left}px;
        top:${top}px;'></div>`
  }
}

function moveBombs () {
  photontorpedoes = photontorpedoes.filter(torp => torp.left > 50)

  for (var i = 0; i < photontorpedoes.length; ++i) {
    photontorpedoes[i].left -= photonTorpedoSpeed
  }

  pushBombs()
}

function pushAliens () {
  let htmlAliens = document.getElementById('aliens')
  htmlAliens.innerHTML = ''

  for (var i = 0; i < aliens.length; ++i) {
    let curr = aliens[i]
    let left = curr.left
    let top = curr.top

    htmlAliens.innerHTML += `<div class='alien alien${i}' style='left:${left}px; 
        top:${top}px;'></div>`
  }
}

function moveAliens () {
  const changeDirection = aliens.some(
    alien => alien.top > 775 || alien.top < 25
  )

  if (changeDirection) {
    alienDirection -= alienDirection * 2
  }

  aliens.map(alien => ({
    ...alien,
    top: (alien.top += alienDirection),
    left: (alien.left = changeDirection ? alien.left + alienStep : alien.left)
  }))

  pushAliens()
}

const destroyAdjacentAliens = (alienID, alienIndex) => {
  const destroyed = []

  if (aliens.some((a) => a.id === alienID- 1)) {
    destroyed.push(aliens[alienIndex - 1].id)
  }
  
  if (aliens.some((a) => a.id === alienID + 1)) {
    destroyed.push(aliens[alienIndex + 1].id)
  }

  return destroyed
}

function collisionDetection () {
  let xAliens = aliens.length
  let destroyedAliens = []

  for (var i = 0; i < aliens.length; ++i) {
    const alien = aliens[i]

    for (var rocket = 0; rocket < rockets.length; ++rocket) {
      if (
        rockets[rocket].top <= alien.top + 30 &&
        rockets[rocket].top >= alien.top &&
        rockets[rocket].left >= alien.left &&
        rockets[rocket].left <= alien.left + 30
      ) {
        alienExplode(alien)

        destroyedAliens.push(alien.id)
        destroyedAliens = destroyedAliens.concat(destroyAdjacentAliens(alien.id, i))

        rockets.splice(rocket, 1)
      }
    }

    for (var laser = 0; laser < lasers.length; ++laser) {
      if (
        lasers[laser].top <= alien.top + 30 &&
        lasers[laser].top >= alien.top &&
        lasers[laser].left >= alien.left &&
        lasers[laser].left <= alien.left + 30
      ) {
        alienExplode(alien)

        destroyedAliens.push(alien.id)
        lasers.splice(laser, 1)
      }
    }
  }

  aliens = aliens.filter(alien => !destroyedAliens.includes(alien.id))
  score += xAliens - aliens.length

  checkGameover()
}

const torpedoCollisionDetection = () =>
  photontorpedoes.some(
    torpedo =>
      torpedo.top <= spaceship.top + 15 &&
      torpedo.top >= spaceship.top - 15 &&
      torpedo.left >= spaceship.left - 15 &&
      torpedo.left <= spaceship.left + 15
  ) && checkGameover(true)

const alienExplode = alien => {
  let htmlExplosions = document.getElementById('explosions')
  htmlExplosions.innerHTML = `<div class='explosion' style='left:${alien.left}px;
  top:${alien.top}px;'></div>`
}

const playerExplode = () => {
  let htmlSpaceship = document.getElementById('spaceship')
  htmlSpaceship.style.display = 'none'

  let htmlExplosions = document.getElementById('explosions')
  htmlExplosions.innerHTML = `<div class='explosion' style='left:${spaceship.left}px;
  top:${spaceship.top}px;'></div>`
}

const updateScore = () => {
  var htmlScore = document.querySelector('#score')
  htmlScore.innerHTML = `<span>Score: ${score}</span>`
}

function checkGameover (torpedoCollision = false) {
  if (stop) {
    return
  }

  if (aliens.length == 0) {
    if (score >= 24) {
      stop = true
      setTimeout(
        () =>
          reloadAlert(
            `Congratulations! You saved Earth and destroyed ${score} aliens!`
          ),
        1000
      )
    } else {
      populateAliens(score)
    }
  } else if (aliens.left <= 50 || torpedoCollision) {
    stop = true
    playerExplode()
    // timeout to allow the full animation of epic player explosion to run
    setTimeout(
      () => reloadAlert(`You were destroyed! You destroyed ${score} aliens`),
      2000
    )
  }
}

function reloadAlert (message) {
  alert(message)
  location.reload()
}

function gameLoop () {
  moveRockets()
  moveLasers()
  moveBombs()
  moveAliens()
  collisionDetection()
  torpedoCollisionDetection()
  updateScore()
}
