// Evitar que el navegador recuerde la posición anterior al recargar
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
}

window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});

console.log("Consultoría Dietética Valenzuela");

/* ==========================================================
   SCRIPT PRINCIPAL - CONSULTORÍA DIETÉTICA VALENZUELA
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Desplazamiento suave (Smooth Scroll) para los enlaces del menú y botones
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const destinoId = this.getAttribute('href');
            
            // Verificamos si el enlace apunta a una sección existente en la página
            if (destinoId.length > 1 && document.querySelector(destinoId)) {
                e.preventDefault();
                const seccionDestino = document.querySelector(destinoId);
                
                seccionDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Resaltar el enlace activo del menú según la sección visible al hacer scroll
    const secciones = document.querySelectorAll('section[id], header + div + section[id]');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let scrollPosWindow = window.scrollY + 200;

        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop;
            const seccionHeight = seccion.offsetHeight;
            const seccionId = seccion.getAttribute('id');

            if (scrollPosWindow >= seccionTop && scrollPosWindow < seccionTop + seccionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${seccionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

});
