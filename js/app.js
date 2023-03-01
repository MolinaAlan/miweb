var botones = document.querySelectorAll('.btn-expandir');
var textos_expandir = document.querySelectorAll('.text-expandir');

botones.forEach((elemento, clave) => {
    elemento.addEventListener('click', ()=>{
    textos_expandir[clave].classList.toggle("abrir_cerrar")
       })
});

