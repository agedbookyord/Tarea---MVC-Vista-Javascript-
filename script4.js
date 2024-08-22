
document.getElementById('formularioIngresoComentarios').addEventListener('submit', function(event) {

    const username = document.getElementById('usuario').value;
    const comment = document.getElementById('textoIngresado').value;
    const cardComentario = document.createElement('div');
    cardComentario.classList.add('comment-card', 'card', 'mt-3', 'mx-5');
    cardComentario.style.border = "5px solid #ffffff";
    cardComentario.style.padding = "10px";
    cardComentario.style.borderRadius = "5px";
   

    const divBoton = document.createElement('div');
    divBoton.classList.add('d-flex', 'justify-content-end');
    const boton = document.createElement("button");
    boton.classList.add('btn','btn-danger', 'btn-sm');
    boton.textContent = "🗑️";
    boton.style.fontSize = "12px";  
    boton.style.padding = "4px 8px"; 
    boton.style.width = "auto"; 
    boton.style.minWidth = "60px"; 
    
    divBoton.appendChild(boton);


    const mostrarUsuarioEnTarjeta = document.createElement('h5');
    mostrarUsuarioEnTarjeta.textContent = username;
    mostrarUsuarioEnTarjeta.classList.add('card-title');

    const mostrarComentarioEntarjeta = document.createElement('p');
    mostrarComentarioEntarjeta.textContent = comment;
    mostrarComentarioEntarjeta.classList.add('card-text');

    
    cardComentario.appendChild(mostrarUsuarioEnTarjeta);
    cardComentario.appendChild(mostrarComentarioEntarjeta);
    cardComentario.appendChild(divBoton);

    document.getElementById('seccionDeComentarios').appendChild(cardComentario);
    document.getElementById('formularioIngresoComentarios').reset();

    boton.addEventListener('click', function() {
        eliminarTarjeta(cardComentario)
    });
    

    function eliminarTarjeta(event) {
        const confirmar = confirm("Desea elimar el comentario")

        if(confirmar){
        cardComentario.remove(); 
    }
}
});
