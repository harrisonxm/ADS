var removeDuplicates = function(nums) {
    var single = {};
    var arr = [];
    for(var i=0; i < nums.length; i++){
        if(!single[nums[i]]){
            single[nums[i]] = nums[i];
        }
    }
    for(var key in single){
        arr.push(single[key])
    }
    return arr;
};


removeDuplicates([1,2,3,4,5,7,8,2,2,3,4,5])

console.log(removeDuplicates([0,0,1,2,3,4,5,7,8,2,2,3,4,5]))
