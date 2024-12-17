const boton = document.querySelector("#submit")

function validarFormulario() {
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const mensaje = document.querySelector('#mensaje');


    if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
        alert("Por favor, completa todos los campos del formulario.")
        return false;
    } else {

        alert("Formulario enviado correctamente.")
        return true;
    }
}
boton.addEventListener("click", validarFormulario)







