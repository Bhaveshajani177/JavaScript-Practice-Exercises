// method 1
function minMax_1(arr) {
    var return_min_max = [];
    var min = arr[0];
    var max = arr[0];

    list = [28, 66, 3, 90, 12, 57, 34, 8, 17, 10];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return_min_max.push(min);
    return_min_max.push(max);

    return return_min_max;
}

// method 2
function minMax_2(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return [min, max];
}

// method 3
function minMax_3(arr) {
    arr.sort(function(a, b) { return a - b });
    return [arr[0], arr[arr.length - 1]];

}

// method 4
function minMax_4(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// method 5
function minMax_5(arr) {
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

// method 6
const minMax_6 = (arr) => [Math.min(...arr), Math.max(...arr)];


// method 7
minMax_7 = a => [Math.min(...a), Math.max(...a)];


list = [28, 66, 3, 90, 12, 57, 34, 8, 17, 10];

console.log(minMax_1(list)); // [3,90]
console.log(minMax_2(list)); // [3,90]
console.log(minMax_3(list)); // [3,90]
console.log(minMax_4(list)); // [3,90]
console.log(minMax_5(list)); // [3,90]
console.log(minMax_6(list)); // [3,90]
console.log(minMax_7(list)); // [3,90]