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

function numeroAleatorioDeAmigo(){
    let numeroAleatorioDeAmigo = Math.floor(Math.random()*amigos.length)+1;
    return numeroAleatorioDeAmigo;
}

function sortearAmigo(){
    if (!amigos){
        alert("No hay amigos en la lista.")
    }
    let amigoAleatorio = amigos[numeroAleatorioDeAmigo()-1];
    let casillaResultado = document.getElementById("resultado");
    casillaResultado.innerHTML = `<li>${amigoAleatorio}</li>`;
}