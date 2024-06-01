

//clase objeto cliente con sus parametros
class Cliente {
    constructor(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit){
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigopostal = codigopostal;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.dni = dni;
        this.cuit = cuit;
    }
}

//
class CarteraClientes {
    constructor(clientes){
        this.clientes = clientes;
    }
    //usa el metodo push para agregar un nuevo cliente a clienteNuevo
    agregar(clienteNuevo){
        this.clientes.push(clienteNuevo);
    }
}

//instancia de CarteraClientes inicializa una lista vacia
let baseClientes = new CarteraClientes([]);


function ingresar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let domicilio = document.getElementById("domicilio").value;
    let codigopostal = Number(document.getElementById("codigopostal").value);
    let telefono = Number(document.getElementById("telefono").value);
    let dni = Number(document.getElementById("dni").value);
    let cuit = Number(document.getElementById("cuit").value);
    document.getElementById("correcto").innerText = '';
    if (document.getElementById('guardar').value == "Agregar"){
        let validar = (() =>{
            let mensaje = "";
            if (nombre == "") {
                mensaje += "Ingrese un nombre" + '\n';
            }
            if (apellido == "") {
                mensaje += "Ingrese un apellido" + '\n';
            }
            if (domicilio == "") {
                mensaje += "Ingrese un domicilio" + '\n';
            }
            if (codigopostal == "") {
                mensaje += "Ingrese un código postal" + '\n';
            }
            if (telefono == "") {
                mensaje += "Ingrese un teléfono" + '\n';
            }
            if (dni == "") {
                mensaje += "Ingrese un DNI" + '\n';
            }
            if (cuit == "") {
                mensaje += "Ingrese un CUIT" + '\n';
            }
            function checkDNI() {
                return dni; /* ESTO ES LO QUE HAY QUE BUSCAR EN LA BASEDECLIENTES*/
            }
            const found = baseClientes.clientes.findIndex(res => {
                return res.dni === checkDNI();
            })
            console.table(`===========>>>>>> ${found}`);
            if (found > -1){
                mensaje = "No puede ingresar un Cliente existente, puede modificarlo.";
            }
            let parrafo_errores = document.getElementById("mensaje");
            parrafo_errores.innerText = mensaje;
            return mensaje == "" ? true : false;
        })
        if (validar()) {
            let nuevo = new Cliente(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit);
            baseClientes.agregar(nuevo);
            document.getElementById("correcto").innerText = `Cliente agregado correctamente`;
            document.getElementById("formulario").reset();
            console.table(baseClientes.clientes);
        }
        document.getElementById("clientes-tbody").innerText = "";
    }else{
        let validarmodificacion = (() =>{
            let mensaje = "";
            if (nombre == "") {
                mensaje += "Ingrese un nombre" + '\n';
            }
            if (apellido == "") {
                mensaje += "Ingrese un apellido" + '\n';
            }
            if (domicilio == "") {
                mensaje += "Ingrese un domicilio" + '\n';
            }
            if (codigopostal == "") {
                mensaje += "Ingrese un código postal" + '\n';
            }
            if (telefono == "") {
                mensaje += "Ingrese un teléfono" + '\n';
            }
            if (dni == "") {
                mensaje += "Ingrese un DNI" + '\n';
            }
            if (cuit == "") {
                mensaje += "Ingrese un CUIT" + '\n';
            }
            let parrafo_errores = document.getElementById("mensaje");
            parrafo_errores.innerText = mensaje;
            return mensaje == "" ? true : false;
        })

        if (validarmodificacion()) {
            function checkDNI() {
                return dni; /* ESTO ES LO QUE HAY QUE BUSCAR EN LA BASEDECLIENTES*/
            }
            const found = baseClientes.clientes.findIndex(res => {
                return res.dni === checkDNI();
            })
            console.table(`===========>>>>>> ${found}`);
            let nuevo = new Cliente(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit);
            baseClientes.clientes.splice(found, 1, nuevo);
            document.getElementById("correcto").innerText = `Cliente modificado correctamente`;
            document.getElementById("formulario").reset();
            console.table(baseClientes.clientes);
        }
        document.getElementById("clientes-tbody").innerText = "";
        document.getElementById('guardar').value = "Agregar";
    }
}

function listar(){
        document.getElementById("mensaje").innerText= "";
        let resultado = document.getElementById("clientes-tbody");
        let resultado2 = document.getElementById("clientessimple-tbody");
    if (baseClientes.clientes ==""){
        resultado.innerHTML = "No ha ingresado ningún cliente aún";
    } else {
        document.getElementById("clientes-tbody").innerHTML = ""
        baseClientes.clientes.forEach(clientes => resultado.innerHTML += `
        <tr>
            <td>${clientes.apellido}, ${clientes.nombre}</td>
            <td>${clientes.domicilio}</td>
            <td>${clientes.codigopostal}</td>
            <td>${clientes.telefono}</td>
            <td>${clientes.dni}</td>
            <td>${clientes.cuit}</td>
            <td>
                <button id="${clientes.dni}" type="button" onclick="cargar(this.id)" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                <button id="${clientes.dni}" type="button" onclick="eliminar(this.id)" class="btn btn-outline-light btn-sm"><i class="bi bi-trash3-fill text-danger"></i></button>
            </td>    
        </tr>`);
        /**/
        document.getElementById("clientessimple-tbody").innerHTML = ""
        baseClientes.clientes.forEach(clientes => resultado2.innerHTML += `
        <tr>
            <td>${clientes.apellido}, ${clientes.nombre}</td>
            <td>${clientes.cuit}</td>
        </tr>`);
    
        document.getElementById("correcto").innerText = "";
    }
}

// Clientes predefinidos para pruebas
function basenovacia(){
    let nombre = 'Laura';
    let apellido = 'Ascacibar';
    let domicilio = 'Loredo 123';
    let codigopostal = 1113;
    let telefono = '11554477';
    let dni = 23345465;
    let cuit = 2323345463;
    let nuevo = new Cliente(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit);
    baseClientes.agregar(nuevo);

    let nombre1 = 'Jesus';
    let apellido1 = 'Diaz';
    let domicilio1 = 'Rivadavia 8200';
    let codigopostal1 = 1403;
    let telefono1 = '+5491159264703';
    let dni1 = 33456167;
    let cuit1 = 20334561674;
    let nuevo1 = new Cliente(nombre1, apellido1, domicilio1, codigopostal1, telefono1, dni1, cuit1);
    baseClientes.agregar(nuevo1);

    let nombre2 = 'Lautaro';
    let apellido2 = 'Gomez';
    let domicilio2 = 'Yerbal 45';
    let codigopostal2 = 1406;
    let telefono2 = '11332288';
    let dni2 = 23457856;
    let cuit2 = 20234578564;
    let nuevo2 = new Cliente(nombre2, apellido2, domicilio2, codigopostal2, telefono2, dni2, cuit2);
    baseClientes.agregar(nuevo2);
}
function cargar(id){
    function checkDNI(dni) {
        return dni = parseInt(id); /* ESTO ES LO QUE HAY QUE BUSCAR EN LA BASEDECLIENTES*/
    }
    const found = baseClientes.clientes.findIndex(res => {
        return res.dni === checkDNI();
    })
    console.log(id);
    console.table(baseClientes.clientes[found]);
    document.getElementById('nombre').value = baseClientes.clientes[found].nombre;
    document.getElementById('apellido').value = baseClientes.clientes[found].apellido;
    document.getElementById('domicilio').value = baseClientes.clientes[found].domicilio;
    document.getElementById('codigopostal').value = baseClientes.clientes[found].codigopostal;
    document.getElementById('telefono').value = baseClientes.clientes[found].telefono;
    document.getElementById('dni').value = baseClientes.clientes[found].dni;
    document.getElementById('cuit').value = baseClientes.clientes[found].cuit;
    document.getElementById('guardar').value = 'Modificar';
}

function eliminar(id){
    function checkDNI(dni) {
        return dni = parseInt(id); /* ESTO ES LO QUE HAY QUE BUSCAR EN LA BASEDECLIENTES*/
    }
    const found = baseClientes.clientes.findIndex(res => {
        return res.dni === checkDNI();
    })
    console.log(id);
    console.table(baseClientes.clientes[found]);
    baseClientes.clientes.splice(found, 1);
    listar();
}
function segundolistado(){
    listar()
    let tablasimple = document.getElementById('tablasimple').hidden;
    if (tablasimple == true) {
        console.log('tabla simple escondida')
        document.getElementById("tablasimple").hidden = false;
        document.getElementById("tablacompuesta").hidden = true;
    }else{
        console.log('tabla compuesta escondida')
        document.getElementById("tablasimple").hidden = true;
        document.getElementById("tablacompuesta").hidden = false;
    }
}
console.table(baseClientes);