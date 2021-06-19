// method 1
function addition_1(a, b) {
    return a + b;
}

// method 2
const addition_2 = (a, b) => a + b;

// method 3
function addition_3(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}

// method 4
function addition_4(a, b) {
    return Math.log10(Math.trunc(Math.sqrt(Math.abs(parseInt("-100")))) ** a * Math.cbrt(Math.floor(Math.atan(Math.sin(parseFloat("1")) / Math.cos(Math.random() ** 0)) * Math.min(Math.E, Math.sign(-(10 * 10 ** 0)) * -2) ** Math.min(Math.PI, 3) * Math.hypot(3, 4) ** Math.round(10 / 3))) ** b);
}

console.log(addition_1(10, 10)); // 20
console.log(addition_2(10, 10)); // 20
console.log(addition_3(10, 10)); // 20
console.log(addition_4(10, 10)); // 20