
window.request = {
  getSync(url) {
    console.log("getSync", url)
    var request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    try {
      request.data = JSON.parse(request.responseText)
    } catch {}
    return request
  },
  get(url, cb) {
    axios.get(url)
    .then(result => cb(null, result))
    .catch(error => cb(error))
  }
}
