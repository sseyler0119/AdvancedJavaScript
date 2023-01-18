 class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        return "This shape is colored: " + this.color;
    }
}


const PI = 3.14159;

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // area of a circle = 2*PI*r
    getArea() {
        super.getArea();
        return "The area of the circle is " + this.radius * 2 * PI;
    }
}


class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    // area of a triangle base * height * 1/2
    getArea() {
        super.getArea();
        return "The area of the triangle is " + this.base * 0.5 * this.height;
    }
}


 class Rectangle extends Shape {
    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }

    getArea() {
        super.getArea();
        return "The area of the rectangle is " + this.height * this.width;
    }
}


// instantiate objects
circle = new Circle("blue", 4);
triangle = new Triangle("orange", 8, 3);
rectagle = new Rectangle("yellow", 3,2);

// display area in HTML elements
document.getElementById("circle").innerHTML = circle.getArea();
document.getElementById("rectangle").innerHTML = rectagle.getArea();
document.getElementById("triangle").innerHTML = triangle.getArea();
