const Triangle = require("./class/triangle.js");
const Circle = require("./class/circle.js");
const Square = require("./class/square.js");
describe("class Triangle {...}", () => {
    describe("parameters from class should populate all values for rendering", () => {
        it("should take an instance of Triangle class object and set all values for rendering element", () => {
            const objShape = new Triangle();
            objShape.setQx("150");
            objShape.setQy("120");
            objShape.setTxt("SVG");
            objShape.setTxtColor("orange");
            objShape.setBgColor("blue");
            objShape.setCord("150,10 250,190 50,190");
            expect(objShape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150,10 250,190 50,190" x="150" y="120" fill="blue"/><text x="150" y="170" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`);
            console.log(objShape.render());
        });
    });
});
describe("class Circle {...}", () => {
    describe("parameters from class should populate all values for rendering", () => {
        it("should take an instance of Circle class object and set all values for rendering element", () => {
            const objShape = new Circle();
            objShape.setQx("150");
            objShape.setQy("100");
            objShape.setRad("80");
            objShape.setTxt("SVG");
            objShape.setTxtColor("orange");
            objShape.setBgColor("blue");
            expect(objShape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`);
            console.log(objShape.render());
        });
    });
});
describe("class Square {...}", () => {
    describe("parameters from class should populate all values for rendering", () => {
        it("should take an instance of Square class object and set all values for rendering element", () => {
            const objShape = new Square();
            objShape.setWidth("200");
            objShape.setHeight("200");
            objShape.setQx("50");
            objShape.setQy("0");
            objShape.setTxt("SVG");
            objShape.setTxtColor("orange");
            objShape.setBgColor("blue");
            expect(objShape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="200" height="200" x="50" y="0" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`);
            console.log(objShape.render());
        });
    });
});