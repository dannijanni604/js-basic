class Car {


    constructor(model, color) {
        this.model = model,
            this.color = color
    }

    printInfo() {
        console.log("Car model is", this.model, "Car color is", this.color)

    }
}

const carObj = new Car('1998', 'Red');
console.log(carObj.printInfo());