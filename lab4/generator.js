const fs = require('fs');
const path = require('path');

let year = 1961;

// Array of fictional countries with their short codes
const fictionalCountries = [
    { country: "Trasiland", country_short_name: "TRAS" },
    { country: "Elvoria", country_short_name: "ELVO" },
    { country: "Zantrix", country_short_name: "ZAN" },
    { country: "Novara", country_short_name: "NOVA" },
    { country: "Velterra", country_short_name: "VEL" },
    { country: "Galdor", country_short_name: "GAL" },
    { country: "Mythoria", country_short_name: "MYTH" },
    { country: "Xenovia", country_short_name: "XENO" },
    { country: "Lithoria", country_short_name: "LITH" },
    { country: "Yveria", country_short_name: "YVER" }
];

// Function to get a random country and code from fictionalCountries array
function getRandomCountry() {
    return fictionalCountries[Math.floor(Math.random() * fictionalCountries.length)];
}

function generateData() {
    const randomCountry = getRandomCountry();
    return {
        id: Math.floor(Math.random() * 3) + 1,
        entity: randomCountry.country,
        code: randomCountry.country_short_name,
        year: year++,
        human_food: Math.floor(Math.random() * (80000 - 30000) + 30000), // Random between 30000 and 80000
        animal_feed: Math.floor(Math.random() * (10000 - 5000) + 5000),  // Random between 5000 and 10000
        processed: Math.floor(Math.random() * (40000 - 2000) + 2000),     // Random between 2000 and 40000
        timestamp: new Date().toISOString()
    };
}

// Function to write data to file periodically
function writeDataToFile() {
    const data = generateData();
    const filePath = path.join(__dirname, 'data.json');
    
    // Append data to file
    fs.appendFile(filePath, JSON.stringify(data) + '\n', (err) => {
        if (err) {
          throw err;
        }
        console.log("Data written:", data);
    });
}

// Run writeDataToFile every 2 seconds
setInterval(writeDataToFile, 2000);
