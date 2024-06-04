import CartWidget from "./CartWidget.jsx";
function NavBar() {
    return (
        <header>
            <h1>CriptoTech</h1>
            <nav class="navBar">
                <a class="navItem" href="#">Inicio</a>
                <a class="navItem" href="#">Productos</a>
                <a class="navItem" href="#">Contacto</a>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar