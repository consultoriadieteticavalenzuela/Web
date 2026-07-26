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
    const secciones = document.querySelectorAll('section[id]');
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

    // 3. Ocultar / Mostrar cabecera al hacer scroll
    let ultimoScroll = 0;
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            const scrollActual = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollActual > ultimoScroll && scrollActual > 100) {
                // Bajando: Ocultamos la cabecera desplazándola hacia arriba
                header.style.transform = 'translateY(-100%)';
            } else {
                // Subiendo: Mostramos la cabecera
                header.style.transform = 'translateY(0)';
            }
            ultimoScroll = scrollActual <= 0 ? 0 : scrollActual;
        });
    }

    // 4. Menú desplegable para móviles (Hamburguesa)
    const btnHamburguesa = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.nav-menu');
    const navEnlaces = document.querySelectorAll('.nav-menu a');

    if (btnHamburguesa && navMenu) {
        btnHamburguesa.addEventListener('click', () => {
            navMenu.classList.toggle('activo');
            // Cambiar icono entre barras y cruz
            const icono = btnHamburguesa.querySelector('i');
            if (navMenu.classList.contains('activo')) {
                icono.classList.remove('fa-bars');
                icono.classList.add('fa-xmark');
            } else {
                icono.classList.remove('fa-xmark');
                icono.classList.add('fa-bars');
            }
        });

        // Cerrar el menú automáticamente al hacer clic en un enlace del mismo
        navEnlaces.forEach(enlace => {
            enlace.addEventListener('click', () => {
                navMenu.classList.remove('activo');
                const icono = btnHamburguesa.querySelector('i');
                if (icono) {
                    icono.classList.remove('fa-xmark');
                    icono.classList.add('fa-bars');
                }
            });
        });
    }

});
