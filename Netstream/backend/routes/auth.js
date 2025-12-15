const express = require("express");
const router = express.Router();
const User = require("../models/user");



router.post("/signup", async (req, res) => {
  console.log("recived data: ", req.body);
  const { username, email, password } = req.body; 

  try {
    const userExist = await User.findOne({ email }); 
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, password }); 
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body; 

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;






// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// require("../config/passport");

// // Normal Signup
// router.post("/signup", async (req, res) => {
//   console.log("recived data: ", req.body);
//   const { username, email, password } = req.body; 

//   try {
//     const userExist = await User.findOne({ email }); 
//     if (userExist) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = new User({ username, email, password }); 
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Normal Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body; 
//   try {
//     const user = await User.findOne({ email, password });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }
//     res.status(200).json({ message: "Login successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Google Login
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get(
//   "/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   (req, res) => {
//     res.redirect("http://localhost:5173/"); // frontend ka URL (React app)
//   }
// );

// module.exports = router;




