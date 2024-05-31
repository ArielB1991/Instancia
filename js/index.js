

class Cliente{
    constructor(nombre, apellido, domicilio, codigoPostal, telefono, dni, cuit){
        this.nombre= nombre;
        this.apellido= apellido;
        this.codigoPostal= codigoPostal;
        this.domicilio= domicilio;
        this.telefono= telefono;
        this.dni= dni;
        this.cuit= cuit;
    }
}

// class CarteraClientes
class ListaClientes{
    constructor(clientes){
        this.clientes=clientes;
    }

    agregar(clienteNuevo){
        this.clientes.push(clienteNuevo)
    }
}

let baseClientes= new ListaClientes([]);


function ingresar(){
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let domicilio= document.getElementById("domicilio").value;
    let codigoPostal= Number(document.getElementById("codigoPostal").value);
    let telefono= Number(document.getElementById("telefono").value);
    let dni= Number(document.getElementById("dni").value);
    let cuit= Number(document.getElementById("cuit").value);

    document.getElementById("correcto").innerHTML= '';

    if(document.getElementById('guardar').value == "Agregar"){
        let validar= (()=> {
            let mensaje= '';
            if(nombre == ""){
                mensaje += "Ingrese un nombre" + '\n';
            }

            if(apellido == ""){
                mensaje += "Ingrese el apellido" + '\n';
            }

            if(domicilio == ""){
                mensaje += "Ingrese el domicilio" + '\n';
            }

            if(domicilio == ""){
                mensaje += "Ingrese el domicilio" + '\n'
            }

            if(codigoPostal == ""){
                mensaje += "ingrese el codigo postal" + '\n';
            }

            if(telefono == ""){
                mensaje += "Ingrese el telefono" + '\n'
            }
            if``
        })
    }
}
