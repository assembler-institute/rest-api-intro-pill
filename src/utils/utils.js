function generateUrl(req) {
  const originalUrl = req.originalUrl.includes("?")
    ? req.originalUrl.split("?")[0]
    : req.originalUrl;
  return req.protocol + "://" + req.get("host") + originalUrl;
}

module.exports = {
  generateUrl,
};
