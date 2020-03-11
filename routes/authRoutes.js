const passport = require('passport');
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/surveys',
      failureRedirect: '/'
    })
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    // res.send(`<h1>logged out</h1><p>${req.user}</p>`);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
