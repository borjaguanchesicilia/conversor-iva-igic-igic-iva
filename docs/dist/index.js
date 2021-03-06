"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var valorResultado = 0;
var costeConImpuesto = 0;
var costeSinImpuesto = 0;
var impuestoAplicado = 0;
function iniciarConversor(valorInicio, conversion) {
    conversor(valorInicio, conversion);
    mostrarResultado(conversion);
}
function conversor(valorInicio, conversion) {
    const iva = 0.21;
    const igic = 0.07;
    if (conversion == "IGIC") {
        costeSinImpuesto = valorInicio / iva;
        impuestoAplicado = costeSinImpuesto * igic;
        valorResultado = costeSinImpuesto + impuestoAplicado;
    }
    else {
        costeSinImpuesto = valorInicio / igic;
        impuestoAplicado = costeSinImpuesto * iva;
        valorResultado = costeSinImpuesto + impuestoAplicado;
    }
    return valorResultado;
}
exports.conversor = conversor;
function mostrarResultado(tipo) {
    let divTarjeta = document.getElementById("tarjeta");
    divTarjeta.innerHTML = "";
    let resultado = `<div class='row'>
            <div class='column'>
                <h2> Conversión: </h2>
                <hr>
            </div>
        </div>`;
    if (tipo == "IGIC") {
        resultado +=
            `<div class='row'>
                <div class='column'>
                    <h3> <i> IVA aplicado: </i> ${redondeo(costeConImpuesto)} € </h3>
                    <h3> <i> Coste sin IVA: </i> ${redondeo(costeSinImpuesto)} € </h3>
                    <h3> <i> IGIC a aplicar: </i> ${redondeo(impuestoAplicado)} € </h3>
                    <h3> <i> Coste + IGIC: </i> ${redondeo(valorResultado)} € </h3>
                </div>`;
    }
    else {
        resultado +=
            `<div class='row'>
                    <div class='column'>
                        <h3> <i> IGIC aplicado: </i> ${redondeo(costeConImpuesto)} € </h3>
                        <h3> <i> Coste sin IGIC: </i> ${redondeo(costeSinImpuesto)} € </h3>
                        <h3> <i> IVA a aplicar: </i> ${redondeo(impuestoAplicado)} € </h3>
                        <h3> <i> Coste + IVA: </i> ${redondeo(valorResultado)} € </h3>
                    </div>`;
    }
    divTarjeta.insertAdjacentHTML('beforeend', resultado);
}
function redondeo(numero) {
    return Math.round(numero * 100) / 100;
}
