'use strict';

const express = require('express');

const router = express.Router();

/* ========== GET/READ ALL ITEMS ========== */
const Note = require('../models/note');
router.get('/', (req, res, next) => {

  const searchTerm = req.query.searchTerm;
  const regex = new RegExp(searchTerm, 'i');
  const searchObject = {};
  if (searchTerm) {
    searchObject.title = regex
  }
  console.log(searchObject);
  Note.find(searchObject).sort({ updatedAt: 'desc' }).then(results => {
    console.log(results);
    res.json(results);
  })
  .catch(err => {
    console.log(err)
    next(err);
  });
  
})

/* ========== GET/READ A SINGLE ITEM ========== */
router.get('/:id', (req, res, next) => {

  const id = req.params.id;
  console.log(id);
  Note.findById(id).then(result => {
    console.log(result)
    res.json(result)
  }).catch(err => {
    console.log(err.message)
    next(err);
  })

});

/* ========== POST/CREATE AN ITEM ========== */
router.post('/', (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const noteObject = {
    title,
    content,
  }

  Note.create(noteObject).then(result => {
    console.log(result)
    const id = result.id
    res.location(`/api/notes/${id}`).status(201).json(result);
  }).catch(err => {
    console.log(err.message)
    next(err);
  })

});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const noteObject = {
    title,
    content,
  }
  
  Note.findByIdAndUpdate(id, noteObject).then( result => {
    res.json(result);
  }).catch(err => {
    console.log(err.message)
    next(err);
  })

});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Note.findByIdAndRemove(id).then( () => {
    res.sendStatus(204);
  }).catch(err => {
    console.log(err.message)
    next(err);
  })
});

module.exports = router;
