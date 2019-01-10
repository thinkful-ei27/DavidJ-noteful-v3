const express = require('express');

const router = express.Router();

const Folder = require('../models/folder');

router.get('/', (req, res, next) => {

    Folder.find().sort({ name: 1 }).then(results => {
      console.log(results);
      res.json(results);
    })
    .catch(err => {
      console.log(err)
      next(err);
    });
    
  })

  router.get('/:id', (req, res, next) => {

    const id = req.params.id;
    Folder.findById(id).then(result => {
      console.log(result)
      res.json(result)
    }).catch(err => {
      console.log(err.message)
      next(err);
    })
  
  });

  router.post('/', (req, res, next) => {
    const name = req.body.name;
    if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
    }
    const folderObject = {
      name
    }
  
    Folder.create(folderObject).then(result => {
      console.log(result)
      const id = result.id
      res.location(`/api/folder/${id}`).status(201).json(result);
    }).catch(err => {
      if (err.code === 11000) {
        err = new Error('The folder name already exists');
        err.status = 400;
      }
        next(err);
    })
  
  });

  router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    if (!name) {
      const err = new Error('Missing `name` in request body');
      err.status = 400;
      return next(err);
      }
    const folderObject = {
      name
    }
    
    Folder.findByIdAndUpdate(id, folderObject).then( result => {
      res.json(result);
    }).catch(err => {
      if (err.code === 11000) {
        err = new Error('The folder name already exists');
        err.status = 400;
      }
      next(err);
    })
  
  });

  router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Folder.findByIdAndRemove(id).then( () => {
      res.sendStatus(204);
    }).catch(err => {
      console.log(err.message)
      next(err);
    })
  });
module.exports = router;