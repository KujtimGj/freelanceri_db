require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


const postRoutes = require("./routes/postRoutes");
const businessAuth = require("./routes/auth/b_authRoute");
const applyRoute = require("./routes/applyRoute");
const cityRoute = require("./routes/cityRoute");
const sortRoute = require("./routes/sortingRoute");
const freelancerAuth = require("./routes/auth/f_authRoute");
const professionRoute = require("./routes/professionRoute");
const trial = require("./routes/trialRoute");

const rateLimit = require("express-rate-limit")

mongoose
  .connect(process.env.MONGO_URI)
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

  const trialLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 1,
    message: "Too many requests for trial route. Please try again later.",
    skip: (req) => {
      return req.ip;
    },
  });

app.use("/posts", postRoutes);
app.use("/business", businessAuth);
app.use("/freelancer", freelancerAuth);
app.use("/application", applyRoute);
app.use("/city", cityRoute);
app.use("/profession", professionRoute);
app.use("/sort", sortRoute);
app.use("/trial",trialLimiter, trial);
// app.use('/images', express.static('images'));
