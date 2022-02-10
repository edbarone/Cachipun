function Jugar() {

    var Partida = true;


    do {

        // Definimos las variables de entrada para definir la cantidad partidas
        var cantidad = parseInt(prompt("Ingrese el número de partidas del Cachipún"));

        while (cantidad <= 0 || typeof cantidad === 'string') {
            // Definimos condicional que impide entrada de datos negativos para cantidad de partidas  
            alert("Seleccione un número mayor que 0");
            cantidad = parseInt(prompt("Ingrese el número de partidas del Cachipún"));
        }

        // Declaramos las variables acumuladoras e el iterador para inicializar bucle
        var acu1 = 0; // para usuario
        var acu2 = 0; // para pc
        var acu3 = 0; // acumulador de partidas empatadas
        var i = 1; // iterador

        // Definimos condcional que define la cantidad de partidas de acuerdo información ingresada por usuario
        while (i <= cantidad) {


            // Declaramos la variable que almacena la elección escogida por usuario
            var elu = parseInt(prompt("Ingrese un número entre (0,1 ó 2), Piedra = 0, Papel = 1 y Tijera = 2"));

            // Definimos condcional que restringe la elección de usuario a valores indicados
            while (elu < 0 || elu > 2) {

                alert("Seleccione un número entre las opciones: 0, 1 y 2");
                elu = parseFloat(prompt("Ingrese un número entre (0, 1 y 2)"));
            }

            // Declaramos la variable que almacena la elección escogida por la pc
            var elpc = Math.floor(Math.random() * 3);

            // Definimos posibles casos durante cada partida
            if (elu == 0 && elpc == 1) {
                acu2++;
                alert("Papel envuelve a piedra. Gana PC");
            }

            if (elu == 1 && elpc == 2) {
                acu2++;
                alert("Tijera corta papel. Gana PC");
            }

            if (elu == 2 && elpc == 0) {
                acu2++;
                alert("Piedra aplasta tijera. Gana PC");
            }

            if (elu == 1 && elpc == 0) {
                acu1++;
                alert("Papel envuelve a piedra. Gana Usted");
            }

            if (elu == 2 && elpc == 1) {
                acu1++;
                alert("Tijera corta papel. Gana Usted");
            }

            if (elu == 0 && elpc == 2) {
                acu1++;
                alert("Piedra aplasta tijera. Gana Usted");
            }

            if (elu == 0 && elpc == 0) {
                alert("Piedra empata con Piedra. Nadie gana");
                acu3++;
            }

            if (elu == 1 && elpc == 1) {
                alert("Papel empata con Papel. Nadie gana");
                acu3++;
            }

            if (elu == 2 && elpc == 2) {
                alert("Tijera empata con Tijera. Nadie gana");
                acu3++;
            }
            i++;
        }


        // Desición del ganador de acuerdo a la cantidad partidas ganadas para cada participante
        if (acu1 > acu2) {

            alert("Usuario ganó " + acu1 + " partida(s) \nPC ganó " + acu2 + " partida(s) \nHubo " + acu3 + " partida(s) empatada(s) \nFelicidades, usted es el ganador");
        }

        if (acu1 < acu2) {

            alert("Usuario ganó " + acu1 + " partida(s) \nPC ganó " + acu2 + " partida(s) \nHubo " + acu3 + " partida(s) empatada(s) \nLastima, perdiste esta vez");

        }

        if (acu1 == acu2) {

            alert("Usuario ganó " + acu1 + " partida(s) \n PC ganó " + acu2 + " partida(s)  \nHubo " + acu3 + " partida(s) empatada(s) \nPor lo tanto, hubo un empate");

        }

        // Definimos condicional para consultar si se desea repetir juego
        var Condicion = prompt("¿Quieres volver a Jugar Si / No ?");



        if (Condicion == "S" || Condicion == "s" || Condicion == "Si" || Condicion == "si" || Condicion == "SI") {

            Partida = true;

        } else {
            (Partida = false);
        }
    }

    while (Partida == true);

}