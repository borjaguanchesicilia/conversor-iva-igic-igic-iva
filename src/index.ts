export function comprobarValores(valorInicio:any, conversion:any): number{

    try{
        if (typeof valorInicio !== "number"){throw 888888;}
    }catch (exception){
        return Number(exception);
    }
         
    try{
        if (conversion != 0 && conversion != 1){throw 999999;}
    }catch (exception){
        return Number(exception);
    }

    return conversor(valorInicio, conversion)
}


export function conversor(valorInicio:number, conversion:number): number{

    const iva:number = 0.21; const igic:number = 0.07;

    let valorResultado:number = 0;      
        
    if (conversion == 0){ // IVA --> IGIC
        let ivaAplicado:number = valorInicio*iva;
        let valorSinIva:number = valorInicio - ivaAplicado;
        let igicAplicado:number = valorSinIva*igic; valorResultado = valorSinIva + igicAplicado;
    }     
    else{ // IGIC --> IVA
        let igicAplicado:number = valorInicio*igic;
        let valorSinIgic:number = valorInicio - igicAplicado;
        let ivaAplicado:number = valorSinIgic*iva; valorResultado = valorSinIgic + ivaAplicado;
    }  

    return valorResultado;
}

console.log(conversor(25, 1));