// Array<string>   запись дженерика
// string[]

type TypeFactory<T> = T     // принято назначать использование єто Т , так как назван был параметр <T>
//Так же параметров может быть несколько. этот параметр являеться динамической частью
//То есть по сути type TypeFactory<T> это функция, которая возвращает нам = T
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>


function toArray<T>(...arg: T[]): T[] { // после скобок T[] явно указывает, что функция toArray должна вернуть массив элементов типа T. 
    //Таким образом, возвращаемое значение функции toArray должно быть массивом элементов того же типа, что и аргументы функции.
    //по сути TS сам должен вернуть правильный тип исходя из того какой аргумент  будет получен, но во избежание 100% уверенности можно указать явное
    return arg;
}

toArray(1,2,3);
toArray(true, false, true)
toArray('st')


function hea(value: string): string;
function hea(value: readonly[]): undefined; // перегрузка на то что если пустой массив то делаем ему undefind, а readonly - что бы мы не мутировали массив
function hea<T>(value: readonly T[]): T[];
function hea(value: any): any {
    return value[0];
}

hea([1,2])

const head1 = <T>(value: T[]): T => value[0];       // запись стрелочной функции для дженериков

interface ModelData<T> {
    title: string,
    value: T, // number [] boolean
}

const obj1: ModelData<number> = {
    title: 'fsfs',
    value: 22       // так как я указал ModelData<number>, то ключ value принимать будет только Number
}
const obj2: ModelData<Array<number>> = {
    title: 'fsfs',
    value: [45]       // так как я указал ModelData<number>, то ключ value принимать будет только Number
}


// pract 
function append<T>(el: T, list: T[]): T[] {
    return list.concat(el)
  }

  append(1, [2,2])
//   append('dsds', [2,2])      будет ошибка так как будет несоответсвие типов, el -это будет string, а list - масив number

// Требование к дженерику

function lele<T extends {length: number}> (arg: T): number {
    return arg.length;
}

const obj333 = {a:'dss', length:5}

type WindowProp = keyof Window;
const myValue: WindowProp = "alert";

interface PC {
    brand: string,
    year: string,
}
type Typ1 = keyof PC;  // brand | year

const val: Typ1 = 'brand'; // в подсказках только будет два значение исходя из интерфейса PC. И невозможно написать что то другое

type Tuple = keyof[string, number];
const val332: Tuple = "0";

// сужение допустимых типов
function prop<T, U extends keyof T>(key: U, obj: T): T[U] {       // предположение того что обьект будет динамической структуры, как в нем может быть что угодно
    // U extends keyof T - создаем динамический юнион(keyof T) и сохраняем его в U
    return obj[key]
}

const obj323 = {a:1, b:2, c:3}

prop('a', obj323)
// prop('d', obj323)  будет ошибка, так как в обьект не будет ключа - d


// pract generic

// export function keys<O extends object>(obj: O): Array<keyof O> {
//     const currentKeys = [];
   
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) currentKeys.push(key);
//     }
    
//     return currentKeys;
//   }

   
//   export function values<O extends object>(obj: O): Array <O[keyof O]> {
//     const currentValues = [];
   
//     for (let key in obj) {
//       currentValues.push(obj[key]);
//     }
   
//     return currentValues;
//   }


  // Значение по умолчанию

  interface AnyObj {
    [key: string]: unknown,
  }

  export async function request<T = AnyObj>(url: string): Promise<T> {
    const response = await fetch(url);

    return response.json();
  }
interface Todo {
  id: string,
  compleated: boolean,
  title: string,
}
  const data = request<Todo[]>('')

  // область видимости дженериков

  function tuplePairCreator<T>(first: T) {
    return function<U>(second: U): [T, U] {
      return [first, second]
    }
  }

  const toTupleWithOne = tuplePairCreator(1);
  const cal = toTupleWithOne(3);
  const cal4 = toTupleWithOne('ds');

  // pract
  // export function createMap<T>(list: T[]) {
  //   return function<U>(cb: (x: T) => U): U[] {
  //     const result = [];
   
  //     for (let el of list) {
  //       result.push(cb(el))
  //     }
   
  //     return result;
  //   }
  // }

  // const mapNum = createMap([1,2,3]);
  // const re = mapNum((x) => x + 2);