// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (!amigo){
        alert("Por favor, inserte un nombre")
    }
    amigos.push(amigo);
    limpiar();
}

function limpiar(){
    document.getElementById("amigo").value = '';
}