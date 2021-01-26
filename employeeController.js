/* GET user page. */
exports.employee_get = [
  function(req, res, next) {
  res.render('employee', { title: 'employee page' });
}
];
