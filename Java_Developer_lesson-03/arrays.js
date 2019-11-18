'use strict'

// 0
function show(styles) {
	console.log(styles);
}

// 1
var products = [];
show(products.length);
show(products[products.length - 1]);
console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<');

// 2
var styles = [ 'Jazz', 'Blues' ];
styles.push('Rock-n-Roll');
show(styles);
styles.splice(-1, 0, 'Classic');
show(styles);
show(styles.shift());
show(styles);
styles.unshift('Rap', 'Reggie');
show(styles);
console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<');

// 3
function find(arr, value) {
	var count = -1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) {
			count = i;
		}
	}
	return count;
}

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(find(numbers, 4));
console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<');

//4 
function filterRange(array, a, b) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if ((array[i] >= a) && (array[i] <= b)) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(filterRange(numbers, 2, 5));
console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<');

//5
function camelize(str) {
	
	var words = str.split("-");	
	var result = "";
	result = words[0];
	  for (var i = 1 ; i < words.length ; i++) {
	    var word = words[i];
	    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
	    result += capitalizedWord;
	  }
	 
	  return result;
}

var string = "my-short-string.my-short-string.my-short-string";
console.log(camelize(string));