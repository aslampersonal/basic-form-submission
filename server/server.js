const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, phone } = req.body;
  console.log('Form submitted:', { name, email, phone });
  res.json({ message: 'Form submitted successfully!', data: name });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
