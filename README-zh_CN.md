# railFenceCipher
篱笆密码法: 编码／解码

![English README](README.md)


 [![node](https://img.shields.io/badge/npm-5.3.0-blue.svg)]()
 [![nodejs](https://img.shields.io/badge/nodejs-v6.9.1-orange.svg)]()
 [![build](https://travis-ci.org/rjdangcc/railFenceCipher.svg?branch=1.1.5)]()
 [![Coverage Status](https://coveralls.io/repos/github/rjdangcc/railFenceCipher/badge.svg?branch=master)](https://coveralls.io/github/rjdangcc/railFenceCipher?branch=master)
 [![ISC](https://img.shields.io/badge/license-ISC-brightgreen.svg)]()


## 篱笆密码法

于篱笆密码法中，明文由上至下顺序写上，当到达最低部时，再回头向上，一直重复直至整篇明文写完为止。然后，再往右顺序抄写一次。
此例子中，其包含了三条篱笆及一段明文：'WEAREDISCOVEREDFLEEATONCE'。然后再按法抄下：

    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .

按行读取后：

    WECRLTEERDSOEEFEAOCAIVDEN


## 安装

通过npm安装

    npm install railFenceCipher
    
    var railfencecipher = require("railfencecipher")

在浏览器中使用

    <script src="railFenceCipher.min.js"></script>

## 方法

### 编码
```javascript
railfencecipher.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE',3)
//WECRLTEERDSOEEFEAOCAIVDEN
```
### 解码
```javascript
railfencecipher.decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN',3)
//WEAREDISCOVEREDFLEEATONCE
```
