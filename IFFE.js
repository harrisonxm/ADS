function helperFunction(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    }
  };
};

var counter = helperFunction();
counter.get(); // returns 0
counter.set( 3 );
console.log(counter.get()); // returns 3
console.log(counter.i); // returns undefined
