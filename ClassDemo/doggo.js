class Dog {
    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    shake() {
        return "Shake!";
    }

    sit() {
        return "Sit!";
    }

    layDown() {
        return "Lay Down!";
    }

}

let Layla = new Dog("super mutt", "brindle", 21, 46);

document.getElementById("doggo").innerHTML = "Meet Layla, she is a " + Layla.breed + " with " +
 Layla.color + " coloring, and she is  " + Layla.height + " inches tall, and weighs " + Layla.weight 
 + " pounds";

 document.getElementById("shake").innerHTML = Layla.shake();
 document.getElementById("sit").innerHTML = Layla.sit();
 document.getElementById("laydown").innerHTML = Layla.layDown();
