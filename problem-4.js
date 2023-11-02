const address ={   street:10,
    house:'15A',
    society:'EarthPerfect'
}

function findAddress(obj) {

    if( typeof obj !=="object"){
        return "Please input a object"
    }

    const streetNo = obj.street || "__";
    const houseNo = obj.house || "__";
    const societyNo = obj.society || "__";
    const myAddress = streetNo+","+houseNo+","+societyNo;
    return myAddress;
}


console.log(findAddress(address));

