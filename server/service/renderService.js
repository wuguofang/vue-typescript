"use strict";

// 资源表
const resourceMap = require("../../dist/.ua-resource.map/resource.map.json");

console.log(resourceMap)

module.exports = function (pageName, data) {
  var linkList = ``;
  var scriptList = ``;

  resourceMap[pageName].js.forEach(function (item) {
    var script = `<script src="${item}"></script>`;
    scriptList = scriptList + script;
  });

  resourceMap[pageName].css.forEach(function (item) {
    var link = `<link rel="stylesheet" href="${item}">`;
    linkList = linkList + link;
  });

  return `
    <!DOCTYPE html>
    <html data-dpr="1">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>
    <meta http-equiv="Cache-Control" content="no-transform "/>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>demo</title>
    <meta name='keywords' content=''/>
    <meta name='description' content=''/>
    ${linkList}
    </head>
    <body class="">
    <div id="app"></div>
    ${scriptList}
    </body>
    </html>`;
};
