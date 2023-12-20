// App.js
import React from 'react';
import Form from './Form';


function App() {
  return (
    <div className="container">
    <div className="row">
      {/* ... Colonne pour le bloc email et les liens sociaux ... */}
      <div className="col-md-6">
            {/* Colonne pour le bloc email */}
            <div id="contact-info" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
              <div className="d-flex align-items-center">
                <div className="email-icon">
                  <i className="fas fa-envelope fa-lg"></i>
                </div>
                <a href="mailto:chubert.contactpro@yahoo.com" style={{ color: '#444243', textDecoration: 'none', marginLeft: '10px', fontSize: '2vw' }}>
                  chubert.contactpro@yahoo.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            {/* Colonne pour le bloc liens sociaux */}
            <div id="liens-sociaux" style={{ maxHeight: '150px', overflowY: 'auto' }}>
              <p style={{ color: '#444243', marginTop: '20px', fontWeight: 'bold', fontSize: '2vw' }}>
                <a href="https://github.com/Celinahub" target="_blank" style={{ textDecoration: 'none', marginRight: '10px', color: '#444243' }}>
                  <i className="fab fa-github github-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/c%C3%A9line-hubert/?originalSubdomain=fr" target="_blank" style={{ textDecoration: 'none', marginRight: '10px', color: '#444243' }}>
                  <i className="fab fa-linkedin-in linkedin-icon"></i>
                </a>
                <span style={{ color: '#444243' }}>SUIVEZ-MOI !</span>
              </p>
            </div>
          </div>

      {/* Colonne pour le formulaire */}
      <div className="col-md-6">
        <div className="contact-form section-wrapper p-4" style={{ backgroundColor: '#FFF', borderRadius: '5px' }}>
          <div id="contact-form-container">
            {/* Utilisez le composant Form ici */}
            <Form />
          </div>
        </div>
      </div>

      {/* Colonne pour la carte */}
      <div className="col-md-6">
        <div id="map" style={{ height: '500px', border: '5px solid #fff', borderRadius: '5px', width: '100%' }}></div>
      </div>
    </div>
  </div>
  );
}

export default App;
