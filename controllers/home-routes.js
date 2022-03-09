const router = require('express').Router();
const { Doctors, Patients } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all doctors
    const doctorData = await Doctors.findAll();

    // Serialize data so the template can read it
    const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      doctors, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
