class Car{
    constructor(brand,isAutomatic){
        this.brand=brand;
        this.isAutomatic=isAutomatic;
    }

    runCar(){
        console.log("The car brand is ");
        console.log(this.brand);
        console.log("And it is ");
        console.log(this.isAutomatic);
    }
}

new_car=new Car("Chevrolet",true);
new_car.runCar();