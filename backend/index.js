const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); 
const PORT = 5000 || 1001;

app.use(cors());
app.use(express.json()); 

mongoose.connect('mongodb://127.0.0.1:27017/netflix_clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ MongoDB Connection Error: ", err));


const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Netflix Clone Backend!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const session = require('express-session');
// const passport = require('passport');
// require('dotenv').config();

// const app = express(); 
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Session setup
// app.use(session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: true
// }));

// // Passport setup
// app.use(passport.initialize());
// app.use(passport.session());

// // MongoDB connect
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch((err) => console.log("❌ MongoDB Connection Error: ", err));

// // Routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// app.get('/', (req, res) => {
//     res.send('Welcome to Netflix Clone Backend!');
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
