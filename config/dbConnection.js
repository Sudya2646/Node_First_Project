const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

// Database connect
connectDb = mongoose
  .connect(
    "mongodb+srv://Harshad:1234@cluster0.j8or8vw.mongodb.net/Zero?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectDb
