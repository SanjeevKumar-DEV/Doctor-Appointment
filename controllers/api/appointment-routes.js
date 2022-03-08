const router = require("express").Router();
const { Appointments } = require("../../models");

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

module.exports = router;
