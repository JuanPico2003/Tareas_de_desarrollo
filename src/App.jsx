import React, { useState } from 'react';

function App() {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fecha: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.fecha) return;

    setPersonas([...personas, formData]);
    setFormData({ nombre: '', correo: '', fecha: '' });
  };

  const eliminarPersona = (index) => {
    const nuevas = [...personas];
    nuevas.splice(index, 1);
    setPersonas(nuevas);
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="container-fluid bg-dark text-white text-center py-4">
        <h1>Juan Pico Pico les da la Bienvenida</h1>
        <nav className="mt-3">
          <button className="btn btn-outline-light me-2" onClick={() => scrollTo('acerca')}>Acerca de la Página</button>
          <button className="btn btn-outline-light me-2" onClick={() => scrollTo('contacto')}>Contáctanos</button>
          <button className="btn btn-outline-light me-2" onClick={() => scrollTo('formulario')}>Formulario</button>
          <button className="btn btn-outline-light" onClick={() => scrollTo('personas')}>Personas Registradas</button>
        </nav>
      </header>
      
      <section className="container my-4" id="carrusel">
        <h2 className="text-center mb-4">Galería de Imágenes</h2>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">

            <div className="carousel-item active">
              <img src="imgs/img1.jpg" className="d-block w-100" alt="Imagen 1" />
            </div>

            <div className="carousel-item">
              <img src="imgs/img2.jpg" className="d-block w-100" alt="Imagen 2" />
            </div>
            <div className="carousel-item">
              <img src="imgs/img3.jpg" className="d-block w-100" alt="Imagen 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>

      <section className="container-fluid my-3 py-5" id="formulario">
        <h2 className="text-center mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12 w-50">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="col-12 w-50">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" className="form-control" id="correo" value={formData.correo} onChange={handleChange} required />
          </div>
          <div className="col-12 w-50">
            <label htmlFor="fecha" className="form-label">Fecha de Nacimiento</label>
            <input type="date" className="form-control" id="fecha" value={formData.fecha} onChange={handleChange} required />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </section>

      <section className="container-fluid my-5 py-5" id="personas">
        <h2 className="text-center">Personas Registradas</h2>
        {personas.length === 0 ? (
          <p className="text-center">No hay personas registradas.</p>
        ) : (
          <ul className="list-group">
            {personas.map((persona, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {persona.nombre} - {persona.correo} - {persona.fecha}
                <button className="btn btn-danger btn-sm" onClick={() => eliminarPersona(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="container-fluid my-5 py-5" id="acerca">
        <h2 className="text-center">Acerca de la Página</h2>
        <p className="text-center">Esta es una página de portafolio sencilla creada con React, Bootstrap y JavaScript para la materia de DESARROLLO DE SISTEMAS INFORMÁTICOS.</p>
      </section>

      <section className="container-fluid my-1 py-5" id="contacto">
        <h2 className="text-center">Contáctanos</h2>
        <p className="text-center">Puedes enviarnos un mensaje a través de nuestro correo electrónico o redes sociales.</p>
        <div className="text-center mt-4">
          <a href="https://www.facebook.com/profile.php?id=61575786232138" target="_blank" className="btn btn-primary me-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/https_juanp_6?igsh=cGpsaW90M2xhNnRzs" target="_blank" className="btn btn-danger me-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/0991564298" target="_blank" className="btn btn-success">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
