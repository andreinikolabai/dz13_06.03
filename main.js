let i = 10;
let arr = [];
while (i <= 20) {
    arr.push(i);
    i++
};
console.log(`1. Вивести на сторінку в один рядок через кому числа від 10 до 20 = [${arr.join(', ')}]`);

let i1 = 10;
let arr1 = [];
while (i1 <= 20) {
    arr1.push(i1*i1);
    i1++
};
console.log(`2. Вивести квадрати чисел від 10 до 20 = [${arr1.join(', ')}]`);

let i2 = 1;
while (i2 <= 10) {
    console.log(`${i2} * ${7} = ${i2*7}`);
    i2++
};
console.log(`3. Вивести таблицю множення на 7`);

let sum = 0;
let i3 = 1;
while (i3 <= 15) {
   sum += i3;
    i3++
};
console.log(`4. Знайти суму всіх цілих чисел від 1 до 15 = ${sum}`);

let prod = 1;
let i4 = 15;
while (i3 <= 35) {
    prod *= i4;
    i3++
};
console.log(`5. Знайти добуток усіх цілих чисел від 15 до 35 = ${prod}`);

let sum1 = 0;
for (let i5 = 1; i5 <= 500; i5++){
sum1 += i5 / 500;
};
console.log(`6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500 = ${sum1}`);

let sum2 = 0;
for (let i6 = 30; i6 <= 80; i6++){
    if (i6 % 2 === 0) {
        sum2 += i6;
    }
};
console.log(`7. Вивести суму лише парних чисел в діапазоні від 30 до 80 = ${sum2}`);

let arr2 = [];
for (let i7 = 100; i7 <= 200; i7++){
    if (i7 % 3 === 0) {
        arr2.push(i7);
    }
};
console.log(`8. Вивести всі числа в діапазоні від 100 до 200 кратні 3 = [${arr2.join(', ')}]`);

let n = 26;
let arr3 = [];
for (let i8 = 1; i8 <= n; i8++) {
    if (n % i8 == 0) {
        arr3.push(i8);
    }
}
console.log(`9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники = [${arr3.join(', ')}]`);

let cont = 0;
for (let i8 = 1; i8 <= n; i8++) {
    if ((n % i8 == 0) && (i8 % 2 == 0)) {
        cont++;
    }
}
console.log(`10. Визначити кількість його парних дільників = ${cont}`)

let sum3 = 0;
for (let i8 = 1; i8 <= n; i8++) {
    if ((n % i8 == 0) && (i8 % 2 == 0)) {
        sum3 += i8;
    }
}
console.log(`11. Знайти суму його парних дільників = ${sum3}`)

console.log(`12. Надрукувати повну таблицю множення від 1 до 10`);
for (let j = 1; j <= 10; j++){
    for (let i = 1; i <=9; i++)
    {
        console.log(j + "*" + i + "=" +(j*i));
    }
}
