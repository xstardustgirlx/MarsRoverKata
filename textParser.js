function textParser(inputString) {
    if (inputString.indexOf(' ') != -1){
        const splitIndex = inputString.indexOf(' ');
        const firstPart = inputString.substring(0,splitIndex);
        return [Number(firstPart)];
    }
        
    return [Number(inputString)];
}

module.exports = textParser;