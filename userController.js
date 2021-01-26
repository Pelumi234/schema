/* GET user page. */
exports.user_get = [
  function(req, res, next) {
  res.render('user', { title: 'Users page' });
}
];
