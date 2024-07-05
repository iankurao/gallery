const mongoose = require('mongoose');
const db = 'mongodb+srv://iankurao:valley54321@cluster0.mongodb.net/darkroom?retryWrites=true&w=majority';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
