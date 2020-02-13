# 本站部署

本站采用Gitbook编写，部署于GitHub Pages

部署过程参考[Publishing GitBook to Github Pages](https://galdin.dev/blog/publishing-gitbook-to-github-pages/)

## 部署问题解决办法

**执行deploy出现：TypeError: Cannot read property '0' of null**
```
cd node_modules/gulp-gh-pages/
npm install --save gift@0.10.2
cd ../../
gulp deploy
```