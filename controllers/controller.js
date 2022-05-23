"use strict";
var car;
function submitCar() {
    //var errores = 0;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    var matchPlate = /^([a-zA-Z-]){4}([0-9]){3}\b/;
    var isRequired = function (value) { return (value === "" ? false : true); };
    var isInputLetters = function (input) {
        // are they letters and at least 3 characters
        return !/^([a-zA-Z-]){3}/.test(input);
    };
    if (!isRequired(plateInput.value) || !isRequired(brandInput.value) || !isRequired(colorInput.value)) {
        alert("You must fill all fields");
        return false;
    }
    else if (!matchPlate.test(plateInput.value)) {
        alert("Plate must be with 4 letters and 3 numbers");
        return false;
    }
    else if (isInputLetters(brandInput.value) || isInputLetters(colorInput.value)) {
        alert("The brand and color must be letters and at least 3 characters");
        return false;
    }
    else
        //EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
        // tiene 4 letras y 3 numeros 
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
    showVehicle();
    showWheelForm();
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm() {
    // var errores = 0;
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    for (var i = 1; i <= 4; i++) {
        var brandWheel = document.getElementById("brandWheel" + i);
        var diameterWheel = document.getElementById("diameterWheel" + i);
        if (diameterWheel.value > 2 || diameterWheel.value < 1) {
            alert("You must indicate all wheel diameters and the value must be between 1 and 2");
            return false;
        }
        else {
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
    }
    console.log(car);
    showWheels();
}
function showWheels() {
    //EX4. Optimizar la función showWheels
    var wheelTitle = document.getElementById("wheelTitle");
    wheelTitle.innerText = "Wheels:";
    for (var i = 1; i <= 4; i++) {
        document.getElementById("wheelOutput" + i).innerText = "Wheel ".concat(i, ": Brand:  ").concat(car.wheels[i - 1].brand, " Diameter: ").concat(car.wheels[i - 1].diameter);
    }
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
