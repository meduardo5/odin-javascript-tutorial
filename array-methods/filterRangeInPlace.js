let arr = [5, 3, 8,  1, 3, 9, 2];

function filterRangeInPlace(arr, num1, num2){

    for(i = 0; i < arr.length; i++){
        
        if(arr[i] < num1 || arr[i] > num2){
            arr.splice(i, 1);
            //i--;
            console.log(i);
        }
    }
}

filterRangeInPlace(arr, 1, 4)
console.log(arr);