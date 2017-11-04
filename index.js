console.log('aaaaaaaaaaaaaa');
var timeStart = null;
var snake = null;
document.onmousedown = function(e) {
    // var screenX = e.screenX;
    // var screenY = e.screenY;
    // snake.style.position = 'relative';
    // snake.style.top = '100px';
    // snake.style.left = '100px';
    // console.log(e);
    var snake = document.getElementById('snake');
    snake.style.position = 'relative';
    timeStart = setInterval(move('left', 10),1000);
};

function move(action, actionArrow) {
    if (action === 'up') {
        snake.style.top = `${String(Number(snake.style.top.replace('px', '')) + actionArrow)}px`;
    } else  {
        snake.style.left = `${String(Number(snake.style.left.replace('px', '')) + actionArrow)}px`;
    }
}

document.onkeydown = function(e) {
    clearInterval(timeStart);
    switch (e.keyCode) {
        // left
        case 37:
            action = 'left';
            actionArrow = -10;
            break;
        // up
        case 38:
            action = 'up';
            actionArrow = -10;
            break;
        // right
        case 39:
            action = 'left';
            actionArrow = 10;
            break;
        // down
        case 40:
            action = 'up';
            actionArrow = 10;
            break;
        default:
            break;
    }
    timeStart = setInterval(move(action, actionArrow),1000);
};