const router = require('express').Router();

const patientRoutes = require('./patient-routes');
const doctorRoutes = require('./doctor-routes');

router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);

module.exports = router;
