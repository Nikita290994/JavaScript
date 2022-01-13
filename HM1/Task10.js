var arr = [6,5,4,3,2,1];
for (var i = arr.length-1; i >= 0; i--) {
    for (var j = i; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
}
console.log(arr);