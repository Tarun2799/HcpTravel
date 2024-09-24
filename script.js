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
  