const Shape = require('./shape.js');
class Square extends Shape {
    constructor(qX, qY, txt, txtColor, bgColor, height, width) {
        super(qX, qY, txt, txtColor, bgColor);
        this.height = height;
        this.width = width;
    }
    getQx() {
        return this.qX;
    }
    setQx(qX) {
        this.qX = qX;
    }
    getQy() {
        return this.qY;
    }
    setQy(qY) {
        this.qY = qY;
    }
    getTxt() {
        return this.txt;
    }
    setTxt(txt) {
        this.txt = txt;
    }
    getBgColor() {
        return this.bgColor;
    }
    setBgColor(bgColor) {
        this.bgColor = bgColor;
    }
    getTxtColor() {
        return this.txtColor;
    }
    setTxtColor(txtColor) {
        this.txtColor = txtColor;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    // const objShape = new Square(); 
    // objShape.setWidth("200");
    // objShape.setHeight("200");
    // objShape.setQx("50"); 
    // objShape.setQy("0"); 
    // objShape.setTxt("SVG");
    // objShape.setTxtColor("orange");
    // objShape.setBgColor("blue");
    // expect(objShape.render()).toEqual(`<rect width="200" height="200" x="50" y="0" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text>`);
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="${this.getWidth()}" height="${this.getHeight()}" x="${this.getQx()}" y="${this.getQy()}" fill="${this.getBgColor()}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTxtColor()}">${this.getTxt()}</text></svg>`;
    }
}
module.exports = Square;