
const express = require('express');
const app = express();
const port = 80;

app.use(express.json());

console.log(process.env)
// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the App' });
});

// Sample GET endpoint
app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);
});

// Sample POST endpoint
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', item: newItem });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
