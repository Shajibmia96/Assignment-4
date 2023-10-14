function canPay(changeArray, totalDue) {
    if(Array.isArray(changeArray)!== true){
       return "Please input an array"
    }else{
   let sum = 0;
    for(let i = 0; i<changeArray.length ; i++){
          const element = changeArray[i]
          sum = sum+element;
    }
    if( sum >= totalDue){
      return true;
    }else{
      return false;
    }
}
}




const myMoney = [1,4,4];
const chipPrice = 10;
console.log(canPay(myMoney , chipPrice));