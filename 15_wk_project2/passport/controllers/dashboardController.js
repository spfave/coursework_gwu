const getDashboardPage = (req, res) => {
  res.render('dashboard', { user: req.user.name });
};

module.exports = { getDashboardPage };
