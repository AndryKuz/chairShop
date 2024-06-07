type answer1 = 64 extends number ? true : false;
// справа от extends идет допустимый тип значений, а слева значение которое проверяем
// то есть грубо говоря справа это массив значений, а слева include в этом массиве

type answer2 = number extends 64 ? true : false;

type answer3 = string[] extends any ? true : false;
type answer4 = never extends any ? true : false;


type ans = Date extends { new(...args: any[]): any} ? true : false;

type ans1 = typeof Date extends { new(...args: any[]): any} ? true : false;