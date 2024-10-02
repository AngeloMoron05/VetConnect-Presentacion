import React from 'react'
import './presentation.css'
import logo from './logo.png'

export default function Presentation() {
    return (
        <div className="landing-page">
            {/* Sección de cabecera */}
            <header className="hero-section">
                <img className="logoVet" src={logo} alt="logo" />
                <h1>VetConnect</h1>
            </header>

            <section className="screenshot-section">
                <img src="https://via.placeholder.com/600x400" alt="Captura de pantalla del software" />
                <div className='desP'>
                    <div className='des'>
                        <h1>DESCRIPCION</h1>
                        <p>VetConnect es la solución ideal para conectar a clientes con veterinarios de manera rápida, segura y eficiente, mejorando así el acceso a servicios veterinarios de calidad en todas las regiones.</p>
                        <p>El objetivo de VetConnect es mejorar el acceso a servicios veterinarios en todas las regiones, asegurando que cada animal reciba la atención que necesita, independientemente de su ubicación. La plataforma busca simplificar el proceso de búsqueda y consulta, promover el bienestar animal y ofrecer a los dueños de cualquier tipo de animal una herramienta práctica y accesible para gestionar la salud de sus animales.</p>
                    </div>
                </div>
            </section>

            {/* Sección de características */}
            <section className="features-section">
                <h1>CARACTERISTICAS</h1>
                <div className="features-list">
                    <div className="feature-item">
                        <h3>Fácil de Usar</h3>
                        <p>Interfaz intuitiva diseñada para ser simple y eficiente.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Alta Velocidad</h3>
                        <p>Procesa datos a la velocidad de la luz para resultados rápidos.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Soporte 24/7</h3>
                        <p>Siempre estamos aquí para ayudarte, sin importar la hora.</p>
                    </div>
                </div>
            </section>

            {/* Sección de testimonios */}
            <section className="tablaDatos">
                <h1>REQUERIMIENTOS DEL PRODUCTO</h1>
                <div className='tabla'>
                    <table>
                        <tr>
                            <th colSpan={2} className='title'>Servidor</th>
                        </tr>
                        <tr>
                            <th>Hardware</th>
                            <th>Software</th>
                        </tr>
                        <tr>
                            <td>
                                <b>PROCESADOR:</b> i5 o similar y superior.
                                <br></br>
                                <b>CPU:</b> Mínimo 4 núcleos o superior.
                                <br></br>
                                <b>RAM:</b> Mínimo 8 GB o superior.
                                <br></br>
                                <b>ALMACENAMIENTO:</b> Mínimo 100 GB. Se recomienda SSD por su velocidad.
                                <br></br>
                                <b>RED:</b> Conexión de al menos 1 Gbps.
                            </td>
                            <td>
                                <b>SISTEMA OPERATIVO:</b> Linux o Windows 10.
                                <br></br>
                                <b>BADE DE DATOS:</b> Sistema de Gestión de Base de Datos (DBMS): MySQL.
                                <br></br>
                                <br></br>
                                <b>LENGUAJE DE PROGRAMACION Y FRAMEWORK:</b>
                                <br></br>
                                <b>BACKEND:</b> PHP y framework Laravel.
                                <br></br>
                                <b>FRONTEND:</b> HTML, CSS, JavaScript y frameworks React y boostrap
                                <br></br>
                                <b>MIDDLEWARE:</b> Autenticación: Implementación de JWT.
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={2} className='title'>Clientes</th>
                        </tr>
                        <tr>
                            <th>Hardware</th>
                            <th>Software</th>
                        </tr>
                        <tr>
                            <td>
                                <b>PROCESADOR:</b> Mínimo 2 núcleos.
                                <br></br>
                                <b>RAM:</b> Mínimo 4 GB.
                                <br></br>
                                <b>ALMACENAMIENTO:</b> 1 GB de espacio libre.
                                <br></br>
                                <b>CONEXION A INTERNET:</b> Banda ancha.

                            </td>
                            <td>
                                <b>SISTEMA OPERATIVO:</b> Windows 10 o superior, macOS,
                                <br></br>
                                Linux, o cualquier distribución actual.
                                <br></br>
                                <b>NAVEGADOR WEB:</b> Última versión de Chrome, Firefox, Safari o Edge.
                            </td>
                        </tr>
                    </table>
                </div>
            </section>

            {/* Sección de llamada a la acción */}
            <section className="cta-section">
                <h2>¡Empieza ahora con VetConnect!</h2>
                <button className="cta-button">Prueba Gratis</button>
            </section>

            {/* Pie de página */}
            <footer className="footer">
                <p>© 2024 [Nombre de la Empresa]. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}