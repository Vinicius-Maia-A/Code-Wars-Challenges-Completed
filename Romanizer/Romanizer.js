/*
    Implement a function that receiver a number and returns the same number with roman value
*/

function romanizer(num){

    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let resArray = [];

    for(let element in num)
    {
        console.log(`element: ${num[element]}`)
        let roman = '';
        for (let key in romanValues) {
            while (num[element] >= romanValues[key]) {
                roman += key;
                num[element] -= romanValues[key];
            }
        }
        resArray.push(roman);
    }

    return resArray;
}