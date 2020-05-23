const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');

router.get('/', async (req, res) => {
  const result = await Project.find({}).sort({ date: -1 });
  res.json(result);
});

router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    content: req.body.content,
    authorLastName: 'sur',
    authorFirstName: 'tayfun',
  });

  const result = await project.save();
  res.json(result);
});

module.exports = router;
