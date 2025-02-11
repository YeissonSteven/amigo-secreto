// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos=[];

function agregarAmigo(){
    if (document.getElementById('amigo').value == ""){
        alert("nombre invalido, por favor introduzca un nombre valido");
    }else{
        nombresAmigos.push(document.getElementById('amigo').value);
        document.getElementById("amigo").value='';
        actualizarLista()
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (let index = 0; index < nombresAmigos.length; index++) {
        let newLi = document.createElement("li");
        newLi.textContent = `${nombresAmigos[index]}`
        lista.insertAdjacentElement("beforeend", newLi)
    }
}