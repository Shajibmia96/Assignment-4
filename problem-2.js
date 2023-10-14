function matchFinder(string1, string2) {
    if( (typeof string1 !== 'string') || (typeof string2 !== 'string') ){
        return 'Your input is not valid'
    }
    // else if (typeof string2 !== 'string'){
    //     return 'Your input is not valid'
    // }
    
    else{
        const checkString = string1.includes(string2)
        return checkString;
    }

}

const name1 = 'Shajib sarkar';
const name2 = 'jib sar';
console.log(matchFinder(name1 ,name2));