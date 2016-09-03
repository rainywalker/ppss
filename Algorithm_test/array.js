function arrayCopy() {
    function copy(arr1, arr2) {
        for (var i=0; i<arr1.length; i++) {
            arr2[i] = arr1[i];
        }
    }

    var nums = [];
    for (var i=0; i<100; ++i) {
        nums[i] = i+1;
    }

    var samenums = [];
    copy(nums,samenums);

    nums[0]= 400;
    console.log(nums);
    console.log(samenums[0]);
}

function compare(num1, num2) {
    return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare)
console.log(nums)
