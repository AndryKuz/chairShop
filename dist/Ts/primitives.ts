import { current } from "@reduxjs/toolkit";

let str = 'hello';

let g = null;

let h = undefined;

//literal
const jj = 110;

function sumy(a: number, b: number, c?: number) {
    console.log('hello', a, b, c || 'unknow');
    
}

sumy(1, 2)


function average (...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0);

    return sum / nums.length;
}

function slice(str: string, start: number, end?: number) {
    let sliceNew = str.slice(start, end || str.length) 
    return sliceNew
   
  }

  interface Car {
    wheels: number;
    brand: string;
    isNew: boolean;
    type:'string';
    name?: string;

    [key: string]: unknown; // добавляем  безлимит строк с неизвестнім форматом
  }

  const car: Car = {
    wheels: 4,
    brand: 'sd',
    type:'string',
    isNew: false,
  }

  car.wheels = 5;
  car.newUnknow = true;

  function printPoint(point: {x: string, y: string}): void {
    console.log(`Coordinate of the place is x:${point.x} and y ${point.y}`);
    
  };
  const obj1 = {
    x: '1',
    y: '2'
  }
  const obj2 = {
    x: '1',
    y: '2',
    z: 4
  }
  printPoint(obj1);
  // все отработает, так как совпадают задекларированые ключи обьекта х и у и они имеют строковый тип
  printPoint(obj2);
  // отработает, как как есть совпадение с задекларироваными ключами х и у, осальные ключи в обьекте не важны по типу z
  //Если в каком либо обьекте obj1  или obj2 у ключей будет значение не string, то сразу будет ошибка(типо х: true)


  // Исползование медотов на ключи из обьектов
  function printName(user:{
    firstName: string,
    lastName?: string,
  }) :void {
    console.log(`hello, ${user.firstName.toUpperCase()}`);

    // Делаем проверку, из-за того что ключ lastName опциональный и на него используеться метод,
    // и он может быть undefind если в функцию передать только firstName.
    if (user.lastName) {
      console.log(`hello, ${user.lastName.toUpperCase()}`);
    }
  }
  printName({firstName: 'Andry'});
  printName({firstName: 'Andry', lastName: 'Kuz'});


  interface User {
    login: string,
    email: string,
    password: string,
    isOnLinne: boolean,
    lastVisited: Date
  }

  const user11: User = {
    login: 'koko',
    email: 'kok@bl.com',
    password: 'fdfd',
    isOnLinne: false,
    lastVisited: new Date(2024, 5, 21),
  }

  interface Admin {
    login: string,
    email: string,
    password: string,
    isOnLinne: boolean,
    lastVisited: Date,
    role: string
  }

  const admin: Admin = {
    login: 'koko',
    email: 'kok@bl.com',
    password: 'fdfd',
    isOnLinne: false,
    lastVisited: new Date(2024, 5, 21),
    role: 'mal'
  }

  function login(params:{login:string, password:string
  }): void {
    if(params.login || params.password) {
      console.log(`hello ${params.login}`);
    }
  }

  login(user11);
  login(admin);



  // типизация массивов
  const numbers = [1, 2, 3, 4];

  const gjgg: string[] = []; // обьявляем тип данных String для массива gjgg
  const gjgg2: Array<string> = []; // другая запись, аналогична первой

  // gjgg.push(2); будет ошибка , так как в массиве мы указали тип дпнных строка, а я пытаюсь добавить число 2


  interface Cars {
    wheels: number;
    brand: string;
  }

  const cars: Cars[] = [];
  cars.push({wheels: 2, brand:'audi'})

  // Union
  type Status = 'ok' | 'loading' | 'error';
  const testik: Status = 'loading';

  function printId(id: number | string): void {
    if(typeof id === 'string') {
      console.log(id.toLocaleLowerCase());
      
    } else 
    console.log(id);
    
  }

  function welcom(person: [string, string] | string) {
    if(Array.isArray(person)) {
      console.log('hello', person.join(' '));
      
    } else {
      console.log('hello', person);
      
    }
  }

  // pract task by union
type Level = 'junior' | 'middle' | 'senior';  // это литерал, когда level может принять только одно значение
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
// функция где беру обьек obj а конкретно интересует из обьекта ключ level, которому назначаем union Level
// newLevel нужен для перезаписи в ключе level, тоже с Level и ничем больше
function gradeDeveloper(obj: {level: Level}, newLevel: Level) {
  obj.level = newLevel;
}

const obj111: Developer = {
  level:'junior',
  login: 'Miha',
  skills: ['js', 'ts'],
}
// в функуии указываем обьект, и когда вывести скобки(пустую строку, будет подсказка что выбрать из Level)
gradeDeveloper(obj111, 'senior');