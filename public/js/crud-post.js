export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async ( ) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async (id) => {
    fetch()
  
}

export const eliminarPublicacion = async (id) => {
    fetch()
  
}

// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {    
        const fechaISO = pub.fecha_publicacion;
        const fecha = new Date(fechaISO);
        const fechaFormateada = fecha.toLocaleString();
        registros += `
            <section class="d-flex gap-2 publicaciones fotos">
                <img src="${pub.url_imagen}" class="rounded" height="225" width="225">
                <div class="d-flex flex-column justify-content-between">
                    <h4><b>${pub.titulo}</b></h4>
                    <p>${pub.detalle}</p>
                    <p>Autor de la publicacion: ${pub.autor_publicacion}</p>
                    <p><b>Fecha de la publicacion:</b> ${fechaFormateada}</p>
                </div>
            </section>
        `
    });

    elemento.innerHTML = registros
}
