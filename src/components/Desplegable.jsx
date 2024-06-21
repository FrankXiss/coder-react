import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Desplegable = () => {

    return (
        <div>
            <div className="dropdown ">
                <p className="dropbtn menu-link">Productos
                    <i className="fa fa-caret-down"></i>
                </p>
                <ul className="dropdown-content">
                    <li><Link className="drop-item" to="/catalogo/Celulares">Celulares</Link></li>
                    <li><Link className="drop-item" to="/catalogo/Laptops">Laptops</Link></li>
                    <li><Link className="drop-item" to="/catalogo/Perifericos">Perifericos</Link></li>
                    <li><Link className="drop-item" to="/catalogo/Componentes">Componentes</Link></li>
                    <li><Link className="drop-item" to="/catalogo/SmartTV">SmartTVs</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Desplegable