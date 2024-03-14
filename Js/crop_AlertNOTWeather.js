function alert1() {
    console.log("Urgent: Heavy rainfall expected in your region in the next 48 hours. Secure your crops and livestock.\n");
    console.log("Loan Alert: Low-interest agricultural loans available. Visit your nearest bank branch for more details.\n");
    console.log("Latest Market Report: Decrease in demand for [Crop] anticipated. Plan your harvest and sales accordingly.\n");
    console.log("Policy Change Notification: Revised guidelines for agricultural loans announced. Visit your local bank for more information.\n");
}

function alert2() {
    console.log("Alert: Severe storm warning for your area. Take necessary precautions to protect your crops and property.\n");
    console.log("Attention farmers: Increase in cases of [specific disease] reported nearby. Apply preventive measures immediately.\n");
    console.log("Opportunity: Grants available for adopting sustainable farming practices. Apply at [website] before the deadline.\n");
}

function alert3() {
    console.log("Update: [Crop] disease outbreak confirmed in your district. Recommended treatment available at local agricultural extension office.\n");
    console.log("Government Scheme Update: New subsidy program launched for [specific crop]. Check eligibility and apply now.\n");
}

function alert4() {
    console.log("Important: Seasonal forecast predicts a prolonged dry spell. Plan your irrigation accordingly.\n");
    console.log("Market Alert: Prices for [Crop] have risen by 15% in the past week. Consider adjusting your sales strategy accordingly.\n");
    console.log("Critical: Early signs of [disease] detected in neighboring farms. Check your crops for symptoms and report any issues.\n");
    console.log("Reminder: Enrollment for the [Government Scheme] closing soon. Ensure you avail of the benefits in time.\n");
}

function alert5() {
    console.log("Financial Literacy Workshop: Attend a session on effective financial management for farmers this weekend at [location].\n");
    console.log("Important: Sudden increase in export demand for [Crop]. Take advantage of favorable market conditions.\n");
}

function alert6() {
    console.log("Investment Opportunity: Explore agri-tech startups for potential collaboration. Diversify your income sources.\n");
    console.log("Government Initiative: Subsidies available for adopting smart irrigation systems. Upgrade your farm for cost-effective benefits.\n");
    console.log("Market Insight: Anticipated surge in demand for [Crop] due to upcoming festivals. Adjust your pricing strategy accordingly.\n");
    console.log("Important: Temperature drop forecasted tonight. Protect sensitive crops from potential frost damage.\n");
    console.log("Alert: Surge in cases of [specific disease] reported. Immediate action required to prevent widespread contamination.\n");
}

function alert7() {
    console.log("Caution: High winds expected in your area. Secure loose objects and reinforce crop support structures.\n");
    console.log("Special Notice: Premium prices offered for organic [Crop]. Explore certification options for increased profitability.\n");
}

function alert8() {
    console.log("Price Drop Alert: Prices for [Crop] have fallen by 10% this week. Consider storing or diversifying your products.\n");
}

function alert9() {
    console.log("Legal Update: New regulations support farmers in accessing direct markets. Attend a local workshop for guidance.\n");
    console.log("Reminder: Application deadline for the [Government Scheme] extended. Don't miss out on the financial support available.\n");
    console.log("Financial Aid Alert: Grants offered for sustainable water management projects. Submit your proposal for consideration.\n");
}

function alert10() {
    console.log("Taxation Update: New exemptions for farmers implemented. Consult with a financial advisor for potential savings.\n");
    console.log("Update: [Crop] virus outbreak confirmed nearby. Collaborate with local farmers to implement containment measures.\n");
    console.log("Critical: Unusual symptoms observed in crops. Seek advice from agricultural experts to identify and address the issue.\n");
    console.log("Emergency: Flash flood warning in effect. Evacuate low-lying areas and safeguard livestock.\n");
}

const alertFunctions = [alert1, alert2, alert3, alert4, alert5, alert6, alert7, alert8, alert9, alert10];
const randomAlert = alertFunctions[Math.floor(Math.random() * alertFunctions.length)];
randomAlert();
