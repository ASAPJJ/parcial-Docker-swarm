const express= require('express')
const app= express()
const nodemailer = require('nodemailer');

// Configuración del transporte SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'juanjosebrunelli@gmail.com', 
    pass: 'rvdy aobw tubd ucch', 
  },
});

// Detalles del correo electrónico
const mailOptions = {
  from: 'JJ Bru <juanjosebrunelli@gmail.com>',
  to: 'eliasdomin2003@gmail.com',
  subject: 'Hola desde NodeJS!',
  text: 'Mensaje de prueba enviado desde Node.js',
};

// Envío del correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error al enviar el correo:', error);
  } else {
    console.log('Correo electrónico enviado:', info.response);
  }
});

app.listen(4000, () => {
  console.log('Servidor web en ejecución en el puerto 4000');
});