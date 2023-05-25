alert("Bienvenido al hotel Amerian");


let cantidadPersonas = prompt("por favor, ingrese la cantidad de personas a hospedarse \n1 - 1 \n2 - 2 \n3 - 3 \n4 - 4 \nPresiona x para cancelar la reserva")


function reservaConfirmada(personas, tipoHab, fechas) {
     alert("su reserva ha sido confirmada. La cantidad de personas es " + personas + " el tipo de habitacion es habitacion " + tipoHab + " y la fecha es " + fechas);
 }


while (cantidadPersonas != "x") {
    switch (cantidadPersonas) {

        case "1":
            let habitacion = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")

            while (habitacion != "x") {
                let fecha = prompt("ingresa la fecha que desea hospedarse")


                break;
            }

            reservaConfirmada(cantidadPersonas, habitacion2, fecha2);

            break;

        case "2":
            let habitacion2 = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")
            while (habitacion2 != "x") {
                let fecha2 = prompt("ingresa la fecha que desea hospedarse")
                reservaConfirmada(cantidadPersonas, habitacion2, fecha2);
                break;
            }
            break;

        case "3":
            let habitacion3 = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")
            while (habitacion3 != "x") {
                let fecha3 = prompt("ingresa la fecha que desea hospedarse")
                reservaConfirmada(cantidadPersonas, habitacion3, fecha3);
                break;
            }
            break;

        case "4":
            let habitacion4 = prompt("elige el tipo de habitacion que desea: \n1 - habitacion simple con cama matrimonial \n2 - habitacion simple con camas separadas \nPresiona x para cancelar la reserva")
            while (habitacion3 != "x") {
                let fecha4 = prompt("ingresa la fecha que desea hospedarse")
                reservaConfirmada(cantidadPersonas, habitacion4, fecha4);
                break;
            }
            break;



        default:
            alert("opcion no valida, vuelva a intentarlo.");
            break;
    }

    alert("gracias por elegirnos")
    break;

}



