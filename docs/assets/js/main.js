document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sidebar-header');
    const openBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');

    // Función para abrir/cerrar
    const toggleMenu = () => {
        const isOpen = header.classList.contains('is-open');
        
        if (isOpen) {
            header.classList.remove('is-open');
            openBtn.setAttribute('aria-expanded', 'false');
            closeBtn.setAttribute('aria-expanded', 'false');
        } else {
            header.classList.add('is-open');
            openBtn.setAttribute('aria-expanded', 'true');
            closeBtn.setAttribute('aria-expanded', 'true');
        }
    };

    openBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});