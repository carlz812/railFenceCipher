# railFenceCipher
篱笆密码法: 编码／解码

![English README](README.md)

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

`var base64js = require('base64-js')`

在浏览器中使用

<script src="railFenceCipher.min.js"></script>

## 方法

### 编码
```javascript
encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE',3)
//WECRLTEERDSOEEFEAOCAIVDEN
```
### 解码
```javascript
decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN',3)
//WEAREDISCOVEREDFLEEATONCE
```
