module.exports = class Persona {

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