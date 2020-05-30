function CheckString(inputString){
    var from = 0;
    var len = 0;
    for(var i = 0; i < inputString.length; i++){
        if(inputString[i] === '_'){
            from = i;
            break;
        }
    }

    len = inputString.length - from;
    return inputString.substr(from,len);
}

export default CheckString;