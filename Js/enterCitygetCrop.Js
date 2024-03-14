const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function suggestCrops(city, month) {
    const cityPlantingZones = {
        "jaipur": "arid",
        "jaisalmer": "arid",
        "bikaner": "arid",
        "udaipur": "arid",
        "jodhpur": "arid",
        "mumbai": "tropical",
        "delhi": "tropical",
        "kolkata": "tropical",
        "chennai": "tropical",
        "bangalore": "tropical",
        "hyderabad": "tropical",
        "pune": "tropical",
        "ahmedabad": "tropical",
        "surat": "tropical",
        "lucknow": "tropical",
        "kanpur": "tropical",
        "patna": "tropical",
        "indore": "tropical",
        "varanasi": "tropical",
        "agra": "tropical",
        "vishakhapatnam": "tropical",
        "kochi": "tropical",
        "nagpur": "tropical",
        "bhopal": "tropical",
        "coimbatore": "tropical",
        "ludhiana": "tropical",
        "amritsar": "tropical",
        "vadodara": "tropical",
        "raipur": "tropical",
        "ranchi": "tropical",
        "chandigarh": "tropical",
        "guwahati": "tropical",
        "bhubaneswar": "tropical",
        "thiruvananthapuram": "tropical",
        "jammu": "tropical",
        "dehradun": "tropical",
        "srinagar": "tropical",
        "raipur": "tropical",
        "visakhapatnam": "tropical",
        "vijayawada": "tropical",
        "allahabad": "tropical",
        "kota": "tropical",
        "gurgaon": "tropical",
        "noida": "tropical",
        "ghaziabad": "tropical",
        "meerut": "tropical",
        "faridabad": "tropical",
        "jamshedpur": "tropical",
        "jabalpur": "tropical",
        "shimla": "temperate",
        "gangtok": "temperate",
        "darjeeling": "temperate",
        "nainital": "temperate",
        "shillong": "temperate",
        "ooty": "temperate",
        "mussoorie": "temperate",
        "manali": "temperate",
        "mount abu": "temperate",
        "dalhousie": "temperate",
        "leh": "continental",
        "aizawl": "continental",
        "imphal": "continental",
        "itanagar": "continental",
        "kohima": "continental",
        "agartala": "continental",
        "panaji": "continental",
        "siliguri": "continental",
        "patiala": "subtropical",
        "mathura": "subtropical",
        "karnal": "subtropical",
        "aligarh": "subtropical",
        "moradabad": "subtropical",
        "roorkee": "subtropical",
        "bareilly": "subtropical",
        "hisar": "subtropical",
        "firozabad": "subtropical"
    };

    const plantingSchedule = {
        "arid": {
            "spring": ["tomatoes", "peppers", "cucumbers", "eggplant", "okra", "watermelon"],
            "summer": ["okra", "peppers", "tomatoes", "cucumbers", "watermelon", "muskmelon"],
            "autumn": ["cabbage", "cauliflower", "lettuce", "spinach", "carrots", "radishes"],
            "winter": ["cabbage", "cauliflower", "lettuce", "spinach", "carrots", "radishes"]
        },
        "tropical": {
            "spring": ["tomatoes", "cucumbers", "peppers", "eggplant", "okra", "pumpkins"],
            "summer": ["okra", "peppers", "tomatoes", "cucumbers", "pumpkins", "bitter gourd"],
            "autumn": ["beans", "bottle gourd", "ridge gourd", "pumpkins", "spinach", "coriander"],
            "winter": ["spinach", "coriander", "fenugreek", "radishes", "lettuce", "carrots"]
        },
        "temperate": {
            "spring": ["peas", "lettuce", "kale", "spinach", "carrots", "radishes"],
            "summer": ["beans", "cabbage", "cauliflower", "broccoli", "lettuce", "potatoes"],
            "autumn": ["spinach", "lettuce", "kale", "cabbage", "carrots", "radishes"],
            "winter": ["cabbage", "cauliflower", "broccoli", "beets", "turnips", "garlic"]
        },
        "continental": {
            "spring": ["peas", "lettuce", "kale", "spinach", "carrots", "radishes"],
            "summer": ["beans", "cabbage", "cauliflower", "broccoli", "lettuce", "potatoes"],
            "autumn": ["spinach", "lettuce", "kale", "cabbage", "carrots", "radishes"],
            "winter": ["cabbage", "cauliflower", "broccoli", "beets", "turnips", "garlic"]
        },
        "subtropical": {
            "spring": ["tomatoes", "cucumbers", "peppers", "eggplant", "okra", "pumpkins"],
            "summer": ["okra", "peppers", "tomatoes", "cucumbers", "pumpkins", "bitter gourd"],
            "autumn": ["beans", "bottle gourd", "ridge gourd", "pumpkins", "spinach", "coriander"],
            "winter": ["spinach", "coriander", "fenugreek", "radishes", "lettuce", "carrots"]
        }
        // ... (same as before)
    };

    city = city.trim().toLowerCase();  // Normalize city name
    month = month.trim().toLowerCase();  // Normalize month name

    const plantingZone = cityPlantingZones[city];
    if (!plantingZone) {
        console.log("Sorry, I'm not sure about the planting zone for that city.");
        rl.close();
        return;
    }

    let season;

    if (["january", "february", "december"].includes(month)) {
        season = "winter";
    } else if (["march", "april", "may"].includes(month)) {
        season = "spring";
    } else if (["june", "july", "august"].includes(month)) {
        season = "summer";
    } else if (["september", "october", "november"].includes(month)) {
        season = "autumn";
    } else {
        console.log("Sorry, I'm not sure about the season for that month.");
        rl.close();
        return;
    }

    if (plantingSchedule[plantingZone][season]) {
        console.log(`In ${city.charAt(0).toUpperCase() + city.slice(1)}, the upcoming season is ${season}. You should plant crops like ${plantingSchedule[plantingZone][season].join(', ')}.`);
    } else {
        console.log("Sorry, I couldn't determine the upcoming season for the given city and month.");
    }

    rl.close();
}

// Example of usage
rl.question("Enter your city: ", (city) => {
    rl.question("Enter the current month: ", (month) => {
        suggestCrops(city, month);
    });
});
