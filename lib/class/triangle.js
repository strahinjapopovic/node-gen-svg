const Shape = require('./shape.js');
class Triangle extends Shape {
    constructor(qX, qY, txt, txtColor, bgColor, cord) {
        super(qX, qY, txt, txtColor, bgColor);
        this.cord = cord;
    }
    getQx() {
        return `${this.qX}`;
    }
    setQx(qX) {
        this.qX = `${qX}`;
    }
    getQy() {
        return `${this.qY}`;
    }
    setQy(qY) {
        this.qY = `${qY}`;
    }
    getTxt() {
        return `${this.txt}`;
    }
    setTxt(txt) {
        this.txt = `${txt}`;
    }
    getBgColor() {
        return `${this.bgColor}`;
    }
    setBgColor(bgColor) {
        this.bgColor = `${bgColor}`;
    }
    getTxtColor() {
        return `${this.txtColor}`;
    }
    setTxtColor(txtColor) {
        this.txtColor = `${txtColor}`;
    }
    getCord() {
        return `${this.cord}`;
    }
    setCord(cord) {
        this.cord = `${cord}`;
    }
    // const objShape = new Triangle(); 
    // objShape.setQx("150"); 
    // objShape.setQy("120"); 
    // objShape.setTxt("SVG");
    // objShape.setTxtColor("orange");
    // objShape.setBgColor("blue");
    // objShape.setCord("150,10 250,190 50,190");
    // expect(objShape.render()).toEqual(`<polygon points="150,10 250,190 50,190" x="150" y="120" fill="blue"/><text x="150" y="170" font-size="60" text-anchor="middle" fill="orange">SVG</text`);
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="${this.getCord()}" x="${this.getQx()}" y="${this.getQy()}" fill="${this.getBgColor()}"/><text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.getTxtColor()}">${this.getTxt()}</text></svg>`;
    }
}
module.exports = Triangle;