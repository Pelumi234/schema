/* GET user page. */
exports.customers_get = [
  function(req, res, next) {
  res.render('customers', { title: 'customers page' });
}
];
