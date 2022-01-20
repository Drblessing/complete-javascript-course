'use strict';

let f = () => {
    console.log(this)
}
f(2,3,34)

let fa = function () {
    console.log(this)
}

fa()
