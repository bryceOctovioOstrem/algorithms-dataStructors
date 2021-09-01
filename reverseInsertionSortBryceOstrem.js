function insertionSort(arr) { 
for(var i = 1; i < arr.length; i++) {
var val = arr[i];
var j;
for(j = i; j > 0 && arr[j-1] > val; j--) {  
arr[j] = arr[j-1];
}
arr[j] = val;
}
checkSort (arr);
return arr; // O(n*(n/2)) assuming on average half of the variables will be incorrectly placed the equation will  the time to run though plus time to correct errors. simplified O(n^2))
}

function checkSort (arr) { // this function checks to see if arr is properly sorted
for(var i = 1; i < arr.length; i++) { // cycles through arr array
	if (varr[i-1] > varr[i]){ // checks to see if array position arr[i-1] is greater than arr[i] 
	return(false)
}
}
return (true)
}

function insertionSortReverse(arrr) { // changed the name of the array to avoid conflict
for(var i = arrr.length; i > 0; i--) { // reversed this functions direction
var val = arrr[i];
var j;
for(j = i; j > 0 && arrr[j-1] > val; j--) {
arrr[j] = arrr[j-1];
}
arrr[j] = val;
}
return arrr;
}