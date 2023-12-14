const { checkAndSendChanges } = require("./tasks");

const cron = require("node-cron");

function cronSchedueler() {
  // cron.schedule("*/1 * * * *", async () => {
  cron.schedule("0 0 */1 * *", async () => {
    checkAndSendChanges();
    // console.log("cron run");
    // await checkAndSendChanges(); skal det være async?
  });
}

module.exports = { cronSchedueler };

// cron runs once every minute, use as dev/testing
// cron.schedule("*/1 * * * *", async () => {

// cron.schedule("0 0 */1 * *", async () => { // cron runs at midnight every day
