var hyundai_1 = require('./hyundai');
var car = {
    getModel: function () { },
    getYear: function () { },
    name: 'HB20',
    year: 2016,
    hasTurbo: true
};
var hyundai = new hyundai_1["default"]();
hyundai.registerCar(car);
