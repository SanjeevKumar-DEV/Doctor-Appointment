const router = require("express").Router();
const { Appointments } = require("../../models");
const withAuth = require("../../utils/auth");

// route to get all Patients
router.get("/", async (req, res) => {
  const appointmentsData = await Appointments.findAll().catch((err) => {
    res.json(err);
  });
  const appointments = appointmentsData.map((appointment) => appointment.get({ plain: true }));
  // res.render('all', { patients });
  res.status(200).json(appointments);
  //   });
});

// route to get a appointment details
router.get("/:id", async (req, res) => {
  const appointmentsData = await Appointments.findByPk(req.params.id).catch(
    (err) => {
      res.json(err);
    }
  );
  const appointments = appointmentsData.get({ plain: true });
  // res.render('all', { appointments });
  res.status(200).json(appointments);
  //   });
});

// CREATE new appointment
router.post('/', withAuth, async (req, res) => {
  try {
    const dbAppointmentData = await Appointments.create({
      doctors_id: req.body.doctor_id,
      patients_id: req.session.user_id,
      date_booked: req.body.time_appointment,
      notes: req.body.appointment_description,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbAppointmentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete appointment by ID 
router.delete('/:id', withAuth, async (req, res) => {
  try {
      const appointmentData = await Appointments.destroy({
          where: {
              appointments_id: req.params.id
          }
      })
      res.status(200).json(appointmentData);
  } catch (err) {
      res.status(400).json({ message: 'No appointment has been booked, please book your appointment'});
  }
});

module.exports = router;
