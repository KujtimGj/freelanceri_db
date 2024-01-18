require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const businessAuth = require("./routes/auth/b_authRoute");
const applyRoute = require("./routes/applyRoute");
const cityRoute = require("./routes/cityRoute");
const sortRoute = require("./routes/sortingRoute");
const freelancerAuth = require("./routes/auth/f_authRoute");
const professionRoute = require("./routes/professionRoute");
const trial = require("./routes/trialRoute");
const app = express();
app.use(express.json());
app.use(cors());

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

app.use("/posts", postRoutes);
app.use("/business", businessAuth);
app.use("/freelancer", freelancerAuth);
app.use("/application", applyRoute);
app.use("/city", cityRoute);
app.use("/profession", professionRoute);
app.use("/sort", sortRoute);
app.use("/trial", trial);
app.use('/images', express.static('images'));
