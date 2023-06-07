alert("Bienvenido al hotel Amerian");


let opcion = prompt('ingrese N si desea realizar una nueva reserva. \n ingrese B si desea buscar una reserva \nIngrese X si desea cancelar la reserva');

const reserva = [
    {nombre: "luciana", cantPer: 2, fecha: "18/09"},
    {nombre: "gonzalo", cantPer: 4, fecha: "11/07"}
];

function Reserva(nombre, cantPer, fecha) {
    this.nombre = nombre;
    this.cantPer = cantPer;
    this.fecha = fecha;
}

function crearReserva() {
    let nombre = prompt("ingrese el nombre de la persona que realiza la reserva");
    let cantPer = prompt("ingrese la cantidad de personas que van a hospedarse");
    let fecha = prompt("ingrese la fecha en la que va a hospedarse");

    const nuevaReserva = new Reserva(nombre, cantPer, fecha);

    return nuevaReserva;
}

function filtrar(param) {

}

if (opcion == "n" || opcion == "N") {

    const reserva1 = crearReserva();
    reserva.push(reserva1)
    alert("su reservacion fue realizada con exito")
    
} else if (opcion == "b" || opcion == "B"){
    let buscar = prompt("ingrese el nombre de la persona que realizo la reserva")
    let encontrado = reserva.find((el) => { return el.nombre.includes(buscar) })
    alert("nombre: " + encontrado.nombre + "\ncantidad de personas: " + encontrado.cantPer + "\nfecha: " + encontrado.fecha) 

} else if(opcion == "x" || opcion == "X") {
    alert("gracias por visitarnos");
} else {
    alert("opcion no valida");
}
