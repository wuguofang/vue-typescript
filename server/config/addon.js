/**
 * 项目 配置项 初始化
 * @return function
 */
const path = require('path');
const http = require('http');
const https = require('https');
const querystring = require('querystring');

const envMap = {
  'product': true,
  'testing': true,
  'test': true,
  'local': false
}

const isLocal = !envMap[process.env.NODE_ENV];

async function config() {
  if(isLocal) {
    var localConfig = require(path.join(KY.appDir, '/server/config/config.json'));
    return new Promise((resolve, reject) => {
      KY.config = localConfig;
      KY.logger(KY.config, 'config');
      resolve({ success: true });
    });
  }

  var options = {
    hostname: 'www.easy-mock.com', 
    port: 443,
    path: '/mock/5ad07a89909da41e79f4a8a3/example/config',
    method: 'get'
  }

  var protocol = options.port === 443 ? https : http;

  return new Promise((resolve, reject) => {
    var paramStr = querystring.stringify({});
    var req = protocol.request(options, function(res) {
      var json = '';
      res.on('data', function(chunk) {
        json += chunk;
      });
      res.on('end', function() {
        json = JSON.parse(json);
        KY.config = json.data;
        KY.logger(KY.config, 'config');
        resolve({ success: true });
      });
      res.on('error', function(err) {
        reject(err);
      });
    });
    req.write(paramStr);
    req.end();
  });
}

module.exports = config;
