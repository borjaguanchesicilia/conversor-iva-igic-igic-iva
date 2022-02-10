"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversor = exports.comprobarValores = void 0;
function comprobarValores(valorInicio, conversion) {
    try {
        if (typeof valorInicio !== "number") {
            throw 888888;
        }
    }
    catch (exception) {
        return Number(exception);
    }
    try {
        if (conversion != 0 && conversion != 1) {
            throw 999999;
        }
    }
    catch (exception) {
        return Number(exception);
    }
    return conversor(valorInicio, conversion);
}
exports.comprobarValores = comprobarValores;
function conversor(valorInicio, conversion) {
    const iva = 0.21;
    const igic = 0.07;
    let valorResultado = 0;
    if (conversion == 0) { // IVA --> IGIC
        let ivaAplicado = valorInicio * iva;
        let valorSinIva = valorInicio - ivaAplicado;
        let igicAplicado = valorSinIva * igic;
        valorResultado = valorSinIva + igicAplicado;
    }
    else { // IGIC --> IVA
        let igicAplicado = valorInicio * igic;
        let valorSinIgic = valorInicio - igicAplicado;
        let ivaAplicado = valorSinIgic * iva;
        valorResultado = valorSinIgic + ivaAplicado;
    }
    return valorResultado;
}
exports.conversor = conversor;
console.log(conversor(25, 1));
