import Car from './car';

class Hyundai implements Car {
    name: String;
    year: Number;
    hasTurbo: Boolean;

    constructor() {
    }

    getModel() {
        console.log('getModel');
    }

    getYear() {
        console.log('getYear');
    }

    registerCar(car: Car) {
        console.log('car: ', car);
    }
}

export default Hyundai;