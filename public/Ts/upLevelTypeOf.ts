interface User {
    readonly email: string,// readonly - it means remember value only once and can't be overwritten
    readonly login: string,
    password: string,
}

// добаляем в User что то еще
interface User {
    isOnline: boolean
}

interface Window {
    isAuth?: boolean;
}

interface Person {
    firstName: string,
    lastName: string,
    phone?: string,
}

// Обьеденение разних интерфейсов + можно дописать что то новое
interface Employee extends User, Person {
    yearBirthday: number;
}

interface Developer extends Employee {
    skills: string[],
    level?: 'jun' | 'middle' | 'senjor',
    phone: string,// меняем ключ с опционального(который был в Person) на обязательный, 
    //НЕльзя поменять тип, только изначально который был задан то есть string
}


// Алиасы могут быть аналогами Interface
// отличие от interface что нельзя дублировать одни и теже имена( не могу еще раз написать Union1 по типу что то дополнить)
type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 't' | 'y' | 'u';
type Union3 = Union1 | Union2; // все значение union 1 and 2
type Union6 = Union1 & Union2; // тут будут храниться только те части Union которые равны друг другу, то есть 'a'

// но если это будет обьект то: будет склеивание всех ключей, а не как в Union6(хотя ожидалось что будет только a:string)
type Union5 = { a: string, b: string, c: number } & { a: string, t: null, h: boolean };

// обьедение Union , отличие от interface(где было extend)

interface Users {
    readonly email: string,
    readonly login: string,
    password: string,
}

type Persona = {
    firstName: string,
    lastName: string,
    phone?: string,
}
type Empo = {
    contr: Date,
} & Persona & Users
//  const user22: Empo = {

//  }

interface Product {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}
interface Venicle {
    wheals: number,
    year: number,
    brand: string
}
interface Car extends Product, Venicle {
    type: string,
    model: string
}
// const purchase: Car = {

// }
type Prod = {
    price: number,
    isNew: boolean,
}
type Veni = {
    wheals: number,
    year: number,
}
type Tracker = {
    count: number
} & Prod & Veni
// можно запись выше записать склеивание также сразу после обьявление нового type - type Tracker = & Prod & Veni {}
// const pur: Tracker = {

// }

// narrowing - сужение функции
function exem(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {      // или if(Array.isArray(strs)){strs.concat([])}
        strs.concat([])
    } else if (typeof strs === 'string') {
        strs.toLocaleLowerCase()
    }
}

// например z- может быть массиво чисел, а Date - это обьект и как определить что это Дата а не массив чисел
function exp3(z: number[] | Date) {
    if (z instanceof Date) {
        z.getHours();
    } else {
        z.concat([])
    }
}


type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}

function move(animal: Fish | Bird) {
    if ('swim' in animal) {          // проверяем есть ли в обьекте ключ(она же функция) swim если да, то делаемп return на вызов функции
        return animal.swim()
    }
    return animal.fly(); // если if не отработало, то остаеться вызвать функцию из Bird = fly: () => void
}

// защита функций  type-guards
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}


type Userok = {
    name: string,
    displayName: string | null,
}

function assertDisplayName(user: Userok): asserts user is Userok & { displayName: string } {
    if (!user.displayName) throw new Error('User error')
}

function logiUserByDisplayName(user: Userok) {
    assertDisplayName(user)
    console.log(user.displayName.toLocaleLowerCase());
};

// pract on Type Guard
interface Order {
    address: string;
}
interface TelephoneOrder extends Order {
    callerNumber: string;
}
interface InternetOrder extends Order {
    email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
    return !!order && 'email' in order;
    //1 доказуем про предекат это именно InternetOrder соответственно - order is InternetOrder. Эта функция возвращает булевое значение
    //2 так как undefined есть в  PossibleOrders потому сразу проверяем существует ли !!order
    // двойное отрицание нужно: если будет undefind то мы вернем false, а если не undefind то будет true и пойдем за &&
    // а затем проверка что ключ email существет - 'email' in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
    return !!order && 'callerNumber' in order;
}


function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    } else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}



//overload

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}
add(1, 3);
add('dsf', 'fs');


function head(value: string): string;
function head(value: number[]): number[];
function head(value: boolean[]): boolean[];
function head(value: any): any {
    return value[0];
}

head('ds')
head([1])
head([false])



//символ !

let word: string | null = null;
const num = 10;
if (num > 5) {
    word = 'bdg';
}
console.log(word!.toLocaleLowerCase()); // ! - после word позволяет сказать что теоретически если будет null or undefind не будет являться таковым
// то есть значение там точно есть и с ним можно работать 

function orinName(name?: string) {
    const fullName: string = name!; // опять таки указываем что name точно будет существовать 100% и  не будет null or undefind
}

interface Personages {
    name: string
    age: number
    sex: 'female' | 'male'
}
function orinName22(person?: Personages) {
    console.log(person!.name);

}

const people: Personages[] = [{
    name: 'Liza',
    age: 38,
    sex: 'female'
},
{
    name: 'Aut',
    age: 18,
    sex: 'male'
},
{
    name: 'Kjfs',
    age: 28,
    sex: 'female'
},
{
    name: 'Kuza',
    age: 34,
    sex: 'female'
},
{
    name: 'Onza',
    age: 52,
    sex: 'male'
}]

const femalePeople = people.find(person => person.sex === 'female')! // опять таки ставим ! что доказываем что person точно будет существовать
// а так как у нас массив данных статичный, и мы точно уверены что там будет поле sex, потому не нужно делать проверку на undefind 