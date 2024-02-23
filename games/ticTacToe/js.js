const { createApp } = Vue
createApp({
    data() {
        return {
            field: [],
            combinations: [
                [1,2,3], [4,5,6], [7,8,9],
                [1,4,7], [2,5,8], [3,6,9],
                [1,5,9], [3,5,7],
            ],
            appIsReload: false,
            symbols: {
                player: 'X',
                pc: '◯',
            },
            canMakeStep: true,
        }
    },
    methods: {
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        trySetCircleToCellToLine(p1, p2, p3, symbol) {
            if ([p1, p2, p3].filter(el => this.field[el] === symbol).length === 2) {
                let undef = [p1, p2, p3].find(el => this.field[el] === undefined);
                if (undef) {
                    this.field[undef] = this.symbols.pc;
                    return true;
                }
            }
            return false;
        },
        trySetCircleFor(symbol) {
            for (let i = 0; i < this.combinations.length; i++) {
                if (this.trySetCircleToCellToLine(
                    this.combinations[i][0],
                    this.combinations[i][1],
                    this.combinations[i][2],
                    symbol
                )) {
                    return true;
                }
            }
            return false;
        },
        makeCircleInRandomPlace() {
            while (1) {
                let q = this.getRandomInt(1,9);
                if (this.field[q] !== undefined) continue;
                this.field[q] = this.symbols.pc;
                break;
            }
        },
        clickTo(n) {
            if (!this.canMakeStep) return;
            if (this.appIsReload || this.field[n]) return;
            this.field[n] = this.symbols.player;
            if (this.checkWin(this.symbols.player)) return;
            if(this.field.filter(v => v !== undefined).length >= 9) {
                this.stopGame('Draw');
                return;
            }
            setTimeout(() => {
                this.trySetCircleFor(this.symbols.pc) || this.trySetCircleFor(this.symbols.player) || this.makeCircleInRandomPlace();
                setTimeout(() => {
                    this.checkWin(this.symbols.pc);
                    this.canMakeStep = true;
                }, 100)
            }, 300)

        },
        checkWin(symbol){
            for (let i = 0; i < this.combinations.length; i++) {
                if (this.field[this.combinations[i][0]] === symbol
                    && this.field[this.combinations[i][1]] === symbol
                    && this.field[this.combinations[i][2]] === symbol
                ) {
                    this.stopGame('The winner is: ' + symbol);
                    return true;
                }
            }
        },
        stopGame(message) {
            this.appIsReload = true;
            const alertDiv = document.querySelector('#alert');
            setTimeout(() => {
              alertDiv.textContent = message
              alertDiv.style.visibility = 'visible'
            }, 1)
            setTimeout(() => {
              alertDiv.style.visibility = 'hidden'
                this.field = [];
                this.appIsReload = false;
            }, 1000)
        }
    },
}).mount('#app')
