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

router.post('/login', async (req, res) => {
  try {
    const patientData = await Patients.findOne({ where: { email: req.body.email } });

    if (!patientData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await patientData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = patientData.patients_id;
      req.session.logged_in = true;
      
      res.json({ user: patientData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
