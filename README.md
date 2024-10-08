# HcpTravel


# Responsive Travel Booking Website

This project is a responsive travel booking website featuring a navigation bar, a booking form, and a section showcasing travel-related features. It includes a slider for promotional content and a detailed footer with contact and quick links.

## Features

- **Responsive Navbar**: A top navigation bar that adapts to mobile screens with a toggle button for smaller devices.
- **Booking Form**: A form where users can input travel details like origin, destination, number of passengers, class, and dates.
- **Infinite Image Slider**: A carousel showcasing different travel-related services like flight changes and delays.
- **Feature Section**: Highlights key features of the travel booking service.
- **Sticky Footer**: Contains details about the company, quick links, and contact information.

## Technologies Used

- **HTML5**: Markup language used to structure the content.
- **CSS3**: For styling and layout of the website (external file: `style.css`).
- **JavaScript**: Enhances interactivity with the sidebar menu and other elements (external file: `script.js`).

## Installation

1. Clone or download this repository.
2. Ensure you have the correct directory structure with the assets folder for images.
3. Link the CSS and JS files correctly within the HTML file.

## File Structure

```bash
project-folder/
│
├── index.html      # Main HTML file
├── style.css       # External CSS file for styling
├── script.js       # JavaScript file for functionality
└── assets/         # Folder containing images and icons used in the project
```

## for deployment purpose
/project-root
|-- frontend/
|   |-- src/
|   |   |-- assets/            # Images, fonts, and other static assets
|   |   |-- css/               # All CSS files
|   |   |-- js/                # All JavaScript files
|   |   |   |-- formValidation.js  # Form validation logic
|   |   |-- index.html         # Main HTML file
|   |   |-- index.js           # Main JavaScript entry file
|-- package.json               # For managing frontend dependencies


### Assets
Make sure you have the following assets in the `assets` folder:

- **Hcp-logo.png**: Website logo in the navigation bar.
- **delay.jpeg, change.jpeg, flightChange.jpeg**: Images for the slider.
- **1.jpeg, 2.jpeg, 3.jpeg, 4.jpeg, 5.jpeg, 6.jpeg**: Feature section images.
- **call.png**: Icon for the call button.
- **top.png**: Icon for the back-to-top button.

## How to Use

- **Navigation Bar**: Use the navbar to navigate to different sections of the website. On mobile devices, the sidebar menu can be toggled using the hamburger icon.
- **Booking Form**: Fill out the form to input travel details like departure and return dates, number of passengers, and class type.
- **Slider**: View the services offered through an infinite slider.
- **Back to Top**: Scroll to the top of the page by clicking the back-to-top button.

## Future Improvements

- Enhance the form validation to ensure user inputs are correct.
- Add backend integration to handle booking submissions.
- Include social media links and more detailed company information in the footer.
  
## License

This project is open-source and available under the MIT License.


## Trial code to implement partners page functionality

```javascript

    // Array of capital letters
// const alphabetArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

// // Get the parent div with class 'partners-text'
// const partnersTextDiv = document.querySelector('.partners-text');

// // Loop through the alphabet array
// alphabetArray.forEach(letter => {
//   // Create a new div element
//   const newDiv = document.createElement('div');
  
//   // Add the required classes
//   newDiv.classList.add('partnum', 'alphabet');
  
//   // Set the id and data-letter attributes
//   newDiv.id = letter;
//   newDiv.setAttribute('data-letter', letter);
  
//   // Optionally add other content inside the div, e.g., an image
//   // const img = document.createElement('img');
//   // img.src = `path_to_image_for_${letter}.jpg`;
//   // img.alt = `${letter}`;
//   // newDiv.appendChild(img);

//   // Append the new div to the parent container
//   partnersTextDiv.appendChild(newDiv);
// });
  //   let partners = [
  //   {
  //     src: "./assets/partners/XP (1).png",
  //     name: "Avelo Airline - XP"
  //   },
  //   {
  //     src: "./assets/partners/2B.png",
  //     name: "Albawings - 2B"
  //   },
  //   {
  //     src: "./assets/partners/3C.png",
  //     name: "Air Cathamas - 3C"
  //   },{
  //     src: "./assets/partners/A6.png",
  //     name: "Air Arabia Maroc - A6"
  //   },{
  //     src: "./assets/partners/A5.png",
  //     name: "Air France HOP - A5"
  //   },{
  //     src: "./assets/partners/A3.png",
  //     name: "Aegean Airlines - A3"
  //   },{
  //     src: "./assets/partners/9I.png",
  //     name: "Alliance Air - 9I"
  //   },{
  //     src: "./assets/partners/7P.png",
  //     name: "Air Panama - 7P"
  //   },{
  //     src: "./assets/partners/4A.png",
  //     name: "Atsa Airlines"
  //   },{
  //     src: "./assets/partners/3O.png",
  //     name: "Air Arabia Maroc - 3O"
  //   },{
  //     src: "./assets/partners/IS.png",
  //     name: "AIS Airlines - IS"
  //   },{
  //     src: "./assets/partners/GD.png",
  //     name: "Aviair - GD"
  //   },
  //   {
  //     src: "./assets/partners/AM.png",
  //     name: "AeroMexico - AM"
  //   },
  //   {
  //     src: "./assets/partners/AC.png",
  //     name: "Air Canada - AC"
  //   },
  //   {
  //     src: "./assets/partners/GT.png",
  //     name: "Air Guilin - GT"
  //   },
  //   {
  //     src: "./assets/partners/G9.png",
  //     name: "Air Arabia - G9"
  //   },{
  //     src: "./assets/partners/YN.png",
  //     name: "Air Creebec - YN"
  //   },{
  //     src: "./assets/partners/TS.png",
  //     name: "Air Transat - TS"
  //   },{
  //     src: "./assets/partners/NH.png",
  //     name: "All Nipon Airways - NH"
  //   },{
  //     src: "./assets/partners/TN.png",
  //     name: "Air Tuhiti Nui - TN"
  //   },{
  //     src: "./assets/partners/UX.png",
  //     name: "Air Europa - UX"
  //   }
  //   ,
  //   {
  //     src: "./assets/partners/SB.png",
  //     name: "Aircalin - SB"
  //   },
  //   {   
  //     src: "./assets/partners/RV.png",
  //     name: "Air Canada Rouge - RV"    
  //   },
  //   {   
  //     src: "./assets/partners/RS.png",
  //     name: "Air Seoul - RS"    
  //   },
  //   {   
  //     src: "./assets/partners/RF.png",
  //     name: "Aero K - RF"    
  //   },
  //   {   
  //     src: "./assets/partners/QQ.png",
  //     name: "Alliance Airline - QQ"    
  //   },
  //   {   
  //     src: "./assets/partners/PX.png",
  //     name: "Air Niugini - PX"    
  //   },
  //   {   
  //     src: "./assets/partners/PA.png",
  //     name: "Air Blue - PA"    
  //   },
  //   {   
  //     src: "./assets/partners/P4.png",
  //     name: "Air Peace - P4"    
  //   },
  //   {   
  //     src: "./assets/partners/OZ.png",
  //     name: "Asiana Airlines - OZ"    
  //   },
  //   {   
  //     src: "./assets/partners/NZ.png",
  //     name: "Air New Zealand - NZ"    
  //   },
  //   {   
  //     src: "./assets/partners/NQ.png",
  //     name: "Air Japan - NQ"    
  //   },
  //   {   
  //     src: "./assets/partners/NH.png",
  //     name: "All Nipon Airways - NH"    
  //   },
  //   {   
  //     src: "./assets/partners/MZ.png",
  //     name: "Amakusa Airlines - MZ"    
  //   },
  //   {   
  //     src: "./assets/partners/MK.png",
  //     name: "Air Mauritius - MK"    
  //   },
  //   {   
  //     src: "./assets/partners/LZ.png",
  //     name: "Air Link - LZ"    
  //   },
  //   {   
  //     src: "./assets/partners/JU.png",
  //     name: "Air Serbia - JU"    
  //   },
  //   {   
  //     src: "./assets/partners/KP.png",
  //     name: "ASKP Airlines - KP"    
  //   },
  //   {   
  //     src: "./assets/partners/KC.png",
  //     name: "Air Astana - KC"    
  //   },
  //   {   
  //     src: "./assets/partners/MD.png",
  //     name: "Air Madagascar - MD"    
  //   },
  //   {   
  //     src: "./assets/partners/YW.png",
  //     name: "Air Nostrum - YW"    
  //   },
  //   {   
  //     src: "./assets/partners/KT.png",
  //     name: "AirAsia Cambodia - KT"    
  //   },
  //   {   
  //     src: "./assets/partners/AH.png",
  //     name: "Air Algerie - AH"    
  //   },
  //   {   
  //     src: "./assets/partners/BP.png",
  //     name: "Air Botswana - BP"    
  //   },
  //   {   
  //     src: "./assets/partners/PA.png",
  //     name: "Airblue - PA"    
  //   },
  //   {   
  //     src: "./assets/partners/AF.png",
  //     name: "Air France - AF"    
  //   },
  //   {   
  //     src: "./assets/partners/XK.png",
  //     name: "Air Corsica - XK"    
  //   },
  //   {   
  //     src: "./assets/partners/J2.png",
  //     name: "Azerbaijan Airlines - J2"    
  //   },
  //   {   
  //     src: "./assets/partners/HM.png",
  //     name: "Air Seychelles - HM"    
  //   },
  //   {   
  //     src: "./assets/partners/IK.png",
  //     name: "Air Kirbati - IK"    
  //   },
  //   {   
  //     src: "./assets/partners/GR.png",
  //     name: "AURIGNY - GR"    
  //   },
  //   {   
  //     src: "./assets/partners/DU.png",
  //     name: "Air Liasion - DU"    
  //   },
  //   {   
  //     src: "./assets/partners/NF.png",
  //     name: "Air Vanuatu - NF"    
  //   },
  //   {   
  //     src: "./assets/partners/4Z.png",
  //     name: "Airlink - 4Z"    
  //   },
  //   {   
  //     src: "./assets/partners/AV.png",
  //     name: "Avianca - AV"    
  //   },
  //   {   
  //     src: "./assets/partners/TX.png",
  //     name: "Air Caraibes - TX"    
  //   },
  //   {   
  //     src: "./assets/partners/TC.png",
  //     name: "Air Tanzania- TC"    
  //   },
  //   {   
  //     src: "./assets/partners/IX.png",
  //     name: "Air India Express - IX"    
  //   },
  //   {   
  //     src: "./assets/partners/5O.png",
  //     name: "ASL Airlines France - 5O"    
  //   },
  //   {   
  //     src: "./assets/partners/G4.png",
  //     name: "Allegiant Air - G4"    
  //   },
  //   {   
  //     src: "./assets/partners/AD.png",
  //     name: "Azul Brazillian Airlines - AD"    
  //   },
  //   {   
  //     src: "./assets/partners/S4.png",
  //     name: "Azores Airlines - S4"    
  //   },
  //   {   
  //     src: "./assets/partners/IZ.png",
  //     name: "Arkia Israeli Airlines - IZ"    
  //   },
  //   {   
  //     src: "./assets/partners/9H.png",
  //     name: "Air Changan - 9H"    
  //   },
  //   {   
  //     src: "./assets/partners/BX.png",
  //     name: "Air Busan - BX"    
  //   },
  //   {   
  //     src: "./assets/partners/5D.png",
  //     name: "Aeromexico Connect - 5D"    
  //   },
  //   {   
  //     src: "./assets/partners/NX.png",
  //     name: "Air Macau - NX"    
  //   },
  //   {   
  //     src: "./assets/partners/M0.png",
  //     name: "Aero Mongolia - M0"    
  //   },
  //   {   
  //     src: "./assets/partners/YK.png",
  //     name: "Avia Traffic Company - YK"    
  //   },
  //   {   
  //     src: "./assets/partners/SU.png",
  //     name: "Aeroflot - SU"    
  //   },
  //   {   
  //     src: "./assets/partners/EN.png",
  //     name: "Air Dolomiti - EN"    
  //   },
  //   {   
  //     src: "./assets/partners/AP.png",
  //     name: "AlbaStar - AP"    
  //   },
  //   {   
  //     src: "./assets/partners/A4.png",
  //     name: "Azimuth Airlines - A4"    
  //   },
  //   {   
  //     src: "./assets/partners/HC.png",
  //     name: "Air Senegal - HC"    
  //   },
  //   {   
  //     src: "./assets/partners/E5.png",
  //     name: "Air Arabia Egypt - E5"    
  //   },
  //   {   
  //     src: "./assets/partners/AN.png",
  //     name: "Advanced Air - AN"    
  //   },
  // ]

  //   let B = [
  //     {
  //       src: "./assets/partners/B/4B.png",
  //       name: "Boutique Airlines - 4B",
  //     },
  //     {
  //       src: "./assets/partners/B/B2.png",
  //       name: "Belavia - B2",
  //     },
  //     {
  //       src: "./assets/partners/B/B3.png",
  //       name: "Bhutan Airlines - B3",
  //     },
  //     {
  //       src: "./assets/partners/B/BA.png",
  //       name: "British Airways - BA",
  //     },
  //     {
  //       src: "./assets/partners/B/BG.png",
  //       name: "Biman Bangladesh Airlines - BG",
  //     },
  //     {
  //       src: "./assets/partners/B/BZ.png",
  //       name: "Bluebird Airways - BZ",
  //     },
      
  //     {
  //       src: "./assets/partners/B/FB.png",
  //       name: "Bulgaria Air - FB",
  //     },
      
  //     {
  //       src: "./assets/partners/B/ID.png",
  //       name: "Batik Air Malaysia - OD",
  //     },
  //     {
  //       src: "./assets/partners/B/JV.png",
  //       name: "Bearskin Airlines - JV",
  //     },
  //     {
  //       src: "./assets/partners/B/MX.png",
  //       name: "Breeze Airways - MX",
  //     },
  //     {
  //       src: "./assets/partners/B/NT.png",
  //       name: "Binter Canarias - NT",
  //     },
  //     {
  //       src: "./assets/partners/B/OB.png",
  //       name: "Boliviana de Aviación - OB",
  //     },
  //     {
  //       src: "./assets/partners/B/OD.png",
  //       name: "Batik Air - ID",
  //     },
      
  //     {
  //       src: "./assets/partners/B/PG.png",
  //       name: "Bangkok Airways - PG",
  //     },
  //     {
  //       src: "./assets/partners/B/QH.png",
  //       name: "Bamboo Airways - QH",
  //     },
  //     {
  //       src: "./assets/partners/B/SN.png",
  //       name: "Brussels Airlines - SN",
  //     },
  //     {
  //       src: "./assets/partners/B/TF.png",
  //       name: "Braathens Regional Airlines - TF",
  //     },
  //     {
  //       src: "./assets/partners/B/U4.png",
  //       name: "Buddha Air - U4",
  //     },
  //     {
  //       src: "./assets/partners/B/UP.png",
  //       name: "Bahamasair - UP",
  //     },
      
  //   ]
  //   let Z = [{
  //     src: "./assets/partners/Z/4B.png",
  //     name: "ZIPAIR Tokyo - ZG"
  //   }]

  // partners.forEach((partner) => {
  //   const span1 = document.createElement('span'); 
  //   const span2 = document.createElement('h6'); 
  //   const img = document.createElement('img');
  //   img.src = partner.src;
  //   span1.appendChild(img); // span1 = img;
  //   span2.innerText = partner.name;
  //   span1.appendChild(span2);
  //   document.querySelector('.partnum').appendChild(span1);
  //   // document.querySelector('.partnum').appendChild(img);
  // })

  // B.forEach((partner) => {
  //   const span1 = document.createElement('span'); 
  //   const span2 = document.createElement('h6'); 
  //   const img = document.createElement('img');
  //   img.src = partner.src;
  //   span1.appendChild(img); // span1 = img;
  //   span2.innerText = partner.name;
  //   span1.appendChild(span2);
  //   document.querySelector('#B').appendChild(span1);
  //   // document.querySelector('.partnum').appendChild(img);
  // })

  // Z.forEach((partner) => {
  //   const span1 = document.createElement('span'); 
  //   const span2 = document.createElement('h6'); 
  //   const img = document.createElement('img');
  //   img.src = partner.src;
  //   span1.appendChild(img); // span1 = img;
  //   span2.innerText = partner.name;
  //   span1.appendChild(span2);
  //   document.querySelector('#Z').appendChild(span1);
  //   // document.querySelector('.partnum').appendChild(img);
  // })

  // document.querySelector('.Z').addEventListener('click', function(){
  //   document.querySelector('#Z').style.display = "flex";
  //   document.querySelector('.Z').style.backgroundColor = "#f8ba00";
  //   document.querySelector('#A').style.display = "none";
  // })

  // document.querySelector('.A').addEventListener('click', function(){
  //   document.querySelector('#Z').style.display = "none";
  //   document.querySelector('#A').style.display = "flex";
  //   document.querySelector('.A').style.backgroundColor = "#f8ba00";

  // })
```