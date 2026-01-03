const express = require('express');
const router = express.Router();
const projects = require('../data/projects');
const certifications = require('../data/certifications');

// GET /api/projects
router.get('/projects', (req, res) => {
  try {
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// GET /api/certifications
router.get('/certifications', (req, res) => {
  try {
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certifications' });
  }
});

module.exports = router;
