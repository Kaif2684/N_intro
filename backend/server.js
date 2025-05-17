
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

app.post('/send-message', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: subject || `Message from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
