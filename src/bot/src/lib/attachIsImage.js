function attachIsImage(msgAttach) {
  var url = msgAttach.url;
  if (url.indexOf("jpg", url.length - 3) !== -1) {
    return true;
  } else if (url.indexOf("png", url.length - 3) !== -1) {
    return true;
  } else {
    return false;
  }
}

module.exports = attachIsImage;
