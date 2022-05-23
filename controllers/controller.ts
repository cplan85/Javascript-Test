let car: Car;



function submitCar() {
    let errores = 0;
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

   

    const matchPlate = /^([a-zA-Z-]){4}([0-9]){3}\b/;
    if (matchPlate.test(plateInput.value)) {
        alert("Plate must be with 4 letters and 3 numbers");
        return false;
      }

	//EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    // tiene 4 letras y 3 numeros 
	car = new Car(plateInput.value, colorInput.value, brandInput.value);
	showVehicle();
	showWheelForm();
   
}

function showVehicle() {
    let carTitle = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;

}

function submitWheelForm() {
    let errores = 0;
	
	//EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
	//EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas

	for (let i = 1; i <= 4; i++) {
		let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
		let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);

		let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
		car.addWheel(wheel_generica);

	}
	console.log(car)
	showWheels();
    
}

function showWheels() {
	//EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    let wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1");
    let wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
    let wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
    let wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4");

    wheelTitle.innerText = "Wheels:";
    wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}