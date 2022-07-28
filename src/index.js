"use strict";
exports.__esModule = true;
var valorResultado = 0;
var impuestoAplicado = 0;
var costeSinImpuesto = 0;
var impuestoAplicadar = 0;
function iniciarConversor(valorInicio, conversion) {
    conversor(valorInicio, conversion);
    mostrarResultado(conversion);
}
function conversor(valorInicio, conversion) {
    var iva = 1.21;
    var igic = 1.07;
    if (conversion == "IGIC") {
        costeSinImpuesto = valorInicio / iva;
        impuestoAplicado = valorInicio - costeSinImpuesto;
        impuestoAplicadar = costeSinImpuesto * (igic - 1);
        valorResultado = costeSinImpuesto + impuestoAplicadar;
    }
    else {
        costeSinImpuesto = valorInicio / igic;
        impuestoAplicado = valorInicio - costeSinImpuesto;
        impuestoAplicadar = costeSinImpuesto * (iva - 1);
        valorResultado = costeSinImpuesto + impuestoAplicadar;
    }
    console.log(costeSinImpuesto, impuestoAplicado, impuestoAplicadar, valorResultado);
    return valorResultado;
}
exports.conversor = conversor;
function mostrarResultado(tipo) {
    var divTarjeta = document.getElementById("tarjeta");
    divTarjeta.innerHTML = "";
    var resultado = "<div class='row'>\n            <div class='column'>\n                <h2> Conversi\u00F3n: </h2>\n                <hr>\n            </div>\n        </div>";
    if (tipo == "IGIC") {
        resultado +=
            "<div class='row'>\n                <div class='column'>\n                    <h3> <i> IVA aplicado: </i> " + redondeo(impuestoAplicado) + " \u20AC </h3>\n                    <h3> <i> Coste sin IVA: </i> " + redondeo(costeSinImpuesto) + " \u20AC </h3>\n                    <h3> <i> IGIC a aplicar: </i> " + redondeo(impuestoAplicadar) + " \u20AC </h3>\n                    <h3> <i> Coste + IGIC: </i> " + redondeo(valorResultado) + " \u20AC </h3>\n                </div>";
    }
    else {
        resultado +=
            "<div class='row'>\n                    <div class='column'>\n                        <h3> <i> IGIC aplicado: </i> " + redondeo(impuestoAplicado) + " \u20AC </h3>\n                        <h3> <i> Coste sin IGIC: </i> " + redondeo(costeSinImpuesto) + " \u20AC </h3>\n                        <h3> <i> IVA a aplicar: </i> " + redondeo(impuestoAplicadar) + " \u20AC </h3>\n                        <h3> <i> Coste + IVA: </i> " + redondeo(valorResultado) + " \u20AC </h3>\n                    </div>";
    }
    divTarjeta.insertAdjacentHTML('beforeend', resultado);
}
function redondeo(numero) {
    return Math.round(numero * 100) / 100;
}
exports.redondeo = redondeo;
