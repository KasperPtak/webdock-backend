const { getNewPosts } = require('../models');
const { sendEmailToAdmin } = require('./email');

let lastCheckTime = new Date();

async function checkAndSendChanges() {
    const newPosts = await getNewPosts();

    sendEmailToAdmin(newPosts);

    lastCheckTime = new Date();
}

module.exports = { checkAndSendChanges };