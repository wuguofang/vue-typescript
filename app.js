const KYProxy = require('./lib/kyproxy');
const config = require('./server/config/addon');

var KY = new KYProxy();

global.KY = KY;
KY.init({
  appDir: __dirname
}).addon(config);

KY.serverStart();