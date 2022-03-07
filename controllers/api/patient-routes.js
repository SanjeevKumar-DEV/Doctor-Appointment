const router = require('express').Router();
const { Patients } = require('../../models');

// route to get all Patients
router.get('/', async (req, res) => {
    try {
    const patientsData = await Patients.findAll();
    res.status(200).json(patientsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
