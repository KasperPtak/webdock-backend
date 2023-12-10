// service: 'gmail',

// service: 'your-smtp-service',
// host: 'your-smtp-server.com',
// port: 587,
// secure: false, // Set to true if using SSL/TLS



const nodemailer = require('nodemailer');

function sendEmailToAdmin(newPosts) {
    const transporter = nodemailer.createTransport({
        // Use configuration from environment variables or another source
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'Changes in the Database',
        text: `New Posts: ${newPosts.length}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { sendEmailToAdmin };

// TEMP STUFF RN

// // DUMMY EMAILS FOR TESTING PURPOSES
// const DUMMY_EMAIL_SERVICE = 'dummy_email_service';
// const DUMMY_EMAIL_USER = 'dummy_email@example.com';
// const DUMMY_EMAIL_PASSWORD = 'dummy_password';
// const DUMMY_ADMIN_EMAIL = 'admin@example.com';

// const nodemailer = require('nodemailer');

// function sendEmailToAdmin(newPosts) {
//     const transporter = nodemailer.createTransport({
//         // Use configuration from environment variables or another source
//         service: DUMMY_EMAIL_SERVICE,  // Use dummy email service
//         auth: {
//             user: DUMMY_EMAIL_USER,  // Use dummy email user
//             pass: DUMMY_EMAIL_PASSWORD,  // Use dummy email password
//         },
//     });

//     const mailOptions = {
//         from: DUMMY_EMAIL_USER,  // Use dummy email user as sender
//         to: DUMMY_ADMIN_EMAIL,  // Send to dummy admin email
//         subject: 'Changes in the Database',
//         text: `New Posts: ${newPosts.length}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// }

// module.exports = { sendEmailToAdmin };

