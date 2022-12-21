class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }
    sayName() {
        console.log(`el nombre del ninja es ${this.nombre}`)
    }
    showStats() {
        console.log(this.nombre)
        console.log(`fuerza ${this.fuerza}`)
        console.log(`velocidad ${this.velocidad}`)
        console.log(`salud ${this.salud}`)
    }
    drinkSake() {
        this.salud += 10
        console.log(`salud ${this.salud}`)
    }
}
const ninja = new Ninja("sekiro", 0)
ninja.sayName()
ninja.showStats()
ninja.drinkSake()