class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult()
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let colours = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)

            const color = this.options[index];

            colours.push(color);
        }
        return colours;
    }
}
//const draw = new Draw();