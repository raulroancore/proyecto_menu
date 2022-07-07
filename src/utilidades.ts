export function obtenerTipo (edad: number): string {

    if(edad >= 0 && edad <= 12) {
        return '👶 INFANTE (50%)'
    }
    else if(edad >= 13 && edad <= 17) {
        return '🧒 MENOR (20%)'
    }
    else if(edad >= 18 && edad <= 64) {
        return '🧑 ADULTO (0%)'
    }
    else if(edad >= 65) {
        return '🧓 ANCIANO (66%)'
    }
}

export function obtenerPrecioEntrada(tipo: string): number {
    const precioEntrada = 30;

    if(tipo === '👶 INFANTE (50%)') {
        return precioEntrada * 0.5;
    }
    else if(tipo === '🧒 MENOR (20%)') {
        return precioEntrada * 0.8;
    }
    else if(tipo === '🧑 ADULTO (0%)') {
        return precioEntrada;
    }
    else if(tipo === '🧓 ANCIANO (66%)') {
        return precioEntrada * 0.33;
    }
    return precioEntrada
}