function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let n=a+b;
    return cb(n);
}


module.exports = RunCallback;
