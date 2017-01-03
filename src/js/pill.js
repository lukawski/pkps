window.onload = function () {
  var urlHash = window.location.hash
  $('a[href=' + urlHash + ' ]').tab('show')
}
