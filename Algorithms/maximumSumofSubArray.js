var maxSubArray = function(nums) {
    let currentmax = nums[0];
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        max += nums[i];
        if (max > currentmax) {
            currentmax = max;
        }
        if(max < 0){
            max = 0;
        }
    }
    return currentmax;

};

//returns largest sum of subarrays;
