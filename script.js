function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'flex';
      sidebar.style.transition = 'all 0.5s ease-in-out';
  }
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
  


  // let partners = [
  //   {
  //     src: "./assets/partners/XP (1).png"
  //   },
  //   {
  //     src: "./assets/partners/2B.png"
  //   },
  //   {
  //     src: "./assets/partners/3C.png"
  //   },{
  //     src: "./assets/partners/A6.png"
  //   },{
  //     src: "./assets/partners/A5.png"
  //   },{
  //     src: "./assets/partners/A3.png"
  //   },{
  //     src: "./assets/partners/9I.png"
  //   },{
  //     src: "./assets/partners/7P.png"
  //   },{
  //     src: "./assets/partners/4A.png"
  //   },{
  //     src: "./assets/partners/3O.png"
  //   },{
  //     src: "./assets/partners/3C.png"
  //   },{
  //     src: "./assets/partners/XP (1).png"
  //   },
  //   {
  //     src: "./assets/partners/AM.png"
  //   },
  //   {
  //     src: "./assets/partners/AC.png"
  //   },
  //   {
  //     src: "./assets/partners/GT.png"
  //   },
  //   {
  //     src: "./assets/partners/XP.png"
  //   },{
  //     src: "./assets/partners/YN.png"
  //   },{
  //     src: "./assets/partners/TS.png"
  //   },{
  //     src: "./assets/partners/NH.png"
  //   },{
  //     src: "./assets/partners/TN.png"
  //   },{
  //     src: "./assets/partners/UX.png"
  //   }
  // ]



  // partners.forEach((partner) => {
  //   const img = document.createElement('img');
  //   img.src = partner.src;
  //   document.querySelector('.partnum').appendChild(img);
  // })

//   document.getElementById('booking-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     let origin = document.getElementById('origin').value;
//     let destination = document.getElementById('destination').value;
//     let email = document.getElementById('email').value;
//     let adult = document.getElementById('adult').value;
//     let child = document.getElementById('child').value;
//     let travelClass = document.getElementById('class').value; 
//     let departure = document.getElementById('departure').value; 
//     let returnDate = document.getElementById('return').value; 
//     // Add other form fields here

//     if (!origin || !destination || !email || adult|| child || !travelClass || !departure ) {
//         alert('Please fill in all fields');
//         return;
//     }

//     // If validation is successful
//     alert('Form submitted successfully');
//     // this.submit(); // Proceed with form submission

//     // Clear all fields after successful submission
//     this.reset();
// });