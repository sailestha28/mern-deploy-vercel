const mongoose = require("mongoose");
const DB = process.env.DATABASE||'mongodb+srv://sailestha2018:sailestha2018@shresthacluster.wqvd6fx.mongodb.net/MernStack?retryWrites=true&w=majority&appName=shresthaCluster;'
mongoose.connect(DB).then(() => {
  console.log("connetcion succefull");
});

