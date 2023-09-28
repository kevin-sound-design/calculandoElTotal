const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
const totalSpan = document.querySelector(".valor-total");
const cantidadSpan=document.querySelector(".cantidad")
let contador = 0;
let total = 0;
actualizar();

const incremento = () => {

    contador++;
    total = precio * contador;
    actualizar();

}

const decremento = () => {

    
    if (contador >0){

        contador--;

        total = precio * contador;
         
    }

    actualizar();

    
}

function actualizar(){

    totalSpan.innerHTML = total;
    cantidadSpan.innerHTML=contador;  

}

