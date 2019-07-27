var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Neuro Vibes' });
});

/** GET About page */
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'Neuro Vibes' })
})

/** GET feedback page */
router.get('/feedback', (req, res) => {
  res.render('pages/feedback', { title: 'Neuro Vibes'})
})

router.get('/faqs', (req, res) => {
  res.render('pages/faqs', { title: 'Neuro Vibes' })
})

router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Neuro Vibes' })
})

router.get('/services', (req, res) => {
  res.render('pages/services', { title: 'Neuro Vibes' })
})

router.post('/feedback', (req, res) => {
  console.log(req.body)
  async function sendEmail() {
    const nodemailer = require("nodemailer");
    const { google } = require("googleapis");
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      "618832920587-bgc7vv1staaknq4mfskoo933jp8lehq5.apps.googleusercontent.com", //client id
      "WQGUDWtgJC3sz4X4gGWZfwz0", // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
    );
    oauth2Client.setCredentials({
      refresh_token: "1/9y_3o_MD9jnb5s1vWfbvpUeAW7_xzBK7W63boRG6sZk"
    });
    // const tokens = await oauth2Client.refreshAccessToken() // depricated
    // const accessToken = tokens.credentials.access_token
    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        type: "OAuth2",
        user: "neurowaves.feedback@gmail.com",
        clientId: "618832920587-bgc7vv1staaknq4mfskoo933jp8lehq5.apps.googleusercontent.com",
        clientSecret: "WQGUDWtgJC3sz4X4gGWZfwz0",
        refreshToken: "1/9y_3o_MD9jnb5s1vWfbvpUeAW7_xzBK7W63boRG6sZk",
        accessToken: accessToken
      }
    });
    const mailOptions = {
      from: "neurowaves.feedback@gmail.com",
      to: "kered.christy@gmail.com,radhikakuddyady@gmail.com",
      subject: "Node.js Email with Secure OAuth from positive waves",
      generateTextFromHTML: true,
      html: "<b>testjkjhk</b>"
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      smtpTransport.close();
    });
  } // That last brace is to close off our async function
  sendEmail();
  res.redirect('/')
})

module.exports = router;
