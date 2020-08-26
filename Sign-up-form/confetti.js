let canvas = document.getElementById('confetti');

canvas.width = 500;
canvas.height = 500;

let ctx = canvas.getContext('2d');
let pieces = [];
function update () {
    setTimeout(update, 1)
}

function draw() {

}

update();
draw();

