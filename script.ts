class Negocio{
    nombre:string;
    direccion: string
    telefono: number
    abierto?: boolean

    constructor (
        nombre:string,
        direccion: string,
        telefono: number,
       
    ){
        this.nombre=nombre
        this.direccion= direccion
        this.telefono=telefono
       
    }

    //gettes y setters
    getNombre(){
        return this.nombre;
    }
    getDireccion(){
        return this.direccion
    }
    getTelefono(){
        return this.telefono
    }
    getAbierto(){
        return this.abierto as boolean
    }
    setNombre(nombre:string){
        this.nombre=nombre
    }
    setDireccion(direccion:string){
        this.direccion=direccion
    }
    setTelefono(telefono:number){
        this.telefono=telefono
    }
    setAbierto(abierto:boolean){
        this.abierto=abierto
    }

    //otros metodos
    estaAbierto(){
        const horaActual:number = new Date().getHours()
        const horaAbre:number = 8
        const horaCierre:number = 20
        if (horaAbre<=horaActual && horaCierre>=horaActual){
            this.setAbierto(true)
            return 'Esta Abierto'
        }else{
            this.setAbierto(false)
            return 'Esta cerrado'
        }
    }
    delivery(distancia:number){
        return distancia > 15 ? 'El delivery no esta disponibe' : 'El delivery si esta disponible'
    }

    recomendar ():string{
        return `${this.nombre} agradece tu recomendacion `
    }
    
}

const peluqueria = new Negocio ('Tijeras','Tucuman2266',1231244)
console.log(peluqueria.estaAbierto())
console.log(peluqueria.delivery(20))
