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
const contactRoute = require("./routes/contactRoute");
const rating = require("./routes/ratingRoute");
const bookmark = require("./routes/bookmarkRoute");
const contract = require("./routes/contractRoute");
const education = require("./routes/educationRoute");
const experience = require("./routes/experienceRoute");
const freelancerprofession = require("./routes/fpRoute");
const superAdmin = require("./routes/auth/s_authRoute");
const homeEmail = require("./routes/homeEmail");
const blogs = require("./routes/blogRoute");
// Middleware
app.use(express.json());
app.use(cors());
app.use(cors({ origin: "*" }));

// Routes
app.use("/home-email", homeEmail);
app.use("/sa", superAdmin);
app.use("/posts", postRoutes);
app.use("/business", businessAuth);
app.use("/freelancer", freelancerAuth);
app.use("/application", applyRoute);
app.use("/city", cityRoute);
app.use("/profession", professionRoute);
app.use("/sort", sortRoute);
app.use("/trial", trial);
app.use("/contact", contactRoute);
app.use("/rating", rating);
app.use("/bookmark", bookmark);
app.use("/contract", contract);
app.use("/education", education);
app.use("/experience", experience);
app.use("/freelancer-professions", freelancerprofession);
app.use("/blogs", blogs);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    await mongoose.connection.db
      .collection("posts")
      .createIndex({ "profession.category": 1 }, { background: true });

    await mongoose.connection.db
      .collection("freelancers")
      .createIndex({ "profession.category": 1 }, { background: true });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
