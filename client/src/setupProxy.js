const proxy = require("http-proxy-middleware");

module.exports = function(app) {

    app.use(proxy("/api", { target: "https://oss-chatbot-app.ue.r.appspot.com" }));

};
// target: "http://localhost:5000/"