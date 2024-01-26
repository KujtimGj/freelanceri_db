const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Business = require("../models/users/businessModel")
const Freelancer = require("../models/users/freelancerModel")

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "471917834274-34h6vlsa4gnf1r97sa4qmsos53f2d3et.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:7000/auth/google/callback", // Adjust the callback URL
    },
    function (accessToken, refreshToken, profile, done) {
      // Check if the user already exists in your database
      // For Business
      Business.findOne({ googleId: profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          // If the user doesn't exist, create a new user in the Business model
          const newBusiness = new Business({
            googleId: profile.id,
            // Add other relevant fields as needed
          });
          newBusiness.save(function (err) {
            if (err) return done(err);
            return done(null, newBusiness);
          });
        } else {
          // If the user exists, return the user
          return done(null, user);
        }
      });

      // For Freelancer
      // Similar logic as above for Freelancer model
    }
  )
);

// Serialize user into the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(function(id, done) {
  // Find the user by their ID in the Business model
  Business.findById(id, function(err, user) {
    if (err) return done(err);
    if (user) return done(null, user);
    
    // If not found in Business model, find in Freelancer model
    Freelancer.findById(id, function(err, freelancer) {
      if (err) return done(err);
      done(null, freelancer);
    });
  });
});

module.exports = passport;
