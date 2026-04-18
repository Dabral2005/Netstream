const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback",
  scope: ['profile', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  // Find or create user in MongoDB
  const user = await User.findOne({ googleId: profile.id }) ||
               await User.create({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value });
  done(null, user);
}));

passport.serializeUser((user, cb) => cb(null, user.id));
passport.deserializeUser((id, cb) => User.findById(id, cb));