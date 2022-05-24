let car: Car;



function submitCar() {
     //EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    // tiene 4 letras y 3 numeros 
    var errores = 0;
    let errorsArray =[];
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");

    var matchPlate = /^([a-zA-Z-]){4}([0-9]){3}\b/;

    const isRequired = (value: string) => (value === "" ? false : true);

    const isInputLetters = (input: string) => {
        // are they letters and at least 3 characters
        return !/^([a-zA-Z-]){3}/.test(input);
      };

    if(!isRequired(plateInput.value) || !isRequired(brandInput.value) || !isRequired(colorInput.value) ) {
        errorsArray.push("All Fields: You must fill all fields \n");
        //alert("You must fill all fields");
        errores ++;
    }

    if (!matchPlate.test(plateInput.value)) {
        //alert("Plate must be with 4 letters and 3 numbers");
        errorsArray.push("Plate Input: Plate must be with 4 letters and 3 numbers \n");
        errores ++;
    } 
    if (isInputLetters(brandInput.value)  ) {
        errorsArray.push("Brand Input: The brand must be letters and at least 3 characters \n");
        errores ++;
    } 
    if (isInputLetters(colorInput.value) ) {
        errorsArray.push("Color Input: The color must be letters and at least 3 characters \n");
        errores ++;
    } 
    
    if (errores === 0) {

        car = new Car(plateInput.value, colorInput.value, brandInput.value);
        showVehicle();
        showWheelForm();
    } else {
       alert(`Errors found:
       ${errorsArray.join("")}`);
    }
   
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

function validateWheel(wheelDiameter: number) {
    return wheelDiameter > 2 || wheelDiameter < 1 ? false : true;
}

function submitWheelForm() {
    var errores = 0;
    let errorArray =[];

    const getDiameterWheel = (i: number) => {
       return  document.getElementById("diameterWheel" + i);
    };
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    for (var i = 1; i <= 4; i++) {
        var diameterWheel = getDiameterWheel(i);

        if(!validateWheel(diameterWheel.value)) {
            errores ++;
            errorArray.push(i)
        } 
    }

    if(errores === 0) {

        for (var i = 1; i <= 4; i++) {
            var brandWheel = document.getElementById("brandWheel" + i);
            var diameterWheel = getDiameterWheel(i);
    
              {
                var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
                car.addWheel(wheel_generica);
            }
        }
    } else {
        errorArray.length > 1 ? errorArray.splice((errorArray.length-1), 0, " and") : null
    
        alert(`You must indicate all wheel diameters and the value must be between 1 and 2. Errors found in Wheel${errorArray.length>1? "s": ""} ${errorArray.toString()}.`);
    }
   
    console.log(car);
    errores === 0 ? showWheels() : null;
}

function showWheels() {
	//EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    wheelTitle.innerText = "Wheels:";

    for (let i = 1; i <= 4; i++) {
        document.getElementById("wheelOutput" + i).innerText =`Wheel ${i}: Brand:  ${car.wheels[i-1].brand} Diameter: ${car.wheels[i-1].diameter}`
    }
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}