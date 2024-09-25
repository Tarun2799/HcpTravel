function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    sidebar.style.transition = 'all 0.5s ease-in-out'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    sidebar.style.transition = 'all 0.5s ease-in-out'
  }



  const sliderTrack = document.querySelector('.slider-track');

  sliderTrack.addEventListener('mouseover', () => {
    sliderTrack.style.animationPlayState = 'paused';
  });
  
  sliderTrack.addEventListener('mouseout', () => {
    sliderTrack.style.animationPlayState = 'running';
  });
  

  document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let email = document.getElementById('email').value;
    let adult = document.getElementById('adult').value;
    let child = document.getElementById('child').value;
    let travelClass = document.getElementById('class').value; 
    let departure = document.getElementById('departure').value; 
    let returnDate = document.getElementById('return').value; 
    // Add other form fields here

    if (!origin || !destination || !email || adult|| child || !travelClass || !departure ) {
        alert('Please fill in all fields');
        return;
    }

    // If validation is successful
    alert('Form submitted successfully');
    // this.submit(); // Proceed with form submission

    // Clear all fields after successful submission
    this.reset();
});