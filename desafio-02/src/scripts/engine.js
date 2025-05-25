const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
  },
  value: {
    timerId: null,
    countDownTimerId: setInterval(countDown, 1000),
    score: 0,
    hitPosition: 0,
    result: 0,
    timeLeft: 60,
  },
};

function playSound(){
    let audio = new Audio("./src/audios/hit.m4a")
    audio.play();
}

function countDown(){
    state.value.timeLeft--;
    state.view.timeLeft.textContent = state.value.timeLeft;


    if(state.value.timeLeft <= 0){
        clearInterval(state.value.countDownTimerId);
        clearInterval(state.value.timerId);
        alert("Game Over!!! Your final score is " + state.value.result)
    }
}




function randomSqaure() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSqaure = state.view.squares[randomNumber];
  randomSqaure.classList.add("enemy");
  state.value.hitPosition = randomSqaure.id;
}

function moveEnemy() {
  state.value.timerId = setInterval(randomSqaure, 1000);
}

function addListenersHitBox() {
  state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", ()=>{
                if(square.id === state.value.hitPosition){
                    state.value.result++;
                    state.view.score.textContent = state.value.result;
                    state.value.hitPosition = null;
                    playSound();

                }
        })
  });
}

function main() {
  moveEnemy();
  addListenersHitBox();
}

main();
