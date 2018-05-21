const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
// var passport = require('passport');
const facebookStrategy = require('../strategies/facebook.strategy');

router.use( facebookStrategy.initialize());
router.use( facebookStrategy.session());

let successUrl;
if(process.env.DEV == 'true'){
  successUrl = process.env.LOCALHOST_SUCCESS_URL
  console.log(successUrl);
} else {
  // cbUrl = process.env.DEPLOY_REDIRECT_URL
  // console.log(cbUrl);
}




// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
});

//TO-DO failureRedirect
router.get('/callback',
facebookStrategy.authenticate('facebook', { successRedirect: successUrl,
                                      failureRedirect: '/' }));

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful

router.get('/send',
facebookStrategy.authenticate('facebook', { scope: ['public_profile', 'email'] } )
);

// { scope: 'public_profile' }

// router.get('/send', (req, res) => {
//   console.log('made it to fb router');
//   res.send('taco');
//     });

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;