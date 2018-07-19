# {{projectName}}

{{projectDescription}}

# 目录结构

```
workspace
    ├── build
    ├── config
    ├── lib
    ├── config   
    ├── node_modules
    ├── server
    ├── src
    ├── static
    ├── package.json
    ├── ua.json
    ├── www
    ├── template.html
    ├── tsconfig.json
    ├── tslint.json
```

package.json中只需要安装2个依赖

```
"dependencies": {
    "koa": "^2.5.2",
	"koa-bodyparser": "^4.2.1",
	"koa-logger": "^3.2.0",
	"koa-router": "^7.4.0",
	"koa-static": "^5.0.0",
	"lodash": "^4.17.10",
	"nunjucks": "^3.1.3",
	"vue": "^2.5.2",
	"vue-class-component": "^6.2.0",
	"vue-property-decorator": "^7.0.0",
	"vue-router": "^3.0.1",
	"web-webpack-plugin": "^1.10.0"
}
"devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "ts-loader": "^3.2.0",
    "tslint": "^5.11.0",
    "tslint-config-standard": "^7.1.0",
    "tslint-loader": "^3.6.0",
    "typescript": "^2.9.2",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
}
```

# 依赖安装及启动

```
npm install // 依赖安装

npm run dev // 静态资源编译

npm run start // 启动服务

npm run boot // 如果安装了supervisor可以用这条命令启动服务

pm2 start ua.json // 线上使用pm2进行管理，启动服务

```