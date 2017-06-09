import Car      from './car'; 
import Hyundai  from './hyundai';

const car: Car = {
    getModel: () => {},
    getYear: () => {},
    
    name: 'HB20',
    year: 2016,
    hasTurbo: true
};
const hyundai = new Hyundai();
hyundai.registerCar(car);
