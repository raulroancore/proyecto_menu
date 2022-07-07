import { Teatro } from './teatro';
import { pie } from './elementos/pie';
import { opcion1 } from './elementos/cabeceras';

export function mostrarMenu (): void {

    console.clear()
    
    console.log('')
    console.log('╒══════════════════════════════════════════╕')
    console.log('             🏟 TEATRO COLISEO 🏟')
    console.log('╘══════════════════════════════════════════╛')
    console.log('')
    console.log('   1 · 🎭🎫 PROGRAMACIÓN ACTUAL')
    console.log('')
    console.log('   2 · 💺🟢 LOCALIDAD DISPONIBLE')
    console.log('')
    console.log('   3 · 💺🔴 LOCALIDAD OCUPADA')
    console.log('')
    console.log('   4 · 💺🔖 VENDER LOCALIDAD')
    console.log('')
    console.log('   5 · 💺🚫 CANCELAR LOCALIDAD')
    console.log('')
    console.log('   6 · 💺❔ CONSULTAR LOCALIDAD')
    console.log('')
    console.log('   7 · 📊💶 CÁLCULO DE RECAUDACIÓN')
    console.log('')
    console.log('   8 · ❌ SALIR')
    console.log('')
    console.log('───────────────────────────────────────────')
    console.log('')
}
export async function gestionarOpcion(
    opcion: string,
    rlp,
    teatro: Teatro): Promise<void> {

        if(opcion === "1") {

            console.clear()

            //DISEÑO
                console.log('')
                console.log('╒══════════════════════════════════════════╕')
                console.log('             🏟 TEATRO COLISEO 🏟')
                console.log('                · OPCIÓN 1 ·\n')
                console.log('       🎭🎫 PROGRAMACIÓN ACTUAL 🎭🎫')
                console.log('╘══════════════════════════════════════════╛')
                console.log('\n \n')

            teatro.verProgramacionActual();

            //DISEÑO
                console.log('\n \n \n \n \n')
                console.log('──────────────────── ↩ ────────────────────')
                console.log('')
                console.log('   ↩ Pulse "Intro" para volver atrás.')

            await rlp.questionAsync('')

            }
        
            else if(opcion === "2") {

            console.clear()
  
            opcion1();

            teatro.mostrarLocalidad();

            pie();

            await rlp.questionAsync('')


          }
        
          else if(opcion === "3") {
            console.clear()
            console.log('')
            console.log('------------------------------------------')
            console.log('---------------- OPCIÓN 3 ----------------')
            console.log('')
            console.log('------ 💺✖ LOCALIDAD OCUPADA 💺✖ -----')
            console.log('------------------------------------------')
            console.log('')
            console.log('')
            teatro.mostrarLocalidadesOcupadas();
            await rlp.questionAsync('')
            
          }
        
          else if(opcion === "4") {
            console.clear()

            //DISEÑO
                console.log('')
                console.log('╒══════════════════════════════════════════╕')
                console.log('             🏟 TEATRO COLISEO 🏟')
                console.log('                · OPCIÓN 4 ·\n')
                console.log('       💺🔖 VENDER LOCALIDAD 💺🔖')
                console.log('╘══════════════════════════════════════════╛')
                console.log('\n \n')

            teatro.venderLocalidad(rlp); Promise<void>;

/*            //DISEÑO
                console.log('\n \n \n \n \n')
                console.log('──────────────────── ↩ ────────────────────')
                console.log('')
                console.log('   ↩ Pulse "Intro" para volver atrás.')
*/
            await rlp.questionAsync('')
          }
        
          else if(opcion === "5") {
            console.clear()
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
            console.clear()
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
            console.clear()
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
            console.clear()
            console.log('')
            console.log('')
            console.log('------------------------------------------')
            console.log('----- ⚠ No existe esta opción ⚠ -----')
            console.log('------------------------------------------')
            console.log('')
            console.log('')
          }        
    }