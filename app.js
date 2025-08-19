// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (!amigo){
        alert("Por favor, inserte un nombre")
    }
    amigos.push(amigo);
    limpiar();
    actualizarAmigos();
    console.log(amigos);
}

function limpiar(){
    document.getElementById("amigo").value = '';
}

function actualizarAmigos(){
    let lista = document.querySelector(".name-list");
    lista.innerHTML = "";
    for (let amigo = 0; amigo < amigos.length; amigo++) {
        let nuevoAmigo = `<li>${amigos[amigo]}</li>`;
        lista.innerHTML += nuevoAmigo;
    }

}