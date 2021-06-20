// method 1
function convert_1(minutes) {
    return minutes * 60;
}

// method 2
const convert_2 = (minutes) => minutes * 60

// method 3
const convert_3 = minutes => minutes * 60;

console.log(convert_1(2)); // 120
console.log(convert_2(2)); // 120
console.log(convert_3(2)); // 120