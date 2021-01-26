/* GET user page. */
exports.category_get = [
  function(req, res, next) {
  res.render('category', { title: 'category page' });
}
];
