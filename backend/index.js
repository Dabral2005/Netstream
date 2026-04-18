const express = require('express');
const mongo = require('mongoose');
const cors  = require('cors');
const path  = require('path');          // ← add if not already there

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',   // dev front‑end
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// *** NEW ***
const moviesRoutes = require('./routes/movies');
app.use('/api/movies', moviesRoutes);

// Passport (unchanged)
// ...

// Static file fallback (React build)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));