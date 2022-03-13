async function newFormHandler(event) {
    event.preventDefault();
  
    // const patient_first_name = document.querySelector('#patient_first_name').value.trim();
    // const patient_last_name = document.querySelector('#patient_last_name').value.trim();
    const time_appointment = document.querySelector('#appointment-date').value.trim();
    const appointment_description = document.querySelector('#notes').value.trim();
    // const doctor_name = document.querySelector('#doctor_name').value;
    
  
    const response = await fetch(`/api/appointments`, {
      method: 'POST',
      cache : 'reload',
      body: JSON.stringify({
        time_appointment,
        appointment_description       
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add appointment');
    }
  }

// // Datepicker widget
// $(function () {
//   $('#datepicker').datepicker({
//     changeMonth: true,
//     changeYear: true,
//   });
// });

  
  document
    .querySelector('.new-appointment-form')
    .addEventListener('submit', newFormHandler);
  