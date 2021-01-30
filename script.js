'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCount = 20;
let highscore = 0
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.number').textContent = ' ?';

//When clicking the check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';

        //when the number is correct and the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        scoreCount--;
        document.querySelector('.score').textContent = scoreCount;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;
        if (scoreCount > highscore) {
            highscore = scoreCount;
            document.querySelector('.highscore').textContent = highscore
        }


        //When the number is to High    
    } else if (guess > secretNumber) {
        if (scoreCount > 1) {
            document.querySelector('.message').textContent = '📈 Too High!';
            scoreCount--;
            document.querySelector('.score').textContent = scoreCount;
        } else {
            document.querySelector('.message').textContent = '💥 Game Over!';
            document.querySelector('.score').textContent = 0
        }
        //When the number is too low
    } else if (guess < secretNumber) {
        if (scoreCount > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            scoreCount--;
            document.querySelector('.score').textContent = scoreCount;
        } else {
            document.querySelector('.message').textContent = '💥 Game Over!';
            document.querySelector('.score').textContent = 0
        }
    }

});

//When again button is pushed --- Game Restarts
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreCount = 20
    document.querySelector('.score').textContent = scoreCount;

    document.querySelector('.message').textContent = ('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = '?';

});
