const router = require('express').Router();
const { Users } = require('../../models');

// GET all users
router.get('/', (req, res) => {
  Users.findAll({}).then(users => {
    res.json(users);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET user by id
router.get('/:id', (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id
    }
  }).then(users => {
    res.json(users);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  ;
});

// login
router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      name: req.body.name,
    }
  }).then(dbUserData => {

    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password)
    
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.name = dbUserData.name;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;

      console.log(req.session.user_id, req.session.name);
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/logout', (req, res) => {
  console.log(req.session.loggedIn)
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.post('/', (req, res) => {
  console.log(req.body);
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
   dbUserData = dbUserData.get({plain:true})
    console.log(dbUserData);
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;    
        console.log(req.session.user_id, req.session.name);
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;