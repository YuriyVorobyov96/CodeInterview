/*
  Провести ревью кода, указать, что не нравится, что можно исправить и как
*/

import orm from orm;
const usersModels = require('./models/usersModels');
const { Images } = require('./models/filesModels');
const express = require('express');

const router = express.Router();

function* idGenerator () {
  let id = 0;
  yield id++;
}

let identifierGenerator = idGenerator();

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = identifierGenerator.next().value;
  }
}

User.prototype.print = function() {
    console.log(
      this.firstName,
      this.lastName,
      this.id,
    )
  };


const getUser = async (req, res) =>{
  const user = await usersModels.User.findOne({ id: req.params.id });

  res.send(user);
}

router.post('', (req, res) => {
  try {
    let user = new User(req.firstName, req.lastName);

    if (req.image) {
      await orm.generateAndExecuteSqlQuery(`INSERT INTO Images
        VALUES (${user.id}, ${req.image});`);
    }

    usersModels.User.create(user)
      .then(newUser => {
        res.sendStatus(200);
      });
  } catch (e) {
    res.status(200).send(e);
  }
});

router.get('users/:id', getUser);
