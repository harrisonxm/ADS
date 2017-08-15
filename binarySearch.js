const binarySearch = function(array, target) {
	let min = 0;
	let max = array.length - 1;
    var guess;
    while(min <= max){
        guess = Math.floor((max + min)/2)
        if(array[guess] === target){
            return guess;
        }
        else if(array[guess] < target){
            min = guess + 1;
        }
        else{
            max = guess-1;
        }
    }

	return -1;
};

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let result = binarySearch(primes, 73)

console.log(result)
