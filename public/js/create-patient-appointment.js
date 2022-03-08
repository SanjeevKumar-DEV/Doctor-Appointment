async function newFormHandler(event) {
    event.preventDefault();
  
    const patient_name = document.querySelector('#patient_name').value;
    const appointment_description = document.querySelector('#description').value;
    const doctor_name = document.querySelector('#doctor_name').value;
    const time_appointment = document.querySelector('#time_appoint');
  
    const response = await fetch(`/api/appointment`, {
      method: 'POST',
      body: JSON.stringify({
        patient_name,
        appointment_description,
        doctor_name,
        time_appointment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add appointment');
    }
  }
  
  document
    .querySelector('.new-appointment-form')
    .addEventListener('submit', newFormHandler);
  