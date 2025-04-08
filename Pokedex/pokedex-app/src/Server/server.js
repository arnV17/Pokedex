// server.js
import express from 'express';
import mongoose from 'mongoose';
import Poke from '../Db/schema.js'; // Adjust the path as necessary

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
await mongoose.connect('mongodb://localhost/pokedex', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('Connected to MongoDB');

// 🐱‍🏍 Routes

// GET all Pokémon
app.get('/api/pokemon', async (req, res) => {
  const allPoke = await Poke.find();
  res.json(allPoke);
});

// POST new Pokémon
app.post('/api/pokemon', async (req, res) => {
  const newPoke = await Poke.create(req.body);
  res.status(201).json(newPoke);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
