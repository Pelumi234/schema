/* GET user page. */
exports.product_categories_get = [
  function(req, res, next) {
  res.render('product_categories', { title: 'product_categories page' });
}
];
