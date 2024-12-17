let carrito = [];

const agregarAlCarrito = (nombre, precio) =>{

    carrito.push({nombre, precio})
    
    actualizarContador()
    
    alert(`Agregaste: ${nombre} al carrito`)
}

const actualizarContador = ()=>{

    document.querySelector("#contador-carrito").textContent = carrito.length
}

window.addEventListener("BeforeUnload", ()=>{

    localStorage.setItem("carrito", JSON.stringify(carrito))
});