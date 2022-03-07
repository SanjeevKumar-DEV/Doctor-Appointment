const router = require('express').Router();
const { Patients } = require('../../models');

// route to get all Patients
router.get('/', async (req, res) => {
//     try {
//     const patientsData = await Patients.findAll();
//     res.status(200).json(patientsData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
  const patientsData = await Patients.findAll().catch((err) => { 
    res.json(err);
  });
    const patients = patientsData.map((patient) => patient.get({ plain: true }));
    // res.render('all', { patients });
    res.status(200).json(patients);
//   });
});

module.exports = router;
