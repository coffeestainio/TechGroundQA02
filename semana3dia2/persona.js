class Persona {

    constructor(_nom, _ape){
        this.nombre = _nom;
        this.apellido = _ape;
    }

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    changeName(newName){
        this.nombre = newName;
    }

    changeLastAndFirstName(name, lastName){
        this.changeName(name)
        this.apellido = lastName
    } 
}

class Padres {
    constructor(_nom){
        console.log(_nom)
        this.nombre = _nom;
    }
}

class Estudiante extends Persona{
    matricular(materia, nombre){
        this.materia = materia;
        this.padres = new Padres(nombre)
    }
}



let persona = new Persona('pablo','calvo')

console.log(persona)
console.log(Persona)
// let estudiante = new Estudiante('pablo', 'calvo');
// let estudiante1 = new Estudiante('pablo', 'calvo');

// estudiante.changeName('juanito')
// estudiante.matricular('españil')
// estudiante1.matricular('ingles','jorge')

// console.log(estudiante1)
// console.log(estudiante1.nombreCompleto)

