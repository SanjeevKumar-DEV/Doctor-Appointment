const router = require("express").Router();
const { Doctors } = require("../../models");
const { Appointments } = require("../../models");

// route to get all Doctors
router.get("/", async (req, res) => {
  const doctorsData = await Doctors.findAll().catch((err) => {
    res.json(err);
  });
  const doctors = doctorsData.map((doctor) => doctor.get({ plain: true }));
  // res.render('all', { doctors });
  res.status(200).json(doctors);
  //   });
});

// GET all appointments by doctor id
router.get("/:id", async (req, res) => {
  try {
    const appointmentData = await Doctors.findByPk(req.params.id, {
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

// CREATE new Doctor
router.post("/", async (req, res) => {
  try {
    const dbDoctorData = await Doctors.create({
      speciality: req.body.speciality,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      isemailcontact: req.body.isemailcontact,
      password: req.body.password,
    });
    // req.session.save(() => {
    // req.session.loggedIn = true;

    res.status(200).json(dbDoctorData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
