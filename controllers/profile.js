const router = require('express').Router();
const sequelize = require('../config/connection');
const { Doctors, Appoitments, Patients, Appointments} = require('../models');
const { upsert } = require('../models/Patients');


router.get('/', withAuth, async (req, res) => {
    try {
        const patientsData = await Patients.findByPk(req.session.Patients_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Appoitments }],

        });

        const patients = patientsData.get({ plain: true });
        console.log(Patients);
        res.render('profile', {
            ...Patients,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// please help me to check if this one is correct to create new appointment
router.post('/', async (req, res) => {
    try {
        if (req.session) {
            const newAppointments = await Appoitments.create({
                Doctors_id: req.body.id,
                Patients_id: req.body.id,
                notes: req.body.content, 
                date: req.body.content, 
            })
            res.status(200).json(newAppointments);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

// i found out that our models/appoitments.js contents appointment_ID but our db/seeds appointments code does not content appointment_ID
router.delete('/', async (req, res) => {
    try {
        const appointmentsData = await Appointments.destroy({
            where: {
                appointment_id: req.params.id
                

            }
        })
        res.status(200).json(appointmentData);
    } catch (err) {
        res.status(400).json({ message: 'No appointment has been booked, please book your appointment'});
    }
});

module.exports = router;


