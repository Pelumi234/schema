/* GET user page. */
exports.orders_get = [
  function(req, res, next) {
  res.render('orders', { title: 'orders page' });
}
];
