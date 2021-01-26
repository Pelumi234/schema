/* GET user page. */
exports.products_get = [
  function(req, res, next) {
  res.render('products', { title: 'products page' });
}
];
