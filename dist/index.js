"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversor = void 0;
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
    if (conversion == "IGIC") { // IVA --> IGIC
        costeConImpuesto = valorInicio * iva;
        costeSinImpuesto = valorInicio - costeConImpuesto;
        impuestoAplicado = costeSinImpuesto * igic;
        valorResultado = costeSinImpuesto + impuestoAplicado;
    }
    else { // IGIC --> IVA
        costeConImpuesto = valorInicio * igic;
        costeSinImpuesto = valorInicio - costeConImpuesto;
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
                    <h3> <i> IVA aplicado: </i> ${costeConImpuesto} </h3>
                    <h3> <i> Coste sin IVA: </i> ${costeSinImpuesto} </h3>
                    <h3> <i> IGIC a aplicar: </i> ${impuestoAplicado} </h3>
                    <h3> <i> Coste + IGIC: </i> ${valorResultado} </h3>
                </div>`;
    }
    else {
        resultado +=
            `<div class='row'>
                    <div class='column'>
                        <h3> <i> IGIC aplicado: </i> ${costeConImpuesto} </h3>
                        <h3> <i> Coste sin IGIC: </i> ${costeSinImpuesto} </h3>
                        <h3> <i> IVA a aplicar: </i> ${impuestoAplicado} </h3>
                        <h3> <i> Coste + IVA: </i> ${valorResultado} </h3>
                    </div>`;
    }
    divTarjeta.insertAdjacentHTML('beforeend', resultado);
}
