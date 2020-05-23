const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorLastName: { type: String, required: true },
  authorFirstName: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports =
  mongoose.models.Project || mongoose.model('Project', ProjectSchema);
