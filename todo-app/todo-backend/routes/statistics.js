const express = require('express');
const { Todo } = require('../mongo');
const { get, set } = require('../redis');

const router = express.Router();

router.get('/', async (_, res) => {
  let added_todos = await get('added_todos');

  if (added_todos === null) {
    added_todos = await Todo.countDocuments();
    await set('added_todos', added_todos);
  } else {
    added_todos = Number(added_todos);
  }

  res.send({ added_todos });
});

module.exports = router;