class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return console.log(this.mascotas.length)
    }
    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBookNames(){
        const books = []
        this.libros.forEach(libro => {
            books.push(libro.nombre)
        })
        return console.log(books)
    }
}

const usuario1 = new Usuario("Lautaro", "Gonzalez", [{nombre: "Paro e Inflacion", autor: "Milton Friedman"}], ["Katy"])
usuario1.getFullName()
usuario1.addMascota("Roma")
usuario1.countMascotas()
usuario1.addBook("El Camino del Libertario", "Javier Milei")
usuario1.getBookNames()