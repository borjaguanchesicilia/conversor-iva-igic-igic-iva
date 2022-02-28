var valorResultado:number = 0; var impuestoAplicado:number = 0; var costeSinImpuesto:number = 0; var impuestoAplicadar:number = 0;


function iniciarConversor(valorInicio:number, conversion:string){
    conversor(valorInicio, conversion);
    mostrarResultado(conversion);
}


export function conversor(valorInicio:number, conversion:string): number{

    const iva:number = 1.21; const igic:number = 1.07;

    if (conversion == "IGIC"){ // IVA --> IGIC
        costeSinImpuesto = valorInicio / iva;
        impuestoAplicado = valorInicio - costeSinImpuesto;
        impuestoAplicadar = costeSinImpuesto * (igic - 1); 
        valorResultado = costeSinImpuesto + impuestoAplicadar;
    }     
    else{ // IGIC --> IVA
        costeSinImpuesto = valorInicio / igic;
        impuestoAplicado = valorInicio - costeSinImpuesto;
        impuestoAplicadar = costeSinImpuesto * (iva - 1);
        valorResultado = costeSinImpuesto + impuestoAplicadar;
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
                    <h3> <i> IVA aplicado: </i> ${redondeo(impuestoAplicado)} € </h3>
                    <h3> <i> Coste sin IVA: </i> ${redondeo(costeSinImpuesto)} € </h3>
                    <h3> <i> IGIC a aplicar: </i> ${redondeo(impuestoAplicadar)} € </h3>
                    <h3> <i> Coste + IGIC: </i> ${redondeo(valorResultado)} € </h3>
                </div>`;
                    
    }
    else{
        resultado +=  
              `<div class='row'>
                    <div class='column'>
                        <h3> <i> IGIC aplicado: </i> ${redondeo(impuestoAplicado)} € </h3>
                        <h3> <i> Coste sin IGIC: </i> ${redondeo(costeSinImpuesto)} € </h3>
                        <h3> <i> IVA a aplicar: </i> ${redondeo(impuestoAplicadar)} € </h3>
                        <h3> <i> Coste + IVA: </i> ${redondeo(valorResultado)} € </h3>
                    </div>`;
    }

    divTarjeta.insertAdjacentHTML('beforeend', resultado);
}


export function redondeo(numero:number) {

    return Math.round(numero  * 100) / 100;
}