var valorResultado:number = 0; var costeConImpuesto:number = 0; var costeSinImpuesto:number = 0; var impuestoAplicado:number = 0;


function iniciarConversor(valorInicio:number, conversion:string){
    conversor(valorInicio, conversion);
    mostrarResultado(conversion);
}


export function conversor(valorInicio:number, conversion:string): number{

    const iva:number = 0.21;
    const igic:number = 0.07;

    if (conversion == "IGIC"){ // IVA --> IGIC
        costeConImpuesto = valorInicio * iva;
        costeSinImpuesto = valorInicio - costeConImpuesto;
        impuestoAplicado = costeSinImpuesto * igic; valorResultado = costeSinImpuesto + impuestoAplicado;
    }     
    else{ // IGIC --> IVA
        costeConImpuesto = valorInicio * igic;
        costeSinImpuesto = valorInicio - costeConImpuesto;
        impuestoAplicado = costeSinImpuesto * iva; valorResultado = costeSinImpuesto + impuestoAplicado;
    }

    return valorResultado;
}


function mostrarResultado(tipo:string){

    let divTarjeta = document.getElementById("tarjeta")!; divTarjeta.innerHTML = "";
    let resultado:string = 
        `<div class='row'>
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
    else{
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


function redondeo(numero:number) {

    return Math.round(numero  * 100) / 100;
}