// Función para cargar el Header
export function loadHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    header.innerHTML = `
        <header class="main-header scrolled" id="header"> <div class="logo">
                <img src="../static/img/logo.png" alt="Desi' Fashion">
            </div>
            
            <div class="header-actions">
                <div class="cart-icon">
                    <a href="#"><i class="fas fa-shopping-bag"></i> <span id="cart-count">0</span></a>
                </div>
                <div class="hamburger" id="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </div>

            <nav class="nav-menu" id="nav-menu">
                <a href="inicio.html">Catálogo</a>
                <a href="nosotras.html">Nosotras</a>
            </nav>
        </header>
    `;
}

// Función para cargar el Footer
export function loadFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2024 Desi' Fashion - Tienda Femenina</p>
            <div class="redes">
                <a href="#">Instagram</a>
                <a href="#">WhatsApp</a>
            </div>
        </div>
    `;
}