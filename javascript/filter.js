function filtraPares(arr) {
    return arr.filter(callback);
}

function filtraImpares(arr) {
    return arr.filter(callback2);
}
function callback(item) {
    return item % 2 === 0;
}
function callback2(item) {
    return item % 2 !== 0;
}

const meuArray = [3,4,8,9,7,5,6,,2,12,24,54,57,56,23,27,29,22];

console.log(filtraPares(meuArray));

console.log(filtraImpares(meuArray));

