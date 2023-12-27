require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');

const app = express();
const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const host = process.env.EMAIL_HOST;
const port = process.env.EMAIL_PORT;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.post('/api/formulaire', async (req, res) => {

const body = await req.body;

if (!email || !pass || !host || !port) {
  console.error('One or more required environment variables are not set.');
} else {
  const transporter = nodemailer.createTransport({
    host: host,
    port: parseInt(port),
    secure: true,
    auth: {
      user: email,
      pass,
    },
    tls: { rejectUnauthorized: false },
  });


  

  const mailOptions = {
    from: email,
    to: email,
    subject: 'Nouveau message de formulaire',
    text: `Prénom: ${body.prenom}\nNom: ${body.nom}\nE-mail: ${body.email}\nMessage: ${body.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    

    res.json({ 
      status:200,
      message: 'Formulaire soumis avec succès. Un e-mail a été envoyé.'
     });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    res.json(error, { 
      status:500,
      message: 'Erreur lors de la soumission du formulaire' }
      );
  }
}
});

app.listen(5000, () => {
  console.log(`Serveur écoutant sur le port ${5000}`);
});
