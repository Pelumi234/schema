/* GET post page. */
exports.post_get = [
  function(req, res, next) {
  res.render('Post', { title: 'Posts page' });
  }
];