import readline from "readline-promise";
import { Teatro } from "./teatro";
import { gestionarOpcion, mostrarMenu } from './menu';

async function main() {
  // configuración de readline-promise
  const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  let opcion: string;
  const teatro = new Teatro();

  // inicialización de readline
  do {

    mostrarMenu();

    opcion = await rlp.questionAsync('  Introduzca la opción que desee\n  mediante el número correspondiente\n  y pulse "Intro":\n  \n  ');

    await gestionarOpcion(opcion, rlp, teatro);

} while (opcion !== '8');

console.log("salir");

//cerrar readline
rlp.close();
}

main();
