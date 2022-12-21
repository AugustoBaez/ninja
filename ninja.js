class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre
        this.salud = salud
        this.velocidad = velocidad
        this.fuerza = fuerza
    }
    sayName() {
        console.log(`el nombre del ninja es ${this.nombre}`)
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}, fuerza ${this.fuerza}, velocidad ${this.velocidad}, salud ${this.salud}`)
    }
    drinkSake() {
        this.salud += 10
        console.log(`salud ${this.salud}`)
    }
}
const ninja = new Ninja("sekiro", 10, 3, 3)
ninja.sayName()
ninja.showStats()
ninja.drinkSake()

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200, 10, 10)
        this.nombre = nombre
        this.sabiduria = 10
    }
    speakWisdom() {
        console.log("lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}
const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()