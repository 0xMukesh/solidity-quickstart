const mongoose = require('mongoose')

function mongo(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = mongo
