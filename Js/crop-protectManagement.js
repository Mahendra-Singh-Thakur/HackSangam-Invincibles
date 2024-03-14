const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cropInfo = {
    "rice": {
        "maintenance": "Keep fields flooded during early growth, then reduce water level before harvesting.",
        "fertilizers": "Nitrogen-rich fertilizers such as urea, apply during tillering and panicle initiation stages.",
        "irrigation_frequency": "Maintain standing water in the field throughout most of the growing season.",
        "harvest_time": "Harvest when grains are fully ripe and golden, typically after 100-150 days of planting."
    },
    "wheat": {
        "maintenance": "Keep weeds under control and monitor for pests and diseases.",
        "fertilizers": "Apply nitrogen-based fertilizers before sowing and during growth stages.",
        "irrigation_frequency": "Depends on rainfall, usually irrigate every 10-15 days during the growing season.",
        "harvest_time": "Harvest when grains are fully mature, typically after 100-120 days of sowing."
    },
    "sugarcane": {
        "maintenance": "Control weeds and monitor for pests such as aphids and borers.",
        "fertilizers": "Apply nitrogen-based fertilizers during early growth stages and phosphorus for root development.",
        "irrigation_frequency": "Regular irrigation, particularly during dry periods.",
        "harvest_time": "Harvest when canes are fully mature, typically after 12-18 months of planting."
    },
    "cotton": {
        "maintenance": "Control weeds and monitor for pests like bollworms.",
        "fertilizers": "Apply nitrogen-rich fertilizers during early growth stages.",
        "irrigation_frequency": "Water regularly, particularly during the flowering and boll development stages.",
        "harvest_time": "Harvest when bolls are fully mature, typically after 150-180 days of planting."
    },
    "maize": {
        "maintenance": "Control weeds and monitor for pests such as stem borers and armyworms.",
        "fertilizers": "Apply nitrogen-based fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Regular irrigation, particularly during dry spells.",
        "harvest_time": "Harvest when kernels are fully developed, typically after 90-120 days of planting."
    },
    "barley": {
        "maintenance": "Monitor for pests and diseases, particularly fungal diseases like powdery mildew.",
        "fertilizers": "Apply nitrogen-based fertilizers before planting and during early growth stages.",
        "irrigation_frequency": "Depends on rainfall, but barley requires less water than wheat.",
        "harvest_time": "Harvest when grains are fully developed but still soft, typically after 60-90 days of planting."
    },
    "tea": {
        "maintenance": "Prune bushes regularly, control weeds, and monitor for pests such as tea mosquito bug.",
        "fertilizers": "Apply nitrogen-rich fertilizers, particularly during the growing season.",
        "irrigation_frequency": "Regular irrigation, keeping the soil moist but not waterlogged.",
        "harvest_time": "Harvest young leaves throughout the growing season, typically every 7-14 days."
    },
    "coffee": {
        "maintenance": "Prune trees regularly, control weeds, and monitor for pests such as coffee berry borer.",
        "fertilizers": "Apply balanced fertilizers, particularly during flowering and fruiting stages.",
        "irrigation_frequency": "Regular irrigation, particularly during dry spells.",
        "harvest_time": "Harvest ripe cherries manually, typically in cycles over several months."
    },
    "millet": {
        "maintenance": "Control weeds and monitor for pests such as birds and grasshoppers.",
        "fertilizers": "Apply nitrogen-based fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Millet is drought-tolerant but benefits from occasional irrigation during dry spells.",
        "harvest_time": "Harvest when grains are fully mature, typically after 60-90 days of planting."
    },
    "pulses": {
        "maintenance": "Control weeds and monitor for pests such as pod borers and aphids.",
        "fertilizers": "Apply nitrogen-fixing fertilizers or organic manure, particularly before sowing.",
        "irrigation_frequency": "Water moderately, avoiding waterlogging, particularly during flowering and pod development.",
        "harvest_time": "Harvest when pods are fully mature but before they shatter, typically after 60-120 days of planting."
    },
    "groundnut": {
        "maintenance": "Control weeds and monitor for pests such as aphids, thrips, and leaf miners.",
        "fertilizers": "Apply balanced fertilizers with emphasis on phosphorus, particularly during early growth stages.",
        "irrigation_frequency": "Regular irrigation, particularly during flowering and pod development stages.",
        "harvest_time": "Harvest when pods are fully developed but before they become too mature, typically after 90-150 days of planting."
    },
    "mustard": {
        "maintenance": "Control weeds and monitor for pests such as aphids, flea beetles, and caterpillars.",
        "fertilizers": "Apply balanced fertilizers, particularly before sowing and during early growth stages.",
        "irrigation_frequency": "Water moderately, ensuring soil moisture during flowering and pod formation.",
        "harvest_time": "Harvest when seeds are fully developed but before pods start shattering, typically after 90-120 days of planting."
    },
    "vegetables": {
        "maintenance": "Regularly weed, monitor for pests and diseases, and provide support if needed.",
        "fertilizers": "Apply balanced fertilizers or organic compost, particularly before planting and during growth stages.",
        "irrigation_frequency": "Varies depending on the vegetable, but generally water regularly, keeping soil evenly moist.",
        "harvest_time": "Harvest vegetables when they reach desired size and maturity, varies by type."
    },
    "fruits": {
        "maintenance": "Prune trees regularly, control pests and diseases, and provide necessary support.",
        "fertilizers": "Apply balanced fertilizers or organic compost, particularly during the growing season.",
        "irrigation_frequency": "Varies depending on the fruit tree, but generally water regularly, particularly during dry spells.",
        "harvest_time": "Harvest fruits when they reach desired ripeness and size, varies by type."
    },
    "oilseeds": {
        "maintenance": "Control weeds and monitor for pests such as aphids, caterpillars, and thrips.",
        "fertilizers": "Apply balanced fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Water moderately, particularly during flowering and pod development stages.",
        "harvest_time": "Harvest when seeds are fully mature but before pods start shattering, varies by type."
    },
    "jute": {
        "maintenance": "Control weeds and monitor for pests such as jute semilooper and aphids.",
        "fertilizers": "Apply nitrogen-rich fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Regular irrigation, particularly during dry spells.",
        "harvest_time": "Harvest when stems start turning yellow, typically after 120-150 days of planting."
    },
    "safflower": {
        "maintenance": "Control weeds and monitor for pests such as aphids, caterpillars, and thrips.",
        "fertilizers": "Apply balanced fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Water moderately, particularly during flowering and seed development stages.",
        "harvest_time": "Harvest when seeds are fully mature but before pods start shattering, typically after 120-150 days of planting."
    },
    "turmeric": {
        "maintenance": "Control weeds and monitor for pests such as rhizome scale and leaf spot diseases.",
        "fertilizers": "Apply organic manure or balanced fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Water moderately, particularly during rhizome development.",
        "harvest_time": "Harvest when leaves start drying up, typically after 7-10 months of planting."
    },
    "ginger": {
        "maintenance": "Control weeds and monitor for pests such as rhizome rot and rhizome scale.",
        "fertilizers": "Apply organic manure or balanced fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Water moderately, particularly during rhizome development.",
        "harvest_time": "Harvest when leaves start drying up, typically after 8-10 months of planting."
    },
    "garlic": {
        "maintenance": "Control weeds and monitor for pests such as garlic bulb mites and white rot diseases.",
        "fertilizers": "Apply organic manure or balanced fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Water moderately, particularly during bulb development.",
        "harvest_time": "Harvest when leaves start turning yellow and drying up, typically after 8-9 months of planting."
    },
    "onion": {
        "maintenance": "Control weeds and monitor for pests such as onion thrips and white rot diseases.",
        "fertilizers": "Apply balanced fertilizers, particularly during early growth stages.",
        "irrigation_frequency": "Water moderately, particularly during bulb development.",
        "harvest_time": "Harvest when leaves start turning yellow and drying up, typically after 4-6 months of planting."
    },
    "banana": {
        "maintenance": "Control weeds and monitor for pests such as banana aphids and banana weevils.",
        "fertilizers": "Apply balanced fertilizers, particularly during flowering and fruiting stages.",
        "irrigation_frequency": "Regular irrigation, particularly during dry spells.",
        "harvest_time": "Harvest when fruits are fully mature but still green, typically after 8-10 months of planting."
    }
};

function suggestCropCare(cropName) {
    const normalizedCropName = cropName.toLowerCase();

    if (normalizedCropName in cropInfo) {
        console.log("Maintenance Techniques:", cropInfo[normalizedCropName]["maintenance"]);
        console.log("Recommended Fertilizers:", cropInfo[normalizedCropName]["fertilizers"]);
        console.log("Irrigation Frequency:", cropInfo[normalizedCropName]["irrigation_frequency"]);
        console.log("Harvesting Time:", cropInfo[normalizedCropName]["harvest_time"]);
    } else {
        console.log(`Crop information not available for '${cropName}'.`);
    }

    rl.close();
}

function main() {
    rl.question("Enter the name of the crop: ", (cropName) => {
        suggestCropCare(cropName);
    });
}

// Example of usage
main();
