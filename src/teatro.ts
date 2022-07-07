import { Localidad } from './modelos/localidad';
import { obtenerPrecioEntrada, obtenerTipo } from './utilidades';

export class Teatro {

    localidades: Localidad[];

    // el constructor se ejecuta cuando se crea un objeto de esta clase
    constructor() {
        this.localidades = [];

        for(let j=0; j<5; j++){ //j representa a la fila
            for(let i=0; i<10; i++) { // i representa columna
                this.localidades.push({
                    columna: i,
                    fila: j,
                    estaOcupada: false,
                    nombreReserva: undefined,
                    edadReserva: undefined,
                    telefonoReserva: undefined
                });        
            }
        }        
    }

// OPCIÓN 1
    verProgramacionActual() {
        console.log('📅 MIÉRCOLES 5 / 07 / 2022 --- HOY')
        console.log('')
        console.log('')
        console.log('--------- LA CENA DE LOS IDIOTAS ---------')
        console.log('')
        console.log('SINOPSIS: Pierre Brochant y sus amigos organizan todos los miércoles una cena que es una especie de apuesta: el que invite al idiota más extraordinario será el ganador. Una noche, Brochant está pletórico: ha encontrado una auténtica joya, un idiota integral. Se trata de François Pignon, un chupatintas del Ministerio de Finanzas con una gran pasion por las construcciones hechas a base de cerillas. Lo que Brochant ignora es que Pignon es un auténtico gafe, un maestro en el arte de provocar catástrofes.')
        console.log('')
        console.log('------------------------------------------')
        console.log('')
        console.log('🎭 GÉNERO: COMEDIA')
        console.log('')
        console.log('⏱ DURACIÓN: 95 min')
        console.log('')
        console.log('📍 UBICACIÓN: C/SOL, 45, SEVILLA')
        console.log('')
        console.log('💶 PRECIO: 30 €')

    }
// OPCIÓN 2
    mostrarLocalidad(): void {

        let contador = 1;

        for(let j=0; j<5; j++) {

        let msg = '';

        for(let i=1; i<10; i++) {
            const localidad = this.localidades[contador];
            const fila = localidad.fila;
            const columna = localidad.columna;
//          const ocupadaOLibre = (localidad.estaOcupada)
//              ? '✗'
//              : '✓';
            const ocupadaOLibreEmoji = (localidad.estaOcupada)
                ? '🔴'
                : '🟢';
                msg += `|${ocupadaOLibreEmoji}${fila}${columna}| `;
                contador++
        }
            console.log(msg);
            console.log('');    
        }}
// OPCIÓN 3
    mostrarLocalidadesOcupadas(): void {

            const localidadesOcupadas = this.localidades.filter(
                localidad => localidad.estaOcupada);
    
            if(localidadesOcupadas.length === 0) {
                console.log('🟢 Todas las localidades libres 🟢');
                return;
            }
// en este punto del programa, sabemos que hay al menos una localidad ocupada
            for (const localidad of localidadesOcupadas) {

                const tipo = obtenerTipo(localidad.edadReserva);

                console.log(`${localidad.fila}${localidad.columna}\n\n
                💳 NOMBRE: ${localidad.nombreReserva}\n\n
                ☎️ TLFN.: ${localidad.telefonoReserva}\n\n
                🧮 NIVEL: ${tipo}`);
        }
    }       
//OPCIÓN 4
    async venderLocalidad(rlp): Promise<void> {
// solicitamos la fila
        const fila: string = await rlp.questionAsync('¿Qué fila desea? Introduzca de 1 a 5\n');
// validación de la fila
        const filaNumero = Number(fila); {
        if((filaNumero < 1 || filaNumero > 5))
        console.log('⚠ NO EXISTE LA FILA INDICADA ⚠');
        ;
    }
// solicitamos la columna
    const columna: string = await rlp.questionAsync('¿Qué butaca? Introduzca de 1 a 10\n\n  ');
// validamos la columna
        const columnaNumero = +columna;
        if(columnaNumero < 0 || columnaNumero > 9) {
            console.log('⚠ NO EXISTE LA BUTACA INDICADA ⚠');
            return;            
        }
// solicitamos el nombre de la persona que reserva la localidad
        const nombre: string = await rlp.questionAsync('Indique su nombre:\n\n  ')
    // validacion
        if(nombre.length < 3) {
            console.log('⚠ ERROR ⚠ Introduzca al menos tres caracteres.');
            return;
        }
// telefono
        const telefonoNumero = +telefono;
        if(isNaN(telefonoNumero)) {
            console.log('⚠ ERROR ⚠ Introduzca caracteres numéricos.');
        }
        if(telefono.length !== 9) {
            console.log('⚠ ERROR ⚠ Cantidad de caracteres numéricos no válida.');
        }
// edad
        const edad: string = await rlp.questionAsync('Indique su edad:\n\n  ');
        const edadNumero = +edad;
        if(isNaN(edad)) {
            console.log('⚠ ERROR ⚠ Indique su edad numericamente.');
        }
    // TODOS LOS DATOS SON CORRECTOS
    //vericamos si la localidd está disponible
    const localidadAReservar = this.localidades.find(
        localidad => (
            (localidad.fila === filaNumero) && (localidad.columna === columnaNumero);
            console.log(`|💺🟢${fila}${columna}|`);2
            
            console.log(`La localidad deseada está libre`);
            return;
        ) )
    
    if(localidadAReservar.estaOcupada) {
        console.log(`|💺🔴${fila}${columna}|`);
        console.log(`La localidad deseada está ocupada`);
        return;
    }
 // en este punto del programa, todos los datos son correctos y, además, la localidad a reservar está libre
        localidadAReservar.estaOcupada = true;
        localidadAReservar.nombreReserva = nombre;
        localidadAReservar.edadReserva = edadNumero;
        localidadAReservar.telefonoReserva = telefonoNumero;

        const tipo = obtenerTipo(edadNumero);
        const precioEntrada = obtenerPrecioEntrada(tipo);

        console.log(`La localidad |💺${fila}${columna}| se ha vendido a |   💳 ${nombre} | por |💶 ${precioEntrada}€ |`);    
    }
// opcion 5

// opcion 6
    async



}
