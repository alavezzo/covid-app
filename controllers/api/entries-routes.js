const router = require('express').Router();
const { Entries } = require('../../models');

// GET all entries
router.get('/', (req, res) => {
  Entries.findAll({}).then(entries => {
    res.json(entries);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET entries by id
router.get('/:id', (req, res) => {
  Entries.findOne({
    where: {
      id: req.params.id
    }
  }).then(entries => {
    res.json(entries);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET entries by zipcode
router.get('/:zipcode', (req, res) => {
  Entries.findAll({
    where: {
      zipcode: req.params.zipcode
    }
  }).then(zipcode => {
    res.json(zipcode);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST entries
router.post('/', (req, res) => {
  const { name, zipcode, date, mask, distance, sanitizer, vaccineCard, comment } = req.body;
  Entries.create(
    {
      UserId: req.session.user_id,
      name,
      zipcode,
      date,
      mask,
      distance,
      sanitizer,
      vaccineCard,
      comment
    }
  ).then(dbres => {
      console.log(dbres)
      res.json(dbres)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;