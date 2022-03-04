export default class RPSGame {
    static getWinner(value1, value2) {
        if (
            (value1 === 'R' && value2 === 'S') ||
            (value1 === 'S' && value2 === 'P') ||
            (value1 === 'P' && value2 === 'R')
        ) {
            return value1;
        } else if (
            (value2 === 'R' && value1 === 'S') ||
            (value2 === 'S' && value1 === 'P') ||
            (value2 === 'P' && value1 === 'R')
        ) {
            return value2;
        } else {
            return '';
        }
    }

    static getMessage(winner) {
        if (winner === 'R') {
            return 'Pedra ganhou!';
        } else if (winner === 'P') {
            return 'Papel ganhou!'
        } else if (winner === 'S') {
            return 'Tesoura ganhou!';
        } else {
            return 'Empatou!';
        }
    }
}