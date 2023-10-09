const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
let time = 0
const timeEl = document.querySelector('#time')
const timeList = document.querySelector('#time-list')
const board = document.querySelector('#board')
let score = 0;
const colors = ['#fe59c2', '#04d9ff', '#bc13fe', '#ffea19', '#c8ff00', '#7df9ff', '#39ff14', '#ff073a', '#fe019a', '#5555ff']

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if(time === 0){
        finishGame()
    }else{
        let current = --time
        if(current < 10){
        current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span><input type="button" class="again" value="Ещё раз" onClick="window.location.reload()"></h1>`
}
function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(15, 45)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor(colors)


    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `${colors[color]}`
    circle.style.shadow = `0 0 3px 4px ${colors[color]}`
    board.append(circle)
}


function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor(colors){
    return Math.floor(Math.random() * colors.length)
}
//againBtn.addEventListener('click', () => {
//    screens[1].classList.remove('up')
//})

function rld(){
    window.location.reload()
}