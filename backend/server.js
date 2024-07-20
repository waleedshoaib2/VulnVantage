// app.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');
const scanRoutes = require('./scanRoutes');
const cors = require('cors');
const { authenticate } = require('./authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/scans', authenticate, scanRoutes); // Protect scan routes

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://waleed:Darksouls1_@cluster0.makapqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
