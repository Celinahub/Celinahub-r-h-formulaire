// Form.js
import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit (data)  {
    const response = await fetch(`${process.env.REACT_APP_CLIENT_URL}/api/formulaire`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (responseData.status === 200) {
      alert('Formulaire soumis avec succès. Un e-mail a été envoyé.');
    } else {
      alert('Erreur lors de la soumission du formulaire');
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form section-wrapper" style={{ backgroundColor: '#FFF', padding: '20px', borderRadius: '5px' }}>
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom
        </label>
        <input
          type="text"
          className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
          id="nom"
          {...register('nom', { required: 'Ce champ est obligatoire' })}
        />
        {errors.nom && <div className="invalid-feedback">{errors.nom.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="prenom" className="form-label">
          Prénom
        </label>
        <input
          type="text"
          className={`form-control ${errors.prenom ? 'is-invalid' : ''}`}
          id="prenom"
          {...register('prenom', { required: 'Ce champ est obligatoire' })}
        />
        {errors.prenom && <div className="invalid-feedback">{errors.prenom.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          {...register('email', { required: 'Ce champ est obligatoire', pattern: { value: /^\S+@\S+$/i, message: 'Adresse e-mail invalide' } })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          id="message"
          {...register('message', { required: 'Ce champ est obligatoire' })}
        />
        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
      </div>
      <button type="submit" className="btn btn-custom">
        Envoyer
      </button>
    </form>
  );
}

export default Form;
