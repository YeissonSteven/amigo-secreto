// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos=[];

function agragarAmigos(){
    if (document.getElementById('amigo') == ""){
        alert("nombre invalido, por favor introduzca un nombre valido");
    }else{
        nombresAmigos.push(document.getElementById('amigo'));
        document.getElementById("amigo").value+'';
    }
    
}


