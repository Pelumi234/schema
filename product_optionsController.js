/* GET user page. */
exports.product_options_get = [
  function(req, res, next) {
  res.render('product_options', { title: 'product_options page' });
}
];
