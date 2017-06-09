var Hyundai = (function () {
    function Hyundai() {
    }
    Hyundai.prototype.getModel = function () {
        console.log('getModel');
    };
    Hyundai.prototype.getYear = function () {
        console.log('getYear');
    };
    Hyundai.prototype.registerCar = function (car) {
        console.log('car: ', car);
    };
    return Hyundai;
})();
exports["default"] = Hyundai;
