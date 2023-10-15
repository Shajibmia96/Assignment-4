const names = [23,5435,67,86,86,96,9,6,96,9,4,8,96,96,54,]
  for (name of names){
   console.log(name)
    
  }


  function compare(a, b) {

    if (a == b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
//    const result = compare(15, "15");
   
//    console.log(result);

   function compare(a, b) {

    if (a.toString() === b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result = compare(25, 25);
   
   console.log(result);