const Persona = require('./Persona')

module.exports = class Estudiante extends Persona{
    matricular(materia, nombre){
        this.materia = materia;
    }
}