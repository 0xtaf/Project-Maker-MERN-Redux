const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');

router.get('/', async (req, res) => {
  const result = await Project.find({}).sort({ date: -1 });
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await Project.findById(req.params.id);
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

router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(404).json({ success: false });
  }
});

module.exports = router;
