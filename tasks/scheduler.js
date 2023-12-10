// const cron = require('node-cron');
// const { checkAndSendChanges } = require('./tasks');

// // In this case, '0 0 */1 * *' means the job will run at midnight every day
// cron.schedule('0 0 */1 * *', async () => {
//     await checkAndSendChanges();
// });

const cron = require("node-cron");
// const { checkAndSendChanges } = require('./tasks');
function cronSchedueler() {
	cron.schedule("*/1 * * * *", async () => {
		console.log("cron funtion run");
		// await checkAndSendChanges();
	});
}

module.exports = { cronSchedueler };