function proverkaVozrasta(age) {
    if (age >= 18) {
        alert("Впускаем")
    } else if (age > 0) {
        alert("Выгоняем")
    } else {
        alert("Дебил")
    }
}

let age = +prompt("Введите возраст:")
proverkaVozrasta(age)

function calculator(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 % num2)
}

let num1 = +prompt("Введите первое число:")
let num2 = +prompt("Введите второе число:")
calculator(num1, num2)

function DlinoeName(name1, name2, name3) {
    if (name1.length > name2.length && name1.length > name3.length) {
        return name1
    } else if (name2.length > name3.length) {
        return name2
    } else {
        return name3
    }
}

console.log(DlinoeName("Alex", "George", "Michael"))

function minimum(...nums) {
    return Math.min(...nums)
}

console.log(minimum(1, 2)) 
console.log(minimum(3, 2, 10)) 
console.log(minimum(1, 2, 3, 1, 8, 12)) 

function proporcii(num1, num2) {
    return num1 / num2
}

console.log(proporcii(10, 2)) 
console.log(proporcii(20, 4)) 
