var Negocio = /** @class */ (function () {
    function Negocio(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    //gettes y setters
    Negocio.prototype.getNombre = function () {
        return this.nombre;
    };
    Negocio.prototype.getDireccion = function () {
        return this.direccion;
    };
    Negocio.prototype.getTelefono = function () {
        return this.telefono;
    };
    Negocio.prototype.getAbierto = function () {
        return this.abierto;
    };
    Negocio.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Negocio.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Negocio.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Negocio.prototype.setAbierto = function (abierto) {
        this.abierto = abierto;
    };
    //otros metodos
    Negocio.prototype.estaAbierto = function () {
        var horaActual = new Date().getHours();
        var horaAbre = 8;
        var horaCierre = 20;
        if (horaAbre <= horaActual && horaCierre >= horaActual) {
            this.setAbierto(true);
            return 'Esta Abierto';
        }
        else {
            this.setAbierto(false);
            return 'Esta cerrado';
        }
    };
    Negocio.prototype.delivery = function (distancia) {
        return distancia > 15 ? 'El delivery no esta disponibe' : 'El delivery si esta disponible';
    };
    Negocio.prototype.recomendar = function () {
        return "".concat(this.nombre, " agradece tu recomendacion ");
    };
    return Negocio;
}());
var peluqueria = new Negocio('Tijeras', 'Tucuman2266', 1231244);
console.log(peluqueria.estaAbierto());
console.log(peluqueria.delivery(20));
