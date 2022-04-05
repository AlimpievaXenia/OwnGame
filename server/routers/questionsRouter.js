const express = require('express');
const { Question, Category } = require('../db/models/index');

const questionsRouter = express.Router();

questionsRouter.get('/', async (req, res) => {
  try {
    const all = await Question.findAll({
      raw: true,
      include: [
        {
          model: Category,
          required: true,
        },
      ],
    });

    res.json(all);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = questionsRouter;
