import React from 'react'
import './presentation.css'
import logo from './logo.png'
import imagen1 from './imagen1.png'
import imagen2 from './imagen2.png'

export default function Presentation() {
    function abrirEnlace() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
    return (
        <div className="landing-page">
            <header className="hero-section">
                <img className="logoVet" src={logo} alt="logo" />
                <h1>VetConnect</h1>
            </header>

            <section className="screenshot-section">
                <div className='imageCtn'>
                    <img src={imagen1} alt="Captura de pantalla del software" className='image'/>
                    <img src={imagen2} alt="Captura de pantalla del software" className='image'/>
                </div>
                <div className='desP'>
                    <div className='des'>
                        <h1>DESCRIPCION</h1>
                        <p>VetConnect es la solución ideal para conectar a clientes con veterinarios de manera rápida, segura y eficiente, mejorando así el acceso a servicios veterinarios de calidad en todas las regiones.</p>
                        <p>El objetivo de VetConnect es mejorar el acceso a servicios veterinarios en todas las regiones, asegurando que cada animal reciba la atención que necesita, independientemente de su ubicación. La plataforma busca simplificar el proceso de búsqueda y consulta, promover el bienestar animal y ofrecer a los dueños de cualquier tipo de animal una herramienta práctica y accesible para gestionar la salud de sus animales.</p>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h1>CARACTERISTICAS</h1>
                <div className="features-list">
                    <div className="feature-item">
                        <h3>Informacion Actualizada</h3>
                        <p>Asegura que las direcciones y datos de contacto de los veterinarios estén siempre al día.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Acceso fácil y rápido</h3>
                        <p> Permite a los clientes encontrar veterinarios disponibles de manera eficiente.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Transparencia y Confianza</h3>
                        <p>Sistema de calificaciones y verificación de credenciales para asegurar la calidad del servicio.</p>
                    </div>
                </div>
                <div className="features-list">
                    <div className="feature-item">
                        <h3>Cobertura Amplia</h3>
                        <p>Aumenta la disponibilidad de veterinarios en diversas regiones a través de promociones e incentivos.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Facilidad de uso</h3>
                        <p>Interfaz amigable y procesos intuitivos para ambas partes.</p>
                    </div>
                </div>
            </section>

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

            <section className="cta-section">
                <h2>¡Empieza ahora con VetConnect!</h2>
                <button className="cta-button" onClick={abrirEnlace}>Prueba</button>
            </section>

            <footer className="footer">
                <p>© 2024 VetConnect. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}