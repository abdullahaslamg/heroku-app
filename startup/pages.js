module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('login');
  });

  app.get('/register', (req, res) => {
    res.render('register');
  });

  app.get('/successRegister', (req, res) => {
    res.render('successRegister');
  });
  app.get('/loginvalue', (req, res) => {
    res.render('loginvalue');
  })
};
