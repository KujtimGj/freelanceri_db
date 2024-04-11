require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const passportConfig = require("./utils/passportConfig");
const authMiddleware = require("./middlewares/authMiddleware");
const postRoutes = require("./routes/postRoutes");
const businessAuth = require("./routes/auth/b_authRoute");
const applyRoute = require("./routes/applyRoute");
const cityRoute = require("./routes/cityRoute");
const sortRoute = require("./routes/sortingRoute");
const freelancerAuth = require("./routes/auth/f_authRoute");
const professionRoute = require("./routes/professionRoute");
const trial = require("./routes/trialRoute");
const contactRoute = require("./routes/contactRoute")
const rating = require("./routes/ratingRoute");
// Middleware
app.use(express.json());


app.use(cors());

// Passport serialization and deserialization
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Profile route
app.get(
  "/profile",
  // Middleware to ensure user is authenticated
  ensureAuthenticated,
  function (req, res) {
    res.render("profile", { user: req.user });
  }
);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("Unauthorized user from google");
}

// Routes
app.use("/posts", postRoutes);
app.use("/business", businessAuth);
app.use("/freelancer", freelancerAuth);
app.use("/application", applyRoute);
app.use("/city", cityRoute);
app.use("/profession", professionRoute);
app.use("/sort",sortRoute);
app.use("/trial", trial);
app.use("/contact",contactRoute);
app.use("/rating",rating)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(process.env.PORT);
      console.log("Connected to db");
    });
  })
  .then(() => {
    return mongoose.connection.db
      .collection("posts")
      .createIndex({ expiresAt: -1 }, { expireAfterSeconds: 0 });
  })
  .catch((error) => {
    console.log(error);
  });
