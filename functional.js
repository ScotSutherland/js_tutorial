// Source array of strings.
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Convert strings to valid url syntax
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}

// Create valid Urls from a list of names
function imperativeUrls(elements) {

	// Url friendly collector array of strings.
	let urls = [];

// Convert source to lowercase
// Join with hyphens
// Store in collector array
	elements.forEach(element => {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

// Create valid Urls from a list of names
function functionalUrls(elements) {
	return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(functionalUrls(states));

// Collect single string elements of an array.
function imperativeSingles(elements) {
	// Storage container for single word strings.
	let singles = [];
	// Check if each item and store the single strings.
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element);
		}
	});
	return singles;
}
console.log(imperativeSingles(states));

function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states));

function includesDakotas(elements) {
	return elements.filter(element => element.includes("Dakota"));
}
console.log(includesDakotas(states));

function includesTwoWords(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(includesTwoWords(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
		total += n;
	});
	return total;
}
console.log(imperativeSum(numbers));

function functionalSum(elements) {
	return elements.reduce((total, n) => total += n);
}
console.log(functionalSum(numbers));

function functionalProduct(elements) {
	return elements.reduce((total, n) => total *= n);
}
console.log(functionalProduct(numbers));

// lengths: Imperative solution
function imperativeLenghts(elements) {
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}
console.log(imperativeLenghts(states));

function functionalLengths(elements) { 
	return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {}); 
}
console.log(functionalLengths(states));



