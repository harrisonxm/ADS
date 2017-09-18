function intToString(int){
  let i = [];
  while(true){
      i.push(String.fromCharCode('0'.charCodeAt(0) + int % 10));
      int = Math.floor(int/10);
      if(int < 1){
        break;
      }
  }
  return i.reverse().join('')
}


function stringToInt(str){
  let negative = str[0] === '-' ?  true : false;
  str = negative ? str.slice(1) : str

  let int = [];
  let exp = str.length-1

  for(var i = 0; i < str.length; i++){
    int.push((str[i].charCodeAt(0) - 48) * Math.pow(10, exp))
    exp--
  }
  let num = int.reduce((sum, i) => {
    return sum + i;
  }, 0)
  if(negative === true){
    return -num;
  }
  return num;
}


let string = '-12345'
console.log(stringToInt(string))
