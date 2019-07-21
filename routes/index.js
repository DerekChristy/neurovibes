var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
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

module.exports = router;
