/* onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 500);
}; */
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.min.js";
document.body.appendChild(sweetAlertScript);

sweetAlertScript.onload = () => {
    // Función para mostrar los mensajes de amor secuencialmente
    function showLoveMessages() {
        Swal.fire({
            title: 'Anini ❤️',
            text: 'Probablemente ya no sea el día.',
            icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Ajá...'
        }).then(() => {
            Swal.fire({
                title: 'Mi pupuchurra ❤️',
                text: 'Y tal vez estés trabajando ahorita.',
                icon: 'info',
                showConfirmButton: true,
                confirmButtonText: 'Continúa...'
            }).then(() => {
                Swal.fire({
                    title: 'Mi vida!❤️',
                    text: 'Pero quiero que sepas que te amo con todo el amor de mi vida. ❤️.',
                    icon: 'info',
                    showConfirmButton: true,
                    confirmButtonText: '❤️'
                }).then(() => {
                    // Después de mostrar los mensajes, iniciamos la animación de las flores
                    startAnimation();
                });
            });
        });
    }

    // Función para iniciar la animación de las flores
    function startAnimation() {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 500);
    }

    // Mostrar los mensajes de amor antes de iniciar la animación
    showLoveMessages();
};