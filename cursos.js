let carrito = [];

const agregarAlCarrito = (nombre, precio) => {

    carrito.push({ nombre, precio })

    actualizarContador()

    alert(`Agregaste: ${nombre} al carrito`)
}

const actualizarContador = () => {

    document.querySelector("#contador-carrito").textContent = carrito.length
}

window.addEventListener("beforeunload", () => {
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
});