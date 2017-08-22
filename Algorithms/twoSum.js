var twoSum = function(nums, target) {
    var hash = {};
    var array = [];
    for(var i=0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    for(var j=0; j < nums.length; j++){
        if(hash[target-nums[j]]){
            array.push(j);
            array.push(hash[target-nums[j]]);
            break;
        }
    }
    return array;
};
