const router = require("express").Router();
const { Doctors, Patients, Appointments } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all doctors
    const doctorData = await Doctors.findAll();

    // Serialize data so the template can read it
    const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      doctors,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    // const patientData = await Patients.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Project }],
    // });
    const appointmentData = await Patients.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Appointments,
          attributes: [
            "appointments_id",
            "doctors_id",
            "patients_id",
            "date_booked",
            "notes",
          ],
          include: [{
            model : Doctors,
            attributes: ["first_name", "last_name", "speciality"],
          }
          ]
        },
      ],
    });

    // console.log(appointmentData);

    const patientAppointments = appointmentData.get({ plain: true });
    console.log(patientAppointments);
    // const doctor = await Doctors.findByPk(req.params.id).get({ plain: true });
    // res.status(200).json(appointments);

    // const user = userData.get({ plain: true });

    res.render("profile", {
      ...patientAppointments,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/createAppointmentForm/:doctors_id", withAuth, async (req, res) => {
  try {
    const doctorData = await Doctors.findByPk(req.params.doctors_id);
    const doctor = doctorData.get({ plain: true });

    req.session.save(() => {
      req.session.doctor_id = req.params.doctors_id;
      req.session.logged_in = true;
      // res.status(200).json(dbPatientData);
    });
    // console.log(req.session);
    res.render("create-appointment", {
      doctor,
      patients_id: req.session.user_id,
      doctors_id: req.params.doctors_id,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
