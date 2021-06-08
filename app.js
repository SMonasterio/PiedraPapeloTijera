let opciones = ["Piedra", "Papel", "Tijera"];
let jugador = null;
let bot = null;

function playGame() {
  //Lo que decida la computadora
  //Lo que decida el jugador
  console.log("Juego en acción");
  seleccionBot();
  seleccionJugador();
}

function seleccionBot() {
  //Definir la opción definida por el bot
  return (bot = Math.round(Math.random() * 2));
}

function seleccionJugador() {
  //Manejo lo que decida el jugador
  jugador = parseInt(
    prompt("Ingrese su opción: 0 -> Piedra  ||  1 -> Papel  ||  2 -> Tijera")
  );
  if (!isNaN(jugador)) {
    if (jugador >= 0 && jugador <= 2) {
      switch (true) {
        case jugador === bot:
          mensajeAlert("EMPATE");
          break;
        case jugador === 0 && bot === 2:
          mensajeAlert("GANASTE");
          break;
        case jugador === 1 && bot === 0:
          mensajeAlert("GANASTE");
          break;
        case jugador === 2 && bot === 1:
          mensajeAlert("GANASTE");
          break;

        default:
          mensajeAlert("PERDISTE");
          break;
      }
    } else {
      //Cuando es otro número
      mensajeAlert("noOpcion");
    }
  } else {
    //Cuando no sea un número
    mensajeAlert("noNumero");
  }
}

function mensajeAlert(resultado) {
  //Devuelve el mensaje del juego en pantalla
  if (resultado === "noOpcion") {
    swal("ERROR", "No existe la opción elegida", "error");
  }
  if (resultado === "noNumero") {
    swal("ERROR", "No existe la opción elegida", "error");
  }
  if (resultado === "GANASTE") {
    swal(
      "GANASTE",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      "succes"
    );
  }
  if (resultado === "PERDISTE") {
    swal(
      "PERDISTE",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      "error"
    );
  }
  if (resultado === "EMPATE") {
    swal(
      "EMPATE",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      "info"
    );
  }
}
