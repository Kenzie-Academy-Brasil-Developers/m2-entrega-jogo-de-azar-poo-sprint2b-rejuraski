import RPSPlayer from './models/RPSPlayer.js';
import RPSGame from './models/RPSGame.js';

const left = document.getElementById('left');
const right = document.getElementById('right');

const option = document.getElementById('option');

const btnPlay = document.getElementById('play');
const btnReset = document.getElementById('reset');

const message = document.getElementById('message');

btnPlay.addEventListener('click', function(e) {
    const p1 = new RPSPlayer();

    switch (option.value) {
        case 'R':
            left.src = 'src/assets/rock-left.png';
            left.className = 'rock';
            p1.selectRock();
            break;
        case 'P':
            left.src = 'src/assets/paper-left.png';
            left.className = 'paper';
            p1.selectPaper();
            break;
        case 'S':
            left.src = 'src/assets/scissor-left.png';
            left.className = 'scissor';
            p1.selectScissor();
            break;
    }

    const p2 = new RPSPlayer();
    p2.selectRandom();

    switch (p2.value) {
        case 'R':
            right.src = 'src/assets/rock-right.png';
            right.className = 'rock';
            p2.selectRock();
            break;
        case 'P':
            right.src = 'src/assets/paper-right.png';
            right.className = 'paper';
            p2.selectPaper();
            break;
        case 'S':
            right.src = 'src/assets/scissor-right.png';
            right.className = 'scissor';
            p2.selectScissor();
            break;
    }

    const winner = RPSGame.getWinner(p1.value, p2.value);
    const gameMessage = RPSGame.getMessage(winner);

    message.innerText = gameMessage;
});

btnReset.addEventListener('click', function(e) {
    left.src = 'src/assets/question.png';
    left.className = 'question';

    right.src = 'src/assets/question.png';
    right.className = 'question';

    message.innerText = '';
});