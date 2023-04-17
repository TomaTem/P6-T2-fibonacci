// Итерационный подсчет n-го числа Фибоначчи
function calcFibonacciNumIter(n) {
    let a = 0;
    let b = 1;
    if (n <= 1) {
        return 0;
    } else {
        while (n !== 2) {
            [a, b] = [b, a + b];
            n -= 1;
        }
        return b;
    }
}

console.log(calcFibonacciNumIter(8));

// Рекурсивное вычисление n-го числа Фибоначчи
function calcFibonacciNumRec(n) {
    if (n <= 1) {
        return 0;
    } else if (n <= 3) {
        return 1;
    } else {
        return calcFibonacciNumRec(n - 1) + calcFibonacciNumRec(n - 2);
    }
}

console.log(calcFibonacciNumRec(8));