/* GET user page. */
exports.comment_get = [
  function(req, res, next) {
  res.render('comment', { title: 'comment page' });
}
];
