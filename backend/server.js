const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./data/products.json');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Log the contact form submission
  console.log('=== Contact Form Submission ===');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log('==============================\n');

  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.log(`\nTo fix this, you can:`);
    console.log(`1. Kill the process using port ${PORT}: lsof -ti:${PORT} | xargs kill -9`);
    console.log(`2. Or use a different port: PORT=5001 npm start\n`);
    process.exit(1);
  } else {
    throw err;
  }
});

