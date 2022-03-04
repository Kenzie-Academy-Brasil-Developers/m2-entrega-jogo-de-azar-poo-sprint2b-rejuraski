export default class RPSPlayer {
    constructor() {
        this.value = '';
    }

    selectRock() {
        this.value = 'R';
    }

    selectPaper() {
        this.value = 'P';
    }

    selectScissor() {
        this.value = 'S';
    }

    selectRandom() {
        const n = Math.floor(Math.random() * 9) + 1;

        if (n >= 1 && n <= 3) {
            this.value = 'R';
        } else if (n >= 4 && n <= 6) {
            this.value = 'P';
        } else {
            this.value = 'S';
        }
    }
}