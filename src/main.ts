import readline from "readline-promise";
import { Teatro } from "./teatro";

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
  //console.clear();
  console.log('')
  console.log('----------- 🏟 TEATRO COLISEO 🏟 -----------');
  console.log('------------------------------------------')
  console.log('')
  console.log('1 · 🎭🎫 PROGRAMACIÓN ACTUAL')
  console.log('')
  console.log('2 · 💺✔ LOCALIDAD DISPONIBLE')
  console.log('')
  console.log('3 · 💺✖ LOCALIDAD OCUPADA')
  console.log('')
  console.log('4 · 💺🏷 VENDER LOCALIDAD')
  console.log('')
  console.log('5 · 💺🚫 CANCELAR LOCALIDAD')
  console.log('')
  console.log('6 · 💺❔ CONSULTAR LOCALIDAD')
  console.log('')
  console.log('7 · 📊💶 CÁLCULO DE RECAUDACIÓN')
  console.log('')
  console.log('8 · ❌ SALIR')
  console.log('')
  console.log('------------------------------------------')
  console.log('')

  const opcion = await rlp.questionAsync('Introduzca la opción que desee mediante \nel número correspondiente y pulse "Intro": ');

  if(opcion === "1") {
    console.clear()
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 1 ----------------')
    console.log('')
    console.log('------ 🎭🎫 PROGRAMACIÓN ACTUAL 🎭🎫 -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
    teatro.verProgramacionActual();
    await rlp.questionAsync('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('')
    console.log('↩ Pulse "Intro" para volver atrás.')
  }

  else if(opcion === "2") {
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 2 ----------------')
    console.log('')
    console.log('------ 💺✔ LOCALIDAD DISPONIBLE 💺✔ -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }

  else if(opcion === "3") {
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 3 ----------------')
    console.log('')
    console.log('------ 💺✖ LOCALIDAD OCUPADA 💺✖ -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }

  else if(opcion === "4") {
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 4 ----------------')
    console.log('')
    console.log('------ 💺🏷 VENDER LOCALIDAD 💺🏷 -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }

  else if(opcion === "5") {
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 5 ----------------')
    console.log('')
    console.log('------ 💺🚫 CANCELAR LOCALIDAD 💺🚫 -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }

  else if(opcion === "6") {
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 6 ----------------')
    console.log('')
    console.log('------ 💺❔ CONSULTAR LOCALIDAD 💺❔ -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }

  else if(opcion === "7") {
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('---------------- OPCIÓN 7 ----------------')
    console.log('')
    console.log('------ 💶 CÁLCULO DE RECUADACIÓN 💶 -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }

  else {
    console.log('')
    console.log('')
    console.log('------------------------------------------')
    console.log('----- ⚠ No existe esta opción ⚠ -----')
    console.log('------------------------------------------')
    console.log('')
    console.log('')
  }


} while (opcion !== '8');

console.log("salir");

//cerrar readline
rlp.close();
}

main();
