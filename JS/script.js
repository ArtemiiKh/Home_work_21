// indexOf()
// const arr = ['a', 1, 'b', 2, 'a', 2, 'c', 3,  'a', 4, 'd'];

// function indexOf (item, from = 0) {
// 	if (from < 0) from = 0;

// 	if (from >= arr.length) {
// 		return - 1;
// 	} else {
// 		for (let i = from; i < arr.length; i++) {
// 			if (arr[i] === item) return [i];
// 		}
// 	}
// 	return -1;
// }

// console.log(indexOf(3));



// lastIndexOf()
// const arr = ['a', 1, 'b', 2, 'a', 2, 'c', 3,  'a', 4, 'd'];

// function lastIndexOf (item, from = 0) {
// 	if (from < 0) from = 0;

// 	for (let i = arr.length - 1; i > from; i--) {
// 		if (arr[i] === item) return [i];
// 	}
// 	return -1;
// }

// console.log(lastIndexOf('a'));



//find()
// const arr = [1, 2, -3, 4, 5, -6];

// function find (cb, array) {
// 	let value = undefined;

// 	for (let i = 0; i < array.length; i++) {
// 		if (cb(array[i], i, array)) {
// 			value = array[i];
// 			return value;
// 		}
// 	}
// }

// function cb (value, index, array) {
// 	return value < 0;
// }

// console.log(find(cb, arr));



// findIndex()
// const arr = [1, 2, 3, -4, 5, -6];

// function findIndex (cb, array) {
// 	let value = -1;

// 	for (let i = 0; i < array.length; i++) {
// 		if (cb(array[i], i, array)) {
// 			value = i;
// 			return value;
// 		}
// 	}
// }

// function cb (value, index, array) {
// 	return value < 0;
// }

// console.log(findIndex(cb, arr));


// includes()
// const arr = ['a', 1, 'b', 2, 'a', 2, 'c', 3,  'a', 4, 'd'];

// function includes (item, from = 0) {
// 	if (from >= 0) {
// 		for (let i = from; i < arr.length; i++) {
// 			if (arr[i] === item || Number.isNaN(arr[i])) return true;
// 		}
// 	} else if (from < 0) {
// 		for (let i = arr.length + from; i < arr.length; i++) {
// 		return arr[i] === item;
// 		}
// 	}
// 	return - 1
// }
// console.log(includes(4));



// every()
// const arr = [1, 2, 3, -4, 5];

// function every (cb, array) {
// 	let value = true;

// 	for (let i = 0; i < array.length; i++) {
// 		if (cb(array[i], i, array) === false) {
// 			value = false;
// 			return value;
// 		}
// 	}
// 	return value;
// }

// function cb (value, index, array) {
// 	return value < 0;
// }

// console.log(every(cb, arr));



//some()
// const arr = [1, 2, 3, 4, -5];

// function every (cb, array) {

// 	let value = false;
// 	for (let i = 0; i < array.length; i++) {
// 		if (cb(array[i], i, array)) {
// 			value = true;
// 			return value;
// 		}
// 	}
// 	return value;
// }

// function cb (value, index, array) {
// 	return value < 0;
// }

// console.log(every(cb, arr));