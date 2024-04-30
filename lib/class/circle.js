const Shape = require('./shape.js');
class Circle extends Shape {
    constructor(qX, qY, txt, txtColor, bgColor, rad) {
        super(qX, qY, txt, txtColor, bgColor);
        this.rad = rad;
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
    getRad() {
        return `${this.rad}`;
    }
    setRad(rad) {
        this.rad = `${rad}`;
    }
    // const objShape = new Circle(); 
    // objShape.setQx("150"); 
    // objShape.setQy("100"); 
    // objShape.setRad("80");
    // objShape.setTxt("SVG");
    // objShape.setTxtColor("orange");
    // objShape.setBgColor("blue");
    // expect(objShape.render()).toEqual(`<circle x="150" y="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text>`)
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="${this.getQx()}" cy="${this.getQy()}" r="${this.getRad()}" fill="${this.getBgColor()}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTxtColor()}">${this.getTxt()}</text></svg>`;
    }
}
module.exports = Circle;