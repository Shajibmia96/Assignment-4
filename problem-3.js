function sortMaker(arr) {
  for( let i = 0; i<arr.length; i++){

     if(arr[i] < 0 || arr[i+1]<0){
       return "Invalid Input"
     }

     else if(arr[i] <arr[i+1]){
         return [ arr[i+1], arr[i]];
      }

     else if(arr[i] >arr[i+1]){
         return [ arr[i], arr[i+1]];
      }

      else if (arr[i]==arr[i+1]){
          return 'equal'
      } 
   }
}  
 




const numbers = [1,2,]
console.log(sortMaker(numbers))