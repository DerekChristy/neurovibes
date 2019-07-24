var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'neurowaves.feedback@gmail.com',
    pass: 'radhika123'
  }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Positive Waves' });
});

/** GET About page */
router.get('/about', (req, res) => {
  res.render('pages/about', {title: 'about'})
})

/** GET Reviews page */
router.get('/reviews', (req, res) => {
  res.render('pages/reviews', {title: 'reviews'})
})

router.get('/faqs', (req, res) => {
  res.render('pages/faqs', {title: 'faqs'})
})

router.get('/contact', (req, res) => {
  res.render('pages/contact', {title: 'contact'})
})

router.get('/services', (req, res) => {
  res.render('pages/services', {title: 'service'})
})

router.post('/feedback', (req, res) => {
  console.log(req.body)
  var mailOptions = {
    from: 'neurowaves.feedback@gmail.com',
    to: 'kered.christy@gmail.com',
    subject: 'Sending Email using Node.js',
    text: req.body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })

  res.redirect('/');
})

module.exports = router;
