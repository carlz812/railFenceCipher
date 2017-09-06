function encodeRailFenceCipher(string, numberRails) {
    if ((!string) || !numberRails) {
        console.log('invalid input')
        return
    }
    let arr = string.split(""), result = []
    for (var i = 0; i < numberRails; i++) {
        result[i] = []
        for (var j = 0; j < arr.length; j++) {
            let k = j * 2 * (numberRails - 1 ) + i;
            k < arr.length ? result[i].push(k) : 1;
            if ((i !== 0) && (i !== numberRails)) {
                let k2 = j * 2 * ( numberRails - 1 ) - i;
                ((k2 < arr.length) && k2 > 0) ? result[i].push(k2) : 1;
            }
        }
    }
    function uniqueSort(arr) {
        arr = Array.from(new Set(arr));
        return arr.sort((a, b)=> {
            return a - b
        });
    }

    result = result
        .map(arr=>uniqueSort(arr))
        .reduce((a, b)=> {
            return a.concat(b);
        }).map(i=> {
            return arr[i];
        }).join("");
    return result;
}


function decodeRailFenceCipher(string, numberRails) {
    if ((!string) || !numberRails) {
        console.log('invalid input')
        return
    }
    let div = (2 * (numberRails - 2) + 2),
        stringArr = string.split(""),
        len = parseInt(stringArr.length / div),
        remainder = stringArr.length % div,
        splitArr = [],
        tempArr = [],
        result = [];
    for (let i = 0; i < numberRails; i++) {
        splitArr.push((i == 0 || i == numberRails - 1) ? len : 2 * len);
    }
    if (remainder > numberRails) {
        splitArr = splitArr.map(num=> {
            return num + 1;
        })
        remainder = remainder - numberRails
        for (let j = numberRails - 2; j >= numberRails - remainder - 1; j--) {
            splitArr[j]++
        }
    } else {
        for (let j = 0; j < remainder; j++) {
            splitArr[j]++
        }
    }

    tempArr = splitArr.map(len=> {
        let ans = stringArr.splice(0, len);
        return ans;
    })
    var float = 0, k = 0;

    function lineUp(isAdd) {
        if (k == string.length) {
            return;
        }
        result.push(tempArr[float].shift());
        k++
        isAdd ? float++ : float--
        if (float == numberRails) {
            float = float - 2
            isAdd = false
        }
        if (float == 0) {
            isAdd = true
        }
        lineUp(isAdd);
    }

    lineUp(true);
    return result.join("");
}
