window.onload = function () {
    console.log(window.location.hash)
    var urlHash = window.location.hash
    $('a[href=' + urlHash + ' ]').tab('show')
}