const { createApp } = Vue

createApp({
    data() {
        return {
            pole: [],
            combinations: [
                [1,2,3], [4,5,6], [7,8,9],
                [1,4,7], [2,5,8], [3,6,9],
                [1,5,9], [3,5,7],
            ],
            reload: false,
        }
    },
    methods: {
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        trySetCircleToCell(p1, p2, undef, symbol) {
            if(this.pole[p1] === symbol && this.pole[p2] === symbol && this.pole[undef] === undefined){
                this.pole[undef] = '◯';
                return true;
            }
            return false;
        },
        trySetCircleToCellToLine(one, two, three, symbol) {
            if (this.trySetCircleToCell(one, two, three, symbol)) return true;
            if (this.trySetCircleToCell(one, three, two, symbol)) return true;
            if (this.trySetCircleToCell(two, three, one, symbol)) return true;
            return false;
        },
        clickTo(n) {
            if (this.reload !== false) return;
            if (this.pole[n] !== undefined) return;
            this.pole[n] = "X";
            if (this.checkWin('X')) return;
            if(this.pole.filter(v => v !== undefined).length >= 9) {
                alert('Draw');
                this.pole = [];
                return;
            }
            let success = false;
            for (let i = 0; i < this.combinations.length; i++) {
                if (this.trySetCircleToCellToLine(
                    this.combinations[i][0],
                    this.combinations[i][1],
                    this.combinations[i][2],
                    "◯"
                )) {
                    success = true;
                    break;
                }
            }
            if (!success) {
                for (let i = 0; i < this.combinations.length; i++) {
                    if (this.trySetCircleToCellToLine(
                        this.combinations[i][0],
                        this.combinations[i][1],
                        this.combinations[i][2],
                        "X"
                    )) {
                        success = true;
                        break;
                    }
                }
            }
            if (!success) {
                while (1) {
                    let q = this.getRandomInt(1,9);
                    if (this.pole[q] !== undefined) continue;
                    this.pole[q] = '◯';
                    break;
                }
            }
            this.checkWin('◯');
        },
        checkWin(symbol){
            for (let i = 0; i < this.combinations.length; i++) {
                if (this.pole[this.combinations[i][0]] === symbol
                    && this.pole[this.combinations[i][1]] === symbol
                    && this.pole[this.combinations[i][2]] === symbol
                ) {
                    console.log(
                        this.combinations[i],
                        this.pole[this.combinations[i][0]],
                        this.pole[this.combinations[i][1]],
                        this.pole[this.combinations[i][2]],
                        symbol
                        )
                    alert ('The winner is: ' + symbol);
                    this.reload = true;
                    setTimeout(() => {
                        this.pole = [];
                        this.reload = false;
                    }, 1000)
                    return true;
                }
            }
        }
    },
}).mount('#app')