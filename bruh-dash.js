var global = window || GLOBAL;

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {

      return array[0]
  },

  // returns the last element of an array
  last: function (array) {


   return  array.pop();

  
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, value) {

    return array.indexOf(value)
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (array, value) {

    return array.lastIndexOf(value)

  },

  // returns an array with all elements except for the last element
  initial: function (array) {

    array.pop();

    return array
  },
  
  // returns an array with all falsey values removed
  compact: function(array){ 

    return array.filter(Number)

   },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array,start,end) {

    return array.slice(start,end)

     
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, number){

    if(number === 0){
      return array
    }
    else if(number === undefined){

        return array.slice(1)
    }
    else{

      return array.slice(number)
    }

  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, number) {

   if(number === 0){
      return array
    }
    else if(number === undefined){

        return array.slice(0, -1)
    }
    else{

      var num = array.reverse().slice(number);

      return num.reverse()
    }




  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, number) {
     var emptyArray = [];

     

     if(number === 0){

      return emptyArray
    }
    else if(number === undefined){

        var newArray = [];

        newArray.push(array[0]);

         return newArray
        }
    else if(number > array.length){

      return array
    }
    
    else{
      return array.slice(0,number)

       
    }

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, number) {
        var emptyArray = [];

     

     if(number === 0){

      return emptyArray
    }
    else if(number === undefined){

       return array.slice(-1)

        }
    else if(number > array.length){

      return array
    }
    
    else{

      return array.slice(--number,array.length)

       
    }





  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, value, start, end) {

    if(start === undefined && end === undefined){

          return array.fill(value)

    }
    else{
      return array.fill(value, start,end)
    }
  },

  // removes all given values from an array
  pull: function (array,values){
      
    var newArray = [];

for(var i = 0; i < array.length; i++){

   if(array[i] != values[i]){

    newArray.push(array[i]);

   }


}


return newArray

      


  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

    

  

  },

  // creates an array excluding all the specified values
  without: function(array,numbers) {

   var oneArray = [];

for(var i = 0; i < array.length; i++){

   if(array[i] != numbers[0] && array[i] != numbers[1]){

    oneArray.push(array[i]);

    
  }

}

return oneArray

  },

  // returns an array with specified values excluded
  difference: function(array, values) {
      var newArray = [];

for(var i = 0; i < array.length; i++){

   if(array[i] != values[i]){

    newArray.push(array[i]);

   }


}


return newArray
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};