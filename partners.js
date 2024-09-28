  // Array of capital letters
  const alphabetArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  // Get the parent div with class 'partners-text'
  const partnersTextDiv = document.querySelector('.partners-text');
  
  // Loop through the alphabet array
  alphabetArray.forEach(letter => {
    // Create a new div element
    const newDiv = document.createElement('div');
    
    // Add the required classes
    newDiv.classList.add('partnum', 'alphabet');
    
    // Set the id and data-letter attributes
    newDiv.id = letter;
    newDiv.setAttribute('data-letter', letter);
    
    // Optionally add other content inside the div, e.g., an image
    // const img = document.createElement('img');
    // img.src = `path_to_image_for_${letter}.jpg`;
    // img.alt = `${letter}`;
    // newDiv.appendChild(img);
  
    // Append the new div to the parent container
    partnersTextDiv.appendChild(newDiv);
  });
  








// Hide all alphabet divs
function hideAllAlphabets() {
    document.querySelectorAll('.alphabet').forEach(div => {
      div.style.display = 'none';
    });
  }
  
  // Reset background color for all buttons
  function resetButtonColors() {
    document.querySelectorAll('.alphabet-button').forEach(button => {
      button.style.backgroundColor = '';
    });
  }
  
  // Event delegation for buttons
  document.querySelector('.buttons-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('alphabet-button')) {
      // Hide all alphabet divs first
      hideAllAlphabets();
      
      // Reset button background colors
      resetButtonColors();
      
      // Get the clicked button's data-letter attribute
      const letter = event.target.getAttribute('data-letter');
      
      // Show the corresponding div
      document.querySelector(`#${letter}`).style.display = 'flex';
      
      // Change the background color of the clicked button
      event.target.style.backgroundColor = '#f8ba00';
    }
  });
  
  // Initial state: hide all except 'A' or your preferred default
  hideAllAlphabets();
  document.querySelector('#A').style.display = 'flex';











