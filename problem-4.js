const address ={   street:10,
    house:'15A',
    society:'EartPerfect'
}

function findAddress(obj) {

if(obj.house !== '15A' && obj.society !=='EartPerfect'){
return obj.street +','+'__'+','+'__';

}
else if(obj.house !== '15A'){
return obj.street +','+'__'+','+obj.society;
}
else{
find = obj.street +','+obj.house+','+obj.society;

return find;
}  
}


console.log(findAddress(address));

