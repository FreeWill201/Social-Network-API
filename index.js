const express = require("express");
const mongoose = require("mongoose");
const { urlencoded, json } = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
const userRoutes = require("./routes/userRoutes");
const thoughtRoutes = require("./routes/thoughtRoutes");

// Configure middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
