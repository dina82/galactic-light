let item = document.querySelector('canvas')
item.width = window.innerWidth
item.height = window.innerHeight
let canvas = item.getContext('2d')
let mouseClick = {}
class Circle {
    constructor(x, y, raduis, color) {
        this.x = x
        this.y = y
        this.raduis = raduis
        this.color = color

    }
    draw() {
        canvas.save()
        canvas.beginPath()
        canvas.arc(this.x, this.y, this.raduis, 0, Math.PI * 2)
        canvas.fillStyle = this.color
        canvas.shadowColor = this.color
        canvas.shadowBlur = 10
        canvas.fill()
        canvas.closePath()
        canvas.restore()
    }
    move() {

    }
}
let listOfCircles = []
let mouseDown = false
document.addEventListener('mouseup', function() { mouseDown = false })
document.addEventListener('mousedown', function() { mouseDown = true })
generateCircleObj()

function generateCircleObj() {
    let colors = ['#2185c5', '#7ecefd', '#fff6e5', '#ff7f66'];
    for (let i = 0; i < 1000; i++) {
        let x = item.width + 500
        let y = item.height + 500
        let circleColor = Math.floor(Math.random() * colors.length + 1)
        let widthX = Math.random() * x - x / 2
        let heightY = Math.random() * y - y / 2
        let raduis = Math.random() * 2
        let circle = new Circle(widthX, heightY, raduis, colors[circleColor]);
        listOfCircles.push(circle)
    }
}
let raduain = 0
let opacity = 1
animation()

function animation() {
    requestAnimationFrame(animation)
    canvas.fillRect(0, 0, innerWidth, innerHeight)
    canvas.fillStyle = `rgba(0,0,0,${opacity})`
    canvas.save()
    canvas.translate(item.width / 2, item.height / 2)
    canvas.rotate(raduain)
    listOfCircles.forEach(item => {
        item.draw()
    });
    canvas.restore()
    raduain += .005
    if (opacity >= .05 && mouseDown) {
        opacity -= .01
    } else {
        opacity += .01
    }
}

function solution(inputString) {
    let regX = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9])'
    let x = new RegExp(`^${regX}\\.${regX}\\.${regX}$`)
    console.log(x);
    console.log(x.test(inputString));


}

console.log(solution("64.233.161.00"));
// C:\Users\Dina\Documents\ArcGIS\AddIns