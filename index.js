// Sección Clases

class Person{   // Creo la Clase Person
    constructor(name, lastName, yearBorn){
        this.name = name;
        this.lastName = lastName;
        this.yearBorn = yearBorn;
    }

    age () {      
        return (year () - this.yearBorn)
    }
}

class Car{  // creo la Clase Car
    constructor(brand, model, yearManu){
        this.brand = brand; 
        this.model = model;        
        this.yearManu = yearManu;
    }
        antiquity() { 
            return (year() - this.yearManu)
        }
        brandModel ()  {
            return (this.brand + " " + this.model);
        }
}

// Ingreso  de datos
const Person1 = new Person (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), parseInt(prompt("Ingrese su año de nacimiento") ));

const Car1 = new Car ((prompt("Ingrese la Marca de su vehículo, por ej. Ford, Fiat, Renault, Chevrolet, ect.")), (prompt("Ingrese el Modelo, ej. Fiesta, Focus, Duster, Captur, Toro, Cronos, Spin, Cruze, etc.")), (parseInt(prompt("Ingrese el año de fabricación"))));

// Sección Funciones

function year (){  // Obtengo el año actual

    const actualDate = new Date();
    const actualYear = parseInt(actualDate.getFullYear());    
    
    return (actualYear)
}

function ageDisc () {    
   
    if (Person1.age () > 39 && Person1.age() <56) {
        return 5;
    }
    else if (Person1.age()> 55 && Person1.age() < 66) {
        return 3;
    }
    else{
        return 0;
    }
}

function price () {
    
    switch(Car1.brandModel) {

        case "Ford Fiesta": return Math.round((1500000/3500*30) + (Car1.antiquity()*10));

        case "Ford Focus": return Math.round((2000000/3500*20) + (Car1.antiquity()*10));

        case "Renault Duster": return Math.round((2000000/3500*20) + (Car1.antiquity()*10));
        
        case "Renault Captur": return Math.round((2500000/3500*20) + (Car1.antiquity()*10));
        
        case "Fiat Toro": return Math.round((3500000/3500*20) + (Car1.antiquity()*10));
        
        case "Fiat Cronos": return Math.round((2000000/3500*20) + (Car1.antiquity()*10));

        case "Chevrolet Spin": return Math.round((2500000/3500*20) + (Car1.antiquity()*10));

        case "Chevrolet Cruze": return Math.round((3500000/3500*20) + (Car1.antiquity()*10));

        default: return Math.round((2000000/3500*20) + (Car1.antiquity()*10));
    }
}

function brandDisc () {
    switch (Car1.brand) {

        case "Ford": return 6;    

        case "Renault": return 7;

        case "Fiat": return 5;

        case "Chevrolet": return 4;

        default: return  0;
    }    
}

function finalPrice () {    

    return Math.round (price() - ((price() * (ageDisc() + brandDisc()))/100));

}

function show() {

    if (brandDisc() > 0 && ageDisc() > 0) {
        alert ("Estimado " + Person1.name + " " + Person1.lastName + " para su vehículo " + Car1.brandModel() + " del año " + Car1.yearManu + " tiene un descuento del " + brandDisc() + " % sobre el precio de lista $" + price() + '\n' + "Además por tener " + Person1.age() + " años de edad, posee un descuento extra del " + ageDisc() + " %" + '\n' + "Obteniendo un descuento TOTAL de " + (ageDisc() + brandDisc()) + " % ¡¡Felicidades!!" + '\n' + '\n' +  "El valor de la cuota mensual es de $ " + finalPrice());

    } // descuento marca y edad        

    else if (brandDisc() > 0) {
        alert ("Estimado " + Person1.name + " " + Person1.lastName + " para su vehículo " + Car1.brandModel() + " del año " + Car1.yearManu + " tiene un descuento del " + brandDisc() + " % sobre el precio de lista $" + price() + " ¡¡Felicidades!!" + '\n' + '\n' +  "El valor de la cuota mensual es de $ " + finalPrice());

    } //descuento por marca
    
    else if (ageDisc() > 0) {
        alert ("Estimado " + Person1.name + " " + Person1.lastName + " por tener " + Person1.age() + " años de edad, posees un descuento del " + ageDisc() + " % para su vehículo " + Car1.brandModel() + " del año " + Car1.yearManu + " sobre el precio de lista $" + price() + " ¡¡Felicidades!!" + '\n' + '\n' +  "El valor de la cuota mensual es de $ " + finalPrice());

    } // descuento por edad   

    else {
    alert ("Estimado " + Person1.name + " " + Person1.lastName + " su vehículo " + Car1.brandModel() + " del año " + Car1.yearManu + " por el momento NO tiene descuento disponible, el valor de la cuota mensual es de $ " + finalPrice());

    } // sin descuento
}

show();
