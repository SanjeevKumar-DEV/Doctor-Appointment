const router = require('express').Router();

const patientRoutes = require('./patient-routes');
const doctorRoutes = require('./doctor-routes');
const appointmentRoutes = require('./appointment-routes');

router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;
