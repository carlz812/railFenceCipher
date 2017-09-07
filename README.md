# railFenceCipher
Rail Fence Cipher: Encoding and Decoding

 ![中文 README](README-zh_CN.md)

 [![build](https://travis-ci.org/rjdangcc/railFenceCipher.svg?branch=1.1.5)]()
 [![Coverage Status](https://coveralls.io/repos/github/rjdangcc/railFenceCipher/badge.svg?branch=master)](https://coveralls.io/github/rjdangcc/railFenceCipher?branch=master)

## Rail fence cipher

In the rail fence cipher, the plain text is written downwards and diagonally on successive "rails" of an imaginary fence, then moving up when we reach the bottom rail. When we reach the top rail, the message is written downwards again until the whole plaintext is written out. The message is then read off in rows. For example, if we have 3 "rails" and a message of 'WE ARE DISCOVERED. FLEE AT ONCE', the cipherer writes out:

    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .
    
Then reads off to get the ciphertext:

    WECRLTEERDSOEEFEAOCAIVDEN

Note that this particular example does NOT use spaces separating the words. The decipherer will need to add them based on context. If spaces are shown in the ciphertext, then they must be included in the count of letters to determine the width of the solution grid.

## install

With npm do:

    npm install railFenceCipher

    var railfencecipher = require("railfencecipher")

For use in web browsers do:

    <script src="railFenceCipher.min.js"></script>

## methods

### Encoding
```javascript
railfencecipher.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE',3)
//WECRLTEERDSOEEFEAOCAIVDEN
```
### Encoding
```javascript
railfencecipher.decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN',3)
//WEAREDISCOVEREDFLEEATONCE
```
