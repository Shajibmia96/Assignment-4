function cubeNumber(number){
    if(typeof number !== 'number'){
        return "Please input a valid number"
    }else{
   const cube = number*number*number;
   return cube;
              }
}
console.log(cubeNumber(3))