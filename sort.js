var sortedBy = 0;
var isNumericSort = false;
var reverse = false;
var reversed = (reverse) ? -1 : 1;
var sortable = [];
var obj = {};//Object to sort
var newObject = {};

for (var key in obj) {
	if (obj.hasOwnProperty(key)) {
		sortable.push([key, obj[key]]);
	}
}
if (isNumericSort) {
	sortable.sort(function (a, b) {
		return reversed * (a[sortedBy] - b[sortedBy]);
	});
} else {
	sortable.sort(function (a, b) {
		var x = a[sortedBy],
			y = b[sortedBy];
		return x < y ? reversed * -1 : x > y ? reversed : 0;
	});
}

for (var i = 0; i < sortable.length; i++) {
	var key = sortable[i][0];
	var value = sortable[i][1];

	newObject[key] = value;
}

console.log(JSON.stringify(newObject));
