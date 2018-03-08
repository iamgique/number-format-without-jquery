exports.numberFormat = function(pattern, param) {
    var input = param.replace(/[^\w\s]/gi, '');
    return result = patternFn(pattern, removeChar(input));
}

var removeChar = (input) => {
    var regex = /^[0-9]*$/;
    var newInput = '';
    for(var i = 0; i <= input.length - 1; i++){
        if(regex.test(input.charAt(i))){
            newInput = newInput + input.charAt(i);
        }
    }
    return newInput;
}

var patternFn = (pattern, input) => {
    var result = '';
    for(var i = 0, j = 0; i <= pattern.length; i++){
        if(pattern.charAt(i) == 0){
            result = result.concat(input.charAt(j));
            j++;
        } else if(input.length > j) {
            result = result.concat(pattern.charAt(i));
        }
    }
    return result;
}

// add comment