const alphabetArrays = {
    "A": [
        {
          src: "./assets/partners/A/XP (1).png",
          name: "Avelo Airline - XP"
        },
        {
          src: "./assets/partners/A/2B.png",
          name: "Albawings - 2B"
        },
        {
          src: "./assets/partners/A/3C.png",
          name: "Air Cathamas - 3C"
        },{
          src: "./assets/partners/A/A6.png",
          name: "Air Arabia Maroc - A6"
        },{
          src: "./assets/partners/A/A5.png",
          name: "Air France HOP - A5"
        },{
          src: "./assets/partners/A/A3.png",
          name: "Aegean Airlines - A3"
        },{
          src: "./assets/partners/A/9I.png",
          name: "Alliance Air - 9I"
        },{
          src: "./assets/partners/A/7P.png",
          name: "Air Panama - 7P"
        },{
          src: "./assets/partners/A/4A.png",
          name: "Atsa Airlines"
        },{
          src: "./assets/partners/A/3O.png",
          name: "Air Arabia Maroc - 3O"
        },{
          src: "./assets/partners/A/IS.png",
          name: "AIS Airlines - IS"
        },{
          src: "./assets/partners/A/GD.png",
          name: "Aviair - GD"
        },
        {
          src: "./assets/partners/A/AM.png",
          name: "AeroMexico - AM"
        },
        {
          src: "./assets/partners/A/AC.png",
          name: "Air Canada - AC"
        },
        {
          src: "./assets/partners/A/GT.png",
          name: "Air Guilin - GT"
        },
        {
          src: "./assets/partners/A/G9.png",
          name: "Air Arabia - G9"
        },{
          src: "./assets/partners/A/YN.png",
          name: "Air Creebec - YN"
        },{
          src: "./assets/partners/A/TS.png",
          name: "Air Transat - TS"
        },{
          src: "./assets/partners/A/NH.png",
          name: "All Nipon Airways - NH"
        },{
          src: "./assets/partners/A/TN.png",
          name: "Air Tuhiti Nui - TN"
        },{
          src: "./assets/partners/A/UX.png",
          name: "Air Europa - UX"
        }
        ,
        {
          src: "./assets/partners/A/SB.png",
          name: "Aircalin - SB"
        },
        {   
          src: "./assets/partners/A/RV.png",
          name: "Air Canada Rouge - RV"    
        },
        {   
          src: "./assets/partners/A/RS.png",
          name: "Air Seoul - RS"    
        },
        {   
          src: "./assets/partners/A/RF.png",
          name: "Aero K - RF"    
        },
        {   
          src: "./assets/partners/A/QQ.png",
          name: "Alliance Airline - QQ"    
        },
        {   
          src: "./assets/partners/A/PX.png",
          name: "Air Niugini - PX"    
        },
        {   
          src: "./assets/partners/A/PA.png",
          name: "Air Blue - PA"    
        },
        {   
          src: "./assets/partners/A/P4.png",
          name: "Air Peace - P4"    
        },
        {   
          src: "./assets/partners/A/OZ.png",
          name: "Asiana Airlines - OZ"    
        },
        {   
          src: "./assets/partners/A/NZ.png",
          name: "Air New Zealand - NZ"    
        },
        {   
          src: "./assets/partners/A/NQ.png",
          name: "Air Japan - NQ"    
        },
        {   
          src: "./assets/partners/A/NH.png",
          name: "All Nipon Airways - NH"    
        },
        {   
          src: "./assets/partners/A/MZ.png",
          name: "Amakusa Airlines - MZ"    
        },
        {   
          src: "./assets/partners/A/MK.png",
          name: "Air Mauritius - MK"    
        },
        {   
          src: "./assets/partners/A/LZ.png",
          name: "Air Link - LZ"    
        },
        {   
          src: "./assets/partners/A/JU.png",
          name: "Air Serbia - JU"    
        },
        {   
          src: "./assets/partners/A/KP.png",
          name: "ASKP Airlines - KP"    
        },
        {   
          src: "./assets/partners/A/KC.png",
          name: "Air Astana - KC"    
        },
        {   
          src: "./assets/partners/A/MD.png",
          name: "Air Madagascar - MD"    
        },
        {   
          src: "./assets/partners/A/YW.png",
          name: "Air Nostrum - YW"    
        },
        {   
          src: "./assets/partners/A/KT.png",
          name: "AirAsia Cambodia - KT"    
        },
        {   
          src: "./assets/partners/A/AH.png",
          name: "Air Algerie - AH"    
        },
        {   
          src: "./assets/partners/A/BP.png",
          name: "Air Botswana - BP"    
        },
        {   
          src: "./assets/partners/A/PA.png",
          name: "Airblue - PA"    
        },
        {   
          src: "./assets/partners/A/AF.png",
          name: "Air France - AF"    
        },
        {   
          src: "./assets/partners/A/XK.png",
          name: "Air Corsica - XK"    
        },
        {   
          src: "./assets/partners/A/J2.png",
          name: "Azerbaijan Airlines - J2"    
        },
        {   
          src: "./assets/partners/A/HM.png",
          name: "Air Seychelles - HM"    
        },
        {   
          src: "./assets/partners/A/IK.png",
          name: "Air Kirbati - IK"    
        },
        {   
          src: "./assets/partners/A/GR.png",
          name: "AURIGNY - GR"    
        },
        {   
          src: "./assets/partners/A/DU.png",
          name: "Air Liasion - DU"    
        },
        {   
          src: "./assets/partners/A/NF.png",
          name: "Air Vanuatu - NF"    
        },
        {   
          src: "./assets/partners/A/4Z.png",
          name: "Airlink - 4Z"    
        },
        {   
          src: "./assets/partners/A/AV.png",
          name: "Avianca - AV"    
        },
        {   
          src: "./assets/partners/A/TX.png",
          name: "Air Caraibes - TX"    
        },
        {   
          src: "./assets/partners/A/TC.png",
          name: "Air Tanzania- TC"    
        },
        {   
          src: "./assets/partners/A/IX.png",
          name: "Air India Express - IX"    
        },
        {   
          src: "./assets/partners/A/5O.png",
          name: "ASL Airlines France - 5O"    
        },
        {   
          src: "./assets/partners/A/G4.png",
          name: "Allegiant Air - G4"    
        },
        {   
          src: "./assets/partners/A/AD.png",
          name: "Azul Brazillian Airlines - AD"    
        },
        {   
          src: "./assets/partners/A/S4.png",
          name: "Azores Airlines - S4"    
        },
        {   
          src: "./assets/partners/A/IZ.png",
          name: "Arkia Israeli Airlines - IZ"    
        },
        {   
          src: "./assets/partners/A/9H.png",
          name: "Air Changan - 9H"    
        },
        {   
          src: "./assets/partners/A/BX.png",
          name: "Air Busan - BX"    
        },
        {   
          src: "./assets/partners/A/5D.png",
          name: "Aeromexico Connect - 5D"    
        },
        {   
          src: "./assets/partners/A/NX.png",
          name: "Air Macau - NX"    
        },
        {   
          src: "./assets/partners/A/M0.png",
          name: "Aero Mongolia - M0"    
        },
        {   
          src: "./assets/partners/A/YK.png",
          name: "Avia Traffic Company - YK"    
        },
        {   
          src: "./assets/partners/A/SU.png",
          name: "Aeroflot - SU"    
        },
        {   
          src: "./assets/partners/A/EN.png",
          name: "Air Dolomiti - EN"    
        },
        {   
          src: "./assets/partners/A/AP.png",
          name: "AlbaStar - AP"    
        },
        {   
          src: "./assets/partners/A/A4.png",
          name: "Azimuth Airlines - A4"    
        },
        {   
          src: "./assets/partners/A/HC.png",
          name: "Air Senegal - HC"    
        },
        {   
          src: "./assets/partners/A/E5.png",
          name: "Air Arabia Egypt - E5"    
        },
        {   
          src: "./assets/partners/A/AN.png",
          name: "Advanced Air - AN"    
        },
      ],
    "B": [
        {
                  src: "./assets/partners/B/4B.png",
                  name: "Boutique Airlines - 4B",
                },
                {
                  src: "./assets/partners/B/B2.png",
                  name: "Belavia - B2",
                },
                {
                  src: "./assets/partners/B/B3.png",
                  name: "Bhutan Airlines - B3",
                },
                {
                  src: "./assets/partners/B/BA.png",
                  name: "British Airways - BA",
                },
                {
                  src: "./assets/partners/B/BG.png",
                  name: "Biman Bangladesh Airlines - BG",
                },
                {
                  src: "./assets/partners/B/BZ.png",
                  name: "Bluebird Airways - BZ",
                },
                
                {
                  src: "./assets/partners/B/FB.png",
                  name: "Bulgaria Air - FB",
                },
                
                {
                  src: "./assets/partners/B/ID.png",
                  name: "Batik Air Malaysia - OD",
                },
                {
                  src: "./assets/partners/B/JV.png",
                  name: "Bearskin Airlines - JV",
                },
                {
                  src: "./assets/partners/B/MX.png",
                  name: "Breeze Airways - MX",
                },
                {
                  src: "./assets/partners/B/NT.png",
                  name: "Binter Canarias - NT",
                },
                {
                  src: "./assets/partners/B/OB.png",
                  name: "Boliviana de Aviación - OB",
                },
                {
                  src: "./assets/partners/B/OD.png",
                  name: "Batik Air - ID",
                },
                
                {
                  src: "./assets/partners/B/PG.png",
                  name: "Bangkok Airways - PG",
                },
                {
                  src: "./assets/partners/B/QH.png",
                  name: "Bamboo Airways - QH",
                },
                {
                  src: "./assets/partners/B/SN.png",
                  name: "Brussels Airlines - SN",
                },
                {
                  src: "./assets/partners/B/TF.png",
                  name: "Braathens Regional Airlines - TF",
                },
                {
                  src: "./assets/partners/B/U4.png",
                  name: "Buddha Air - U4",
                },
                {
                  src: "./assets/partners/B/UP.png",
                  name: "Bahamasair - UP",
                },
  ],
  "C": [
    {
      "src": "./assets/partners/C/5J.png",
      "name": "Cebu Pacific - 5J"
    },
    {
      "src": "./assets/partners/C/5T.png",
      "name": "Canadian North - 5T"
    },
    {
      "src": "./assets/partners/C/5Z.png",
      "name": "CemAir - 5Z"
    },
    {
      "src": "./assets/partners/C/9K.png",
      "name": "CapeAir - 9K"
    },
    {
      "src": "./assets/partners/C/9M.png",
      "name": "Central Mountain Air - 9M"
    },
    {
      "src": "./assets/partners/C/AU.png",
      "name": "Canada Jetlines - AU"
    },
    {
      "src": "./assets/partners/C/BW.png",
      "name": "Caribbean Airlines - BW"
    },
    {
      "src": "./assets/partners/C/CC.png",
      "name": "CM Airlines - CC"
    },
    {
      "src": "./assets/partners/C/CD.png",
      "name": "Corendon Dutch Airlines - CD"
    },
    {
      "src": "./assets/partners/C/CI.png",
      "name": "China Airlines - CI"
    },
    {
      "src": "./assets/partners/C/CM.png",
      "name": "Copa Airlines - CM"
    },
    {
      "src": "./assets/partners/C/CX.png",
      "name": "Cathay Pacific - CX"
    },
    {
      "src": "./assets/partners/C/CY.png",
      "name": "Cyprus Airways - CY"
    },
    {
      "src": "./assets/partners/C/CZ.png",
      "name": "China Southern - CZ"
    },
    {
      "src": "./assets/partners/C/DE.png",
      "name": "Condor - DE"
    },
    {
      "src": "./assets/partners/C/DG.png",
      "name": "Cebgo - DG"
    },
    {
      "src": "./assets/partners/C/EU.png",
      "name": "Chengdu Air - EU"
    },
    {
      "src": "./assets/partners/C/G5.png",
      "name": "China Express - G5"
    },
    {
      "src": "./assets/partners/C/GM.png",
      "name": "Chair Airlines - GM"
    },
    {
      "src": "./assets/partners/C/GY.png",
      "name": "Colorful Guizhou Airlines - GY"
    },
    {
      "src": "./assets/partners/C/JD.png",
      "name": "Capital Airlines - JD"
    },
    {
      "src": "./assets/partners/C/K6.png",
      "name": "Cambodia Angkor Air - K6"
    },
    {
      "src": "./assets/partners/C/KN.png",
      "name": "China United - KN"
    },
    {
      "src": "./assets/partners/C/KR.png",
      "name": "Cambodia Airways - KR"
    },
    {
      "src": "./assets/partners/C/KX.png",
      "name": "Cayman Airways - KX"
    },
    {
      "src": "./assets/partners/C/LF.png",
      "name": "Contour Airlines - LF"
    },
    {
      "src": "./assets/partners/C/MO.png",
      "name": "Calm Air - MO"
    },
    {
      "src": "./assets/partners/C/MU.png",
      "name": "China Eastern - MU"
    },
    {
      "src": "./assets/partners/C/OK.png",
      "name": "Czech Airlines - OK"
    },
    {
      "src": "./assets/partners/C/OQ.png",
      "name": "Chongqing Airlines - OQ"
    },
    {
      "src": "./assets/partners/C/OU.png",
      "name": "Croatia Airlines - OU"
    },
    {
      "src": "./assets/partners/C/PN.png",
      "name": "China West Air - PN"
    },
    {
      "src": "./assets/partners/C/QG.png",
      "name": "Citilink - QG"
    },
    {
      "src": "./assets/partners/C/SS.png",
      "name": "Corsair - SS"
    },
    {
      "src": "./assets/partners/C/VE.png",
      "name": "Clic Air - VE"
    },
    {
      "src": "./assets/partners/C/VR.png",
      "name": "Cabo Verde Airlines - VR"
    },
    {
      "src": "./assets/partners/C/XC.png",
      "name": "Corendon Airlines - XC"
    },
    {
      "src": "./assets/partners/C/XR.png",
      "name": "Corendon Airlines Europe - XR"
    }
  ],
  "D": [
    {
      "src": "./assets/partners/D/4Y.jpeg",
      "name": "Discover Airlines - 4Y"
    },
    {
      "src": "./assets/partners/D/DL.png",
      "name": "Delta Air Lines - DL"
    },
    {
      "src": "./assets/partners/D/DX.png",
      "name": "Danish Air Transport - DX"
    },
    {
      "src": "./assets/partners/D/DZ.png",
      "name": "Donghai Airlines - DZ"
    },
    {
      "src": "./assets/partners/D/KB.png",
      "name": "Drukair - KB"
    },
    {
      "src": "./assets/partners/D/KG.png",
      "name": "Denver Air Connection - KG"
    }
  ],
  "E": [
    {
      "src": "./assets/partners/E/BR.png",
      "name": "EVA Air - BR"
    },
    {
      "src": "./assets/partners/E/DS.png",
      "name": "EasyJet SA - DS"
    },
    {
      "src": "./assets/partners/E/EC.png",
      "name": "EasyJet Europe - EC"
    },
    {
      "src": "./assets/partners/E/EK.png",
      "name": "Emirates - EK"
    },
    {
      "src": "./assets/partners/E/ET.png",
      "name": "Ethiopian Airlines - ET"
    },
    {
      "src": "./assets/partners/E/EW.png",
      "name": "Eurowings - EW"
    },
    {
      "src": "./assets/partners/E/EY.png",
      "name": "Etihad Airways - EY"
    },
    {
      "src": "./assets/partners/E/LY.png",
      "name": "El Al - LY"
    },
    {
      "src": "./assets/partners/E/MS.png",
      "name": "EgyptAir - MS"
    },
    {
      "src": "./assets/partners/E/T3.png",
      "name": "Eastern Airways - T3"
    },
    {
      "src": "./assets/partners/E/U2.png",
      "name": "EasyJet UK - U2"
    },
    {
      "src": "./assets/partners/E/WK.png",
      "name": "Edelweiss Air - WK"
    },
    {
      "src": "./assets/partners/E/YU.png",
      "name": "EuroAtlantic Airways - YU"
    }
  ],
  "G": [
    {
      "src": "./assets/partners/F/A9.png",
      "name": "Georgian Airways - A9"
    },
    {
      "src": "./assets/partners/F/CN.png",
      "name": "Grand China Air - CN"
    },
    {
      "src": "./assets/partners/F/G3.png",
      "name": "Gol Transportes Aéreos - G3"
    },
    {
      "src": "./assets/partners/F/G8.png",
      "name": "Go First - G8"
    },
    {
      "src": "./assets/partners/F/GA.png",
      "name": "Garuda Indonesia - GA"
    },
    {
      "src": "./assets/partners/F/GF.png",
      "name": "Gulf Air - GF"
    },
    {
      "src": "./assets/partners/F/GX.png",
      "name": "Guangxi Beibu Gulf Airlines - GX"
    },
    {
      "src": "./assets/partners/F/HB.png",
      "name": "Greater Bay Airlines - HB"
    }
  ],
  "F": [
    {
      "src": "./assets/partners/G/5F.png",
      "name": "FlyOne - 5F"
    },
    {
      "src": "./assets/partners/G/8W.png",
      "name": "Fly All Ways - 8W"
    },
    {
      "src": "./assets/partners/G/9P.png",
      "name": "Fly Jinnah - 9P"
    },
    {
      "src": "./assets/partners/G/AY.png",
      "name": "Finnair - AY"
    },
    {
      "src": "./assets/partners/G/BF.png",
      "name": "French Bee - BF"
    },
    {
      "src": "./assets/partners/G/F3.png",
      "name": "flyadeal - F3"
    },
    {
      "src": "./assets/partners/G/F8.png",
      "name": "Flair Airlines - F8"
    },
    {
      "src": "./assets/partners/G/F9.png",
      "name": "Frontier Airlines - F9"
    },
    {
      "src": "./assets/partners/G/FA.png",
      "name": "FlySafair - FA"
    },
    {
      "src": "./assets/partners/G/FJ.png",
      "name": "Fiji Airways - FJ"
    },
    {
      "src": "./assets/partners/G/FO.png",
      "name": "Flybondi - FO"
    },
    {
      "src": "./assets/partners/G/FP.png",
      "name": "FlyPelican - FP"
    },
    {
      "src": "./assets/partners/G/FT.png",
      "name": "FlyEgypt - FT"
    },
    {
      "src": "./assets/partners/G/FU.png",
      "name": "Fuzhou Airlines - FU"
    },
    {
      "src": "./assets/partners/G/FY.png",
      "name": "FireFly - FY"
    },
    {
      "src": "./assets/partners/G/FZ.png",
      "name": "flydubai - FZ"
    },
    {
      "src": "./assets/partners/G/IF.png",
      "name": "Fly Baghdad - IF"
    },
    
    {
      "src": "./assets/partners/G/JH.png",
      "name": "Fuji Dream Airlines - JH"
    },
    {
      "src": "./assets/partners/G/S9.png",
      "name": "flybig - S9"
    },
    {
      "src": "./assets/partners/G/XY.png",
      "name": "Flynas - XY"
    }
  ],
  "H": [
    {
      "src": "./assets/partners/H/2L.png",
      "name": "Helvetic Airways - 2L"
    },
    {
      "src": "./assets/partners/H/6L.png",
      "name": "Hokkaido Air System - 6L"
    },
    {
      "src": "./assets/partners/H/H9.png",
      "name": "Himalaya Airlines - H9"
    },
    {
      "src": "./assets/partners/H/HA.png",
      "name": "Hawaiian Airlines - HA"
    },
    {
      "src": "./assets/partners/H/HU.png",
      "name": "Hainan Airlines - HU"
    },
    {
      "src": "./assets/partners/H/HX.png",
      "name": "Hong Kong Airlines - HX"
    },
    {
      "src": "./assets/partners/H/MR.png",
      "name": "Hunnu Air - MR"
    },
    {
      "src": "./assets/partners/H/NS.png",
      "name": "Hebei Airlines - NS"
    },
    {
      "src": "./assets/partners/H/OI.png",
      "name": "Hinterland Aviation - OI"
    },
    {
      "src": "./assets/partners/H/UO.png",
      "name": "HKExpress - UO"
    }
  ],
  "I": [
    {
      "src": "./assets/partners/I/6E.png",
      "name": "IndiGo - 6E"
    },
    {
      "src": "./assets/partners/I/6H.png",
      "name": "Israir Airlines - 6H"
    },
    {
      "src": "./assets/partners/I/AZ.png",
      "name": "ITA Airways - AZ"
    },
    {
      "src": "./assets/partners/I/B9.png",
      "name": "Iran Airtour - B9"
    },
    {
      "src": "./assets/partners/I/E9.png",
      "name": "Iberojet - E9"
    },
    {
      "src": "./assets/partners/I/FI.png",
      "name": "Icelandair - FI"
    },
    {
      "src": "./assets/partners/I/FW.png",
      "name": "Ibex Airlines - FW"
    },
    {
      "src": "./assets/partners/I/I2.png",
      "name": "Iberia Express - I2"
    },
    {
      "src": "./assets/partners/I/IA.png",
      "name": "Iraqi Airways - IA"
    },
    {
      "src": "./assets/partners/I/IB.png",
      "name": "Iberia - IB"
    },
    {
      "src": "./assets/partners/I/IO.png",
      "name": "IrAero - IO"
    },
    {
      "src": "./assets/partners/I/IR.png",
      "name": "Iran Air - IR"
    },
    {
      "src": "./assets/partners/I/JY.png",
      "name": "interCaribbean Airways - JY"
    },
    {
      "src": "./assets/partners/I/QZ.png",
      "name": "Indonesia AirAsia - QZ"
    }
  ],
  "J": [
    {
      "src": "./assets/partners/J/3K.png",
      "name": "Jetstar Asia - 3K"
    },
    
    {
      "src": "./assets/partners/J/7C.png",
      "name": "Jeju Air - 7C"
    },
    {
      "src": "./assets/partners/J/B6.png",
      "name": "JetBlue - B6"
    },
    {
      "src": "./assets/partners/J/GK.png",
      "name": "Jetstar Japan - GK"
    },
    {
      "src": "./assets/partners/J/HO.png",
      "name": "Juneyao Airlines - HO"
    },
    {
      "src": "./assets/partners/J/J9.png",
      "name": "Jazeera Airways - J9"
    },
    {
      "src": "./assets/partners/J/JA.png",
      "name": "JetSMART - JA"
    },
    {
      "src": "./assets/partners/J/JC.png",
      "name": "Japan Air Commuter - JC"
    },
    {
      "src": "./assets/partners/J/JL.png",
      "name": "Japan Airlines - JL"
    },
    {
      "src": "./assets/partners/J/JQ.png",
      "name": "Jetstar Airways - JQ"
    },
    {
      "src": "./assets/partners/J/JR.png",
      "name": "Joy Air - JR"
    },
    {
      "src": "./assets/partners/J/LJ.png",
      "name": "Jin Air - LJ"
    },
    {
      "src": "./assets/partners/J/NU.png",
      "name": "Japan Transocean Air - NU"
    },
    {
      "src": "./assets/partners/J/RY.png",
      "name": "Jiangxi Air - RY"
    },
    {
      "src": "./assets/partners/J/WJ.png",
      "name": "JetSmart Argentina - WJ"
    }
  ],
  "K": [
    {
      "src": "./assets/partners/K/KE.png",
      "name": "Korean Air - KE"
    },
    {
      "src": "./assets/partners/K/KL.png",
      "name": "KLM Royal Dutch - KL"
    },
    {
      "src": "./assets/partners/K/KM.jpeg",
      "name": "KM Malta Airlines - KM"
    },
    {
      "src": "./assets/partners/K/KQ.png",
      "name": "Kenya Airways - KQ"
    },
    {
      "src": "./assets/partners/K/KU.png",
      "name": "Kuwait Airways - KU"
    },
    {
      "src": "./assets/partners/K/KY.png",
      "name": "Kunming Airlines - KY"
    }
  ],
  "L": [
    {
      "src": "./assets/partners/L/8L.png",
      "name": "Lucky Air - 8L"
    },
    {
      "src": "./assets/partners/L/B0.png",
      "name": "La Compagnie - B0"
    },
    {
      "src": "./assets/partners/L/CL.png",
      "name": "Lufthansa CityLine - CL"
    },
    {
      "src": "./assets/partners/L/FC.png",
      "name": "Link Airways - FC"
    },
    {
      "src": "./assets/partners/L/GJ.png",
      "name": "Loong Air - GJ"
    },
    {
      "src": "./assets/partners/L/JJ.png",
      "name": "LATAM Brazil - JJ"
    },
    {
      "src": "./assets/partners/L/JT.png",
      "name": "Lion Air - JT"
    },
    {
      "src": "./assets/partners/L/LA.png",
      "name": "LATAM Chile - LA"
    },
    {
      "src": "./assets/partners/L/LG.png",
      "name": "Luxair - LG"
    },
    {
      "src": "./assets/partners/L/LH.png",
      "name": "Lufthansa - LH"
    },
    {
      "src": "./assets/partners/L/LI.png",
      "name": "Liat - LI"
    },
    {
      "src": "./assets/partners/L/LK.png",
      "name": "Lao Skyway - LK"
    },
    {
      "src": "./assets/partners/L/LM.png",
      "name": "Loganair - LM"
    },
    {
      "src": "./assets/partners/L/LO.png",
      "name": "LOT Polish Airlines - LO"
    },
    {
      "src": "./assets/partners/L/LP.png",
      "name": "LATAM Perú - LP"
    },
    {
      "src": "./assets/partners/L/LQ.png",
      "name": "Lanmei Airlines - LQ"
    },
    {
      "src": "./assets/partners/L/LT.png",
      "name": "LJ Air - LT"
    },
    {
      "src": "./assets/partners/L/QV.png",
      "name": "Lao Airlines - QV"
    },
    {
      "src": "./assets/partners/L/TM.png",
      "name": "LAM Mozambique Airlines - TM"
    },
    {
      "src": "./assets/partners/L/XL.png",
      "name": "LATAM Ecuador - XL"
    }
  ],
  "M": [
    {
      "src": "./assets/partners/M/7Y.png",
      "name": "Mann Yadanarpon Airlines - 7Y"
    },
    {
      "src": "./assets/partners/M/8M.png",
      "name": "Myanmar Airways International - 8M"
    },
    {
      "src": "./assets/partners/M/AE.png",
      "name": "Mandarin Airlines - AE"
    },
    {
      "src": "./assets/partners/M/DI.png",
      "name": "Marabu Airlines - DI"
    },
    {
      "src": "./assets/partners/M/K7.png",
      "name": "Mingalar Aviation - K7"
    },
    {
      "src": "./assets/partners/M/L6.png",
      "name": "Mauritania Airlines - L6"
    },
    {
      "src": "./assets/partners/M/ME.png",
      "name": "Middle East Airlines - ME"
    },
    {
      "src": "./assets/partners/M/MH.png",
      "name": "Malaysia Airlines - MH"
    },
    {
      "src": "./assets/partners/M/MJ.png",
      "name": "Myway Airlines - MJ"
    },
    {
      "src": "./assets/partners/M/MW.png",
      "name": "Mokulele Airlines - MW"
    },
    {
      "src": "./assets/partners/M/MY.jpeg",
      "name": "MAS Wings - MY"
    },
    {
      "src": "./assets/partners/M/OM.png",
      "name": "Miat Mongolian Airlines - OM"
    },
    {
      "src": "./assets/partners/M/Q2.png",
      "name": "Maldivian - Q2"
    },
    {
      "src": "./assets/partners/M/UB.png",
      "name": "Myanmar National Airlines - UB"
    },
    {
      "src": "./assets/partners/M/W5.png",
      "name": "Mahan Air - W5"
    }
  ],
  "N": [
    {
      "src": "./assets/partners/N/BJ.png",
      "name": "Nouvelair Tunisie - BJ"
    },
    {
      "src": "./assets/partners/N/D8.jpeg",
      "name": "Norwegian Air Sweden - D8"
    },
    {
      "src": "./assets/partners/N/DD.png",
      "name": "Nok Air - DD"
    },
    {
      "src": "./assets/partners/N/DY.jpeg",
      "name": "Norwegian Air Shuttle - DY"
    },
    {
      "src": "./assets/partners/N/IN.png",
      "name": "NAM Air - IN"
    },
    {
      "src": "./assets/partners/N/N0.png",
      "name": "Norse Atlantic Airways - N0"
    },
    {
      "src": "./assets/partners/N/NE.png",
      "name": "Nesma Airlines - NE"
    },
    {
      "src": "./assets/partners/N/NO.png",
      "name": "Neos - NO"
    },
    {
      "src": "./assets/partners/N/NP.png",
      "name": "Nile Air - NP"
    },
    {
      "src": "./assets/partners/N/RA.png",
      "name": "Nepal Airlines - RA"
    },
    {
      "src": "./assets/partners/N/VQ.png",
      "name": "Novoair - VQ"
    },
    {
      "src": "./assets/partners/N/Y7.png",
      "name": "NordStar Airlines - Y7"
    },
    {
      "src": "./assets/partners/N/Z0.png",
      "name": "Norse Atlantic UK - Z0"
    }
  ],
  "O": [
    {
      "src": "./assets/partners/O/BK.png",
      "name": "Okay Airways - BK"
    },
    {
      "src": "./assets/partners/O/OA.png",
      "name": "Olympic Air - OA"
    },
    {
      "src": "./assets/partners/O/OC.png",
      "name": "Oriental Air Bridge - OC"
    },
    {
      "src": "./assets/partners/O/WY.png",
      "name": "Oman Air - WY"
    }
  ],
  "P": [
    {
      "src": "./assets/partners/P/2P.png",
      "name": "PAL Express - 2P"
    },
    {
      "src": "./assets/partners/P/8P.png",
      "name": "Pacific Coastal Airlines - 8P"
    },
    {
      "src": "./assets/partners/P/8Y.png",
      "name": "Pan Pacific Airlines - 8Y"
    },
    {
      "src": "./assets/partners/P/BL.png",
      "name": "Pacific Airlines - BL"
    },
    {
      "src": "./assets/partners/P/CG.png",
      "name": "PNG Air - CG"
    },
    {
      "src": "./assets/partners/P/DP.png",
      "name": "Pobeda - DP"
    },
    {
      "src": "./assets/partners/P/EO.png",
      "name": "Pegas Fly - EO"
    },
    {
      "src": "./assets/partners/P/IP.png",
      "name": "Pelita Air - IP"
    },
    {
      "src": "./assets/partners/P/MM.png",
      "name": "Peach Aviation - MM"
    },
    {
      "src": "./assets/partners/P/OG.png",
      "name": "Play Airlines - OG"
    },
    {
      "src": "./assets/partners/P/P6.png",
      "name": "Pascan Aviation - P6"
    },
    {
      "src": "./assets/partners/P/PB.png",
      "name": "PAL Airlines - PB"
    },
    {
      "src": "./assets/partners/P/PC.png",
      "name": "Pegasus Airlines - PC"
    },
    {
      "src": "./assets/partners/P/PD.png",
      "name": "Porter Airlines - PD"
    },
    {
      "src": "./assets/partners/P/PE.png",
      "name": "People's - PE"
    },
    {
      "src": "./assets/partners/P/PR.png",
      "name": "Philippine Airlines - PR"
    },
    {
      "src": "./assets/partners/P/PU.png",
      "name": "Plus Ultra Lineas Aereas - PU"
    },
    {
      "src": "./assets/partners/P/PW.png",
      "name": "Precision Air - PW"
    },
    {
      "src": "./assets/partners/P/Z2.png",
      "name": "Philippines AirAsia - Z2"
    },
    {
      "src": "./assets/partners/P/ZP.png",
      "name": "Paranair - ZP"
    }
  ],
  "Q": [
    {
      "src": "./assets/partners/Q/IQ.png",
      "name": "Qazaq Air - IQ"
    },
    {
      "src": "./assets/partners/Q/QF.png",
      "name": "Qantas Airways - QF"
    },
    {
      "src": "./assets/partners/Q/QR.png",
      "name": "Qatar Airways - QR"
    },
    {
      "src": "./assets/partners/Q/QW.png",
      "name": "Qingdao Airlines - QW"
    }
  ],
  "R": [
    {
      "src": "./assets/partners/R/7H.png",
      "name": "Ravn Alaska - 7H"
    },
    {
      "src": "./assets/partners/R/AT.png",
      "name": "Royal Air Maroc - AT"
    },
    {
      "src": "./assets/partners/R/BI.png",
      "name": "Royal Brunei Airlines - BI"
    },
    {
      "src": "./assets/partners/R/DR.png",
      "name": "Ruili Airlines - DR"
    },
    {
      "src": "./assets/partners/R/FR.png",
      "name": "Ryanair - FR"
    },
    {
      "src": "./assets/partners/R/RJ.png",
      "name": "Royal Jordanian - RJ"
    },
    {
      "src": "./assets/partners/R/RK.png",
      "name": "Ryanair UK - RK"
    },
    {
      "src": "./assets/partners/R/RW.png",
      "name": "Royal Air Philippines - RW"
    },
    {
      "src": "./assets/partners/R/WB.png",
      "name": "RwandAir - WB"
    },
    {
      "src": "./assets/partners/R/ZL.png",
      "name": "Regional Express Airlines - ZL"
    }
  ],
  "S": [
    {
      "src": "./assets/partners/S/2I.png",
      "name": "Star Perú - 2I"
    },
    {
      "src": "./assets/partners/S/2R.jpeg",
      "name": "Sunlight Air - 2R"
    },
    {
      "src": "./assets/partners/S/3M.jpeg",
      "name": "Silver Airways - 3M"
    },
    {
      "src": "./assets/partners/S/3U.png",
      "name": "Sichuan Airlines - 3U"
    },
    {
      "src": "./assets/partners/S/5N.png",
      "name": "Smartavia - 5N"
    },
    {
      "src": "./assets/partners/S/6J.png",
      "name": "Solaseed Air - 6J"
    },
    {
      "src": "./assets/partners/S/7G.png",
      "name": "StarFlyer - 7G"
    },
    {
      "src": "./assets/partners/S/8F.png",
      "name": "STP Airways - 8F"
    },
    {
      "src": "./assets/partners/S/9C.png",
      "name": "Spring Airlines - 9C"
    },
    {
      "src": "./assets/partners/S/9X.png",
      "name": "Southern Airways Express - 9X"
    },
    {
      "src": "./assets/partners/S/BC.png",
      "name": "Skymark Airlines - BC"
    },
    {
      "src": "./assets/partners/S/BQ.png",
      "name": "Sky Alps - BQ"
    },
    {
      "src": "./assets/partners/S/DO.png",
      "name": "Sky High Aviation Services - DO"
    },
    {
      "src": "./assets/partners/S/DV.png",
      "name": "SCAT Airlines - DV"
    },
    {
      "src": "./assets/partners/S/ER.png",
      "name": "Serene Air - ER"
    },
    {
      "src": "./assets/partners/S/FM.png",
      "name": "Shanghai Air - FM"
    },
    {
      "src": "./assets/partners/S/GQ.png",
      "name": "Sky Express - GQ"
    },
    {
      "src": "./assets/partners/S/H2.png",
      "name": "Sky Airline - H2"
    },
    {
      "src": "./assets/partners/S/IE.png",
      "name": "Solomon Airlines - IE"
    },
    {
      "src": "./assets/partners/S/IJ.png",
      "name": "Spring Japan - IJ"
    },
    {
      "src": "./assets/partners/S/IU.png",
      "name": "Super Air Jet - IU"
    },
    {
      "src": "./assets/partners/S/JX.png",
      "name": "Starlux Airlines - JX"
    },
    {
      "src": "./assets/partners/S/LX.png",
      "name": "Swiss International Air Lines - LX"
    },
    {
      "src": "./assets/partners/S/M8.png",
      "name": "SkyJet Airlines - M8"
    },
    {
      "src": "./assets/partners/S/NK.png",
      "name": "Spirit Airlines - NK"
    },
    {
      "src": "./assets/partners/S/OL.png",
      "name": "Samoa Airways - OL"
    },
    {
      "src": "./assets/partners/S/OV.png",
      "name": "Salam Air - OV"
    },
    {
      "src": "./assets/partners/S/PQ.png",
      "name": "SkyUp Airlines - PQ"
    },
    {
      "src": "./assets/partners/S/PY.png",
      "name": "Surinam Airways - PY"
    },
    {
      "src": "./assets/partners/S/QN.png",
      "name": "Skytrans Airlines - QN"
    },
    {
      "src": "./assets/partners/S/QS.png",
      "name": "SmartWings - QS"
    },
    {
      "src": "./assets/partners/S/S5.png",
      "name": "Star Air - S5"
    },
    {
      "src": "./assets/partners/S/S7.png",
      "name": "S7"
    },
    {
      "src": "./assets/partners/S/S8.png",
      "name": "Sounds Air - S8"
    },
    {
      "src": "./assets/partners/S/SA.png",
      "name": "South African Airways - SA"
    },
    {
      "src": "./assets/partners/S/SC.png",
      "name": "Shandong Air - SC"
    },
    {
      "src": "./assets/partners/S/SG.png",
      "name": "SpiceJet - SG"
    },
    {
      "src": "./assets/partners/S/SH.png",
      "name": "Sharp Airlines - SH"
    },
    {
      "src": "./assets/partners/S/SJ.png",
      "name": "Sriwijaya Air - SJ"
    },
    {
      "src": "./assets/partners/S/SK.png",
      "name": "Scandinavian Airlines - SK"
    },
    {
      "src": "./assets/partners/S/SP.png",
      "name": "SATA Air Açores - SP"
    },
    {
      "src": "./assets/partners/S/SQ.png",
      "name": "Singapore Airlines - SQ"
    },
    {
      "src": "./assets/partners/S/SV.png",
      "name": "Saudia - SV"
    },
    {
      "src": "./assets/partners/S/SY.png",
      "name": "Sun Country Airlines - SY"
    },
    {
      "src": "./assets/partners/S/TR.png",
      "name": "Scoot - TR"
    },
    {
      "src": "./assets/partners/S/UL.png",
      "name": "SriLankan Airlines - UL"
    },
    {
      "src": "./assets/partners/S/WG.png",
      "name": "Sunwing Airlines - WG"
    },
    {
      "src": "./assets/partners/S/WN.png",
      "name": "Southwest Airlines - WN"
    },
    {
      "src": "./assets/partners/S/XQ.png",
      "name": "SunExpress - XQ"
    },
    {
      "src": "./assets/partners/S/Y8.png",
      "name": "Suparna Airlines - Y8"
    },
    {
      "src": "./assets/partners/S/ZA.png",
      "name": "Sky Angkor - ZA"
    },
    {
      "src": "./assets/partners/S/ZH.png",
      "name": "Shenzhen Airlines - ZH"
    }
  ],
  "T": [
    {
      "src": "./assets/partners/T/5U.png",
      "name": "Transportes Aéreos Guatemaltecos - 5U"
    },
    {
      "src": "./assets/partners/T/8B.png",
      "name": "TransNusa - 8B"
    },
    {
      "src": "./assets/partners/T/9N.png",
      "name": "Tropic Air - 9N"
    },
    {
      "src": "./assets/partners/T/BY.png",
      "name": "TUI Airways - BY"
    },
    {
      "src": "./assets/partners/T/DT.png",
      "name": "TAAG Angola Airlines - DT"
    },
    {
      "src": "./assets/partners/T/FD.png",
      "name": "Thai AirAsia - FD"
    },
    {
      "src": "./assets/partners/T/GS.png",
      "name": "Tianjin Air - GS"
    },
    {
      "src": "./assets/partners/T/HV.png",
      "name": "Transavia - HV"
    },
    {
      "src": "./assets/partners/T/IT.png",
      "name": "Tigerair Taiwan - IT"
    },
    {
      "src": "./assets/partners/T/OR.png",
      "name": "TUIfly Netherlands - OR"
    },
    {
      "src": "./assets/partners/T/RO.png",
      "name": "TAROM - RO"
    },
    {
      "src": "./assets/partners/T/SF.png",
      "name": "Tassili Airlines - SF"
    },
    {
      "src": "./assets/partners/T/SL.png",
      "name": "Thai Lion Air - SL"
    },
    {
      "src": "./assets/partners/T/T5.png",
      "name": "Turkmenistan Airlines - T5"
    },
    {
      "src": "./assets/partners/T/T7.png",
      "name": "Twinjet - T7"
    },
    {
      "src": "./assets/partners/T/TB.png",
      "name": "TUI fly Belgium - TB"
    },
    {
      "src": "./assets/partners/T/TG.png",
      "name": "Thai Airways - TG"
    },
    {
      "src": "./assets/partners/T/TK.png",
      "name": "Turkish Airlines - TK"
    },
    {
      "src": "./assets/partners/T/TO.png",
      "name": "Transavia France - TO"
    },
    {
      "src": "./assets/partners/T/TP.png",
      "name": "TAP Portugal - TP"
    },
    {
      "src": "./assets/partners/T/TU.png",
      "name": "Tunisair - TU"
    },
    {
      "src": "./assets/partners/T/TV.png",
      "name": "Tibet Airlines - TV"
    },
    {
      "src": "./assets/partners/T/TW.png",
      "name": "T'way Air - TW"
    },
    {
      "src": "./assets/partners/T/U8.png",
      "name": "TUS Airways - U8"
    },
    {
      "src": "./assets/partners/T/UG.png",
      "name": "Tunisair Express - UG"
    },
    {
      "src": "./assets/partners/T/VZ.png",
      "name": "Thai Vietjet Air - VZ"
    },
    {
      "src": "./assets/partners/T/X3.png",
      "name": "TUI fly Deutschland - X3"
    },
    {
      "src": "./assets/partners/T/XJ.png",
      "name": "Thai AirAsia X - XJ"
    },
    {
      "src": "./assets/partners/T/YQ.png",
      "name": "TAR Aerolineas - YQ"
    }
  ],
  "U": [
    {
      "src": "./assets/partners/U/4B.png",
      "name": "US-Bangla Airlines - BS"
    },
    {
      "src": "./assets/partners/U/B7.png",
      "name": "UNI Air - B7"
    },
    {
      "src": "./assets/partners/U/HY.png",
      "name": "Uzbekistan Airways - HY"
    },
    {
      "src": "./assets/partners/U/PS.png",
      "name": "Ukraine International Airlines - PS"
    },
    {
      "src": "./assets/partners/U/U6.png",
      "name": "Ural Airlines - U6"
    },
    {
      "src": "./assets/partners/U/UA.png",
      "name": "United Airlines - UA"
    },
    {
      "src": "./assets/partners/U/UQ.png",
      "name": "Urumqi Air - UQ"
    },
    {
      "src": "./assets/partners/U/UR.png",
      "name": "Uganda Airlines - UR"
    },
    {
      "src": "./assets/partners/U/UT.png",
      "name": "Utair - UT"
    }
  ],
  "V": [
    {
      "src": "./assets/partners/V/Q6.png",
      "name": "Volaris Costa Rica - Q6"
    },
    {
      "src": "./assets/partners/V/UK.png",
      "name": "Vistara - UK"
    },
    {
      "src": "./assets/partners/V/V7.png",
      "name": "Volotea - V7"
    },
    {
      "src": "./assets/partners/V/VA.png",
      "name": "Virgin Australia - VA"
    },
    {
      "src": "./assets/partners/V/VB.png",
      "name": "Viva Aerobus - VB"
    },
    
    {
      "src": "./assets/partners/V/VJ.png",
      "name": "Vietjet Air - VJ"
    },
    {
      "src": "./assets/partners/V/VN.png",
      "name": "Vietnam Airlines - VN"
    },
    {
      "src": "./assets/partners/V/VS.png",
      "name": "Virgin Atlantic - VS"
    },
    {
      "src": "./assets/partners/V/VU.png",
      "name": "Vietravel Airlines - VU"
    },
    {
      "src": "./assets/partners/V/VY.png",
      "name": "Vueling Airlines - VY"
    },
    {
      "src": "./assets/partners/V/Y4.png",
      "name": "Volaris - Y4"
    }
  ],
  "W": [
    {
      "src": "./assets/partners/W/2W.png",
      "name": "World2Fly - 2W"
    },
    {
      "src": "./assets/partners/W/5W.png",
      "name": "WestJet - WS"
    },
    {
      "src": "./assets/partners/W/IW.png",
      "name": "Wings Air - IW"
    },
    {
      "src": "./assets/partners/W/P5.png",
      "name": "Wingo - P5"
    },
    {
      "src": "./assets/partners/W/W4.png",
      "name": "Wizz Air Malta - W4"
    },
    {
      "src": "./assets/partners/W/W6.png",
      "name": "Wizz Air - W6"
    },
    {
      "src": "./assets/partners/W/W9.png",
      "name": "Wizz Air UK - W9"
    },
    {
      "src": "./assets/partners/W/WF.png",
      "name": "Wideroe - WF"
    },
    {
      "src": "./assets/partners/W/WS.png",
      "name": "WestJet - WS"
    }
  ],
  "X": [
    {
      "src": "./assets/partners/X/MF.png",
      "name": "Xiamen Air - MF"
    }
  ],
  "Y": [
    {
      "src": "./assets/partners/Y/R3.png",
      "name": "Yakutia Airlines - R3"
    },
    {
      "src": "./assets/partners/Y/YT.png",
      "name": "Yeti Airlines - YT"
    }
  ],
  "Z": [
    {
      "src": "./assets/partners/Z/4B.png",
      "name": "ZIPAIR Tokyo - ZG"
    }
  ]
}
  


  
  // Iterate through each letter (array) in the alphabet
  for (const letter in alphabetArrays) {
    // For each object in the current letter array, create the DOM elements
    alphabetArrays[letter].forEach(partner => {
      // Create elements
      const span1 = document.createElement('span');
      const span2 = document.createElement('h6');
      const img = document.createElement('img');
      
      // Set attributes/content
      img.src = partner.src;  // Image source from the partner object
      span2.innerText = partner.name;  // Partner name
      
      // Append img to span1, then h6 to span1
      span1.appendChild(img);
      span1.appendChild(span2);
      
      // Append the complete span1 to the corresponding div
      document.querySelector(`#${letter}`).appendChild(span1);
    });
  }
  