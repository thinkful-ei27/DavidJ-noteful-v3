const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

/*mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
  .then(() => {
    const searchTerm = 'lady gaga';
    let filter = {};

    if (searchTerm) {
      filter.title = { $regex: searchTerm, $options: 'i' };
    }

    return Note.find(filter).sort({ updatedAt: 'desc' });
  })
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect()
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });

  mongoose.connect(MONGODB_URI, {useNewUrlParser:true})
  .then(() => {
    let id = "111111111111111111111103";
    return Note.findById(id);
  })
  .then((results) => {
      console.log(results);
  })
  .then(() => {
      return mongoose.disconnect()
  })
  .catch(err => {
      console.error(`ERROR: ${err.message}`)
      console.error(err);
  })
  
 mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
 .then(() => {
    let newNote = {
        title: "title",
        content: "content"
    }
    return Note.create(newNote)
 })
 .then((results) => {
    console.log(results);
 })
 .then(() => {
    return mongoose.disconnect()
 })
 .catch(err => {
    console.error(`ERROR: ${err.message}`)
    console.error(err);
 })

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then( () => {
    let id = "111111111111111111111103"
    const searchTerm = 'lady gaga';
    let filter = {};

    if (searchTerm) {
      filter.title = { $regex: searchTerm, $options: 'i' };
    }
    return Note.findByIdAndUpdate(id, searchTerm);
})
.then(results => {
  console.log(results);
})
.then(() => {
  return mongoose.disconnect()
})
.catch(err => {
  console.error(`ERROR: ${err.message}`);
  console.error(err);
});

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then( () => {
    let id = "111111111111111111111104"
    return Note.findOneAndDelete({_id: id});
})
.then(results => {
  console.log(results);
})
.then(() => {
  return mongoose.disconnect()
})
.catch(err => {
  console.error(`ERROR: ${err.message}`);
  console.error(err);
});
*/
