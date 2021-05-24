const getDashboardPage = (req, res) => {
  res.render('dashboard', { user: req.user.username });
};

module.exports = { getDashboardPage };
