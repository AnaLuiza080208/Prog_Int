// function mostrarOla(){
//     let nome = document.getElementById("nome").value;
//     document.getElementById("resposta").innerHTML = "Olá " + nome;
// }

const  mostrarOla = () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerHTML = "Olá " + nome;
    
}

const mostrar = document.getElementById("mostrar");

mostrar.addEventListener("click", mostrarOla)