const router = require('express').Router();
const { Doctors } = require('../../models');

// route to get all Patients
router.get('/', async (req, res) => {
  const doctorsData = await Doctors.findAll().catch((err) => { 
    res.json(err);
  });
    const doctors = doctorsData.map((doctor) => doctor.get({ plain: true }));
    // res.render('all', { doctors });
    res.status(200).json(doctors);
//   });
});

module.exports = router;
