const router = require('express').Router();
const { Doctors, patients } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//         //get all Doctors and JOIN with Patients data
//         const doctorData = await Doctors.findAll({
//             include: [
//                 {
//                     model: Doctors,
//                     attributes: ['name'],
//                     //should i add doctor speciality in this?
//                 },
//             ],
//         });
    
    
//     // Serialize data so the template can read it
//     const Doctors = doctorsData.map(doctors) => doctors.get({ plain: true });

//     // Pass serialized data and session flag into template
//     res.render('login', 
//     {
//         doctors,
//         logged_in: req.session.logged_in
//     });
// } catch (err) {
//     res.status(500).json(err);
//     }
// });

// router.get('/doctors/:id', async (req, res) => {
//     try {
//         const DoctorsData = await Doctors.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: patients,
//                     attributes: ['name'],
//                 },
//             ],

//         });
    
//         const doctors = doctorsData.get({ plain: true });

//         res.render('doctor', {
//             ...doctors,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     });

// } catch (err) {
//     res.status(500).jason(err);
// };

// //Use withAuth middleware to prevent acees to route
// router.get('/profile', withAuth, async (req, res => {
//     try {
//         //find the logged in Patients based on the appointments ID
//         const patientsData = await Patients.findByPk(req.appointments.patients_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Doctors}],
//         });

//         const patients = patientsData.get({ plain: true});

//         res.render('profile', {
//             ...patients,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);

//     }
// });

router.get('/login', (req, res) => {
    //if the patients is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        req.redirect('/api/patients');
        return;
    }

    res.render('login');
});

module.exports = router;







