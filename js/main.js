alert("Bienvenido al hotel Amerian");


//let cantidadPersonas = prompt("por favor, ingrese la cantidad de personas a hospedarse \n1 - 1 \n2 - 2 \n3 - 3 \n4 - 4 \nPresiona x para cancelar la reserva")


// function reservaConfirmada(personas, tipoHab, fechas) {
//      alert("su reserva ha sido confirmada. La cantidad de personas es " + personas + " el tipo de habitacion es habitacion " + tipoHab + " y la fecha es " + fechas);
//  }

//funcion constructora de la reserva

function reserva(nombre, fecha, cantper) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.cantper = cantper;
}

let nombre = prompt('Ingrese a nombre de quien estara la reserva. \nIngrese x si desea cancelar la reserva');

if (nombre == 'x') {
    alert('muchas gracias por su visita')
} else {
    let fecha = prompt('ingrese la fecha en la que va a hospedarse \nIngrese x si desea cancelar la reserva');
    if (fecha == 'x') {
        alert('muchas gracias por su visita')
    } else {
        let cantidadPersonas = prompt('ingrese la cantidad de personas a hospedarse \nIngrese x si desea cancelar la reserva')
        if (cantidadPersonas == 'x') {
            alert('muchas gracias por su visita')
        } else {
            const reserva1 = new reserva(nombre, fecha, cantidadPersonas)

            alert('su reserva ha sido confirmada. corrobore si los datos de la misma son correctos.')

            alert("nombre: " + reserva1.nombre + "\nfecha: " + reserva1.fecha + "\nCantidad de personas: " + reserva1.cantper)

            let datos = prompt('los datos ingresados son correctos? \n1- si \n2- no')
            switch (datos) {
                case "1":
                    alert('muchas gracias por reservar con nosotros')
                    break;

                case "2":
                    let correcion = prompt("ingrese el dato que desea corregir \n1 - nombre \n2 - fecha \n3 - cantidad de personas")

                    switch (correcion) {
                        case "1":
                            let nombre = prompt("ingrese el nombre de la presona que desea reservar")
                            reserva1.nombre = nombre
                            alert('su reserva ha sido confirmada. estos son los datos de su reserva')
                            alert("nombre: " + reserva1.nombre + "\nfecha: " + reserva1.fecha + "\nCantidad de personas: " + reserva1.cantper)

                            alert("gracias por reservar con nosotros")
                            break;

                        case "2":
                            let fecha = prompt("ingrese la fecha en la que va a hospedarse")
                            reserva1.fecha = fecha
                            alert('su reserva ha sido confirmada. estos son los datos de su reserva')
                            alert("nombre: " + reserva1.nombre + "\nfecha: " + reserva1.fecha + "\nCantidad de personas: " + reserva1.cantper)

                            alert("gracias por reservar con nosotros")
                            break;

                        case "3":
                            let cantper = prompt("ingrese la cantidad de personas a hospedarse")
                            reserva1.cantper = cantper
                            alert('su reserva ha sido confirmada. estos son los datos de su reserva')
                            alert("nombre: " + reserva1.nombre + "\nfecha: " + reserva1.fecha + "\nCantidad de personas: " + reserva1.cantper)

                            alert("gracias por reservar con nosotros")
                            break;
                    
                        default:
                            break;
                    }
                    if (correcion == "nombre") {

                    } else {
                        if (correcion == "fecha") {

                        } else {
                            if (correcion == "cantidad") {
                                
                            }
                        }
                    }
                    break;
            
                default:
                    break;
            }

        }
    }
}

// while (cantidadPersonas != "x") {
//     switch (cantidadPersonas) {

//         case "1":


//         case "2":
//             let habitacion2 = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")
//             while (habitacion2 != "x") {
//                 let fecha2 = prompt("ingresa la fecha que desea hospedarse")
//                 reservaConfirmada(cantidadPersonas, habitacion2, fecha2);
//                 break;
//             }
//             break;

//         case "3":
//             let habitacion3 = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")
//             while (habitacion3 != "x") {
//                 let fecha3 = prompt("ingresa la fecha que desea hospedarse")
//                 reservaConfirmada(cantidadPersonas, habitacion3, fecha3);
//                 break;
//             }
//             break;

//         case "4":
//             let habitacion4 = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")
//             while (habitacion3 != "x") {
//                 let fecha4 = prompt("ingresa la fecha que desea hospedarse")
//                 reservaConfirmada(cantidadPersonas, habitacion4, fecha4);
//                 break;
//             }
//             break;



//         default:
//             alert("opcion no valida, vuelva a intentarlo.");
//             break;
//     }

//     alert("gracias por elegirnos")
//     break;

// }



