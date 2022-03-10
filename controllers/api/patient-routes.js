const router = require("express").Router();
// const { request } = require("express");
const { Patients } = require("../../models");
const { Appointments } = require("../../models");

// route to get all Patients
router.get("/", async (req, res) => {
  const patientsData = await Patients.findAll().catch((err) => {
    res.json(err);
  });
  const patients = patientsData.map((patient) => patient.get({ plain: true }));
  // res.render('all', { patients });
  res.status(200).json(patients);
  //   });
});

// GET all appointments by patient id
router.get("/:id", async (req, res) => {
  try {
    const appointmentData = await Patients.findByPk(req.params.id, {
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
        },
      ],
    });

    const appointments = appointmentData.get({ plain: true });
    res.status(200).json(appointments);
    //   res.render('appointment', { appointments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new Patient
router.post("/", async (req, res) => {
  try {
    const dbPatientData = await Patients.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      isemailcontact: 1,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = dbPatientData.patients_id;
      req.session.logged_in = true;

      res.status(200).json(dbPatientData);
    });

    // res.status(200).json(dbPatientData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
