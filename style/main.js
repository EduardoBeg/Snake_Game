let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y:8 * box
}
let direction = "right";
let food_a = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let food_b = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBG() {
    context.fillStyle = "white";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "gray";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood_a(){
    context.fillStyle = "red";
    context.fillRect(food_a.x, food_a.y, box, box);
}
function drawFood_b(){
    context.fillStyle = "orange";
    context.fillRect(food_b.x, food_b.y, box, box);
}

document.addEventListener("keydown", update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}


function startGame(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0; 
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box; 
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
             clearInterval(game);
             alert('Game Over :(')
        }
    }

    createBG();
    createSnake();
    drawFood_a();
    drawFood_b();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    var a = new Boolean(true);
    var b = new Boolean(true);

    if(snakeX != food_a.x || snakeY != food_a.y){  
        a = false;
    }
    else{
        food_a.x = Math.floor(Math.random() * 15 + 1) * box;
        food_a.y = Math.floor(Math.random() * 15 + 1) * box;
    }  
    
    if(snakeX != food_b.x || snakeY != food_b.y){
        b = false;
    }
    else{
        food_b.x = Math.floor(Math.random() * 15 + 1) * box;
        food_b.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    
    if (a == true) snake.push();
    if (b == true) snake.push();
    if (a == false && b == false) snake.pop();

    let newHead = {
    x:snakeX,
    y:snakeY
    }

    snake.unshift(newHead);

}

let game = setInterval(startGame, 100);
