const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const { useForm } = require('react-hook-form');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/api/formulaire', async (req, res) => {
  const { prenom, nom, email, message } = req.body;

  if (!prenom || !nom || !email || !message) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs du formulaire' });
  }

  const hashedMessage = await bcrypt.hash(message, 10);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.DESTINATION_EMAIL,
    subject: 'Nouveau message de formulaire',
    text: `Prénom: ${prenom}\nNom: ${nom}\nE-mail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Formulaire soumis avec succès. Un e-mail a été envoyé.' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    res.status(500).json({ message: 'Erreur lors de la soumission du formulaire' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});
