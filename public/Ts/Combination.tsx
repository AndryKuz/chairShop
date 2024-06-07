
let str = 'hi';
type x = typeof str;

// условные типы
const x = 16
const isX = x >= 0 ? 'no' : 'yes';

interface StringRecord {
    [key: string]: string,
}

interface DateRecord {
    [key: string]: Date,
}
// суть такова что в тип MyRecord с переменной типом <T>(который потом прийдет с obj1) и тут мы сравниваем T(который будет <string>) и string 
// с помощью extend. Если будет true то сработает интерфейс StringRecord, а если false(то есть типы не совпадут, то будет интерфейс DateRecord)
type MyRecord<T> = T extends string ? StringRecord : DateRecord;
type obj1 = MyRecord<string>;
// создаем обьект, в котором ключи могут быть только string , тк const j - указывает тип obj1
const j: obj1 = {
    g: 'gdsgds',
    hf: '343',
}

//      infer

function fromPair(pair: [string, string]) {
    const [key, value] = pair;

    return {
        [key]: value
    }
}

// в type приходит функция в переменную T, которую проверяем на условие что есть первый параметр(он же pair в функции fromPair),
// и на всякий случай что есть еще какие то параметры, но нас они не интересуют это - ...arg: any[]
// И что бы получить первое значене, мы назначаем First переменную для first + через infer(который определит тип переданной функции)
// Если тип передать функцию в которой не будет параметра, то мы вернем never, так как не будет переменной First
type FirstArg<T> = T extends (first: infer First, ...arg: any[]) => any ? First : never;

// в константу вкалдываем пару значений, и делаем проверку с помощью type FirstArg у которого есть хелпер проверки типов с помощью typeof
const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue']


// мапинг типов

type PcBrand = {
    name: string,
    country: string,
    createAt: Date,
}

type WellKnow = 'apple' | 'lenovo' | 'hp';

type MyPcRec = {
    [MyBrandKey in WellKnow]?: PcBrand // опициональный параметр нужен что бы не использовать все юниты в WellKnow, потому в const brandRecord
    // используем только hp и все, а без ,,?,, пришлось бы писать обьект для apple and lenovo

}

const brandRecord: MyPcRec = {
    hp: {
        country: 'USA',
        name: 'ds',
        createAt: new Date()
        // если нужно использовать структуру типа PcBrand опционально то в type MyPcRec нужно [MyBrandKey in WellKnown]?: Partial<PcBrand>  

    }
}

function printPc(pcCat: MyPcRec) {
    console.log(pcCat.hp?.createAt);        // так как MyPcRec есть структура обьекта, то при наборе сначала первого аргумента(pcCat.) после точки
    // будут подсказки сначала все юниты из type WellKnow а потом сама структура обьекта из type PcBrand


}

type PartOfWindow = {
    [Key in 'document' | 'screen' | 'navigator']?: Window[Key]
}

const p: PartOfWindow = {
    screen: window.screen,
}

// утилиты

// исключение
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 1 параметр это юнионы, 2 параметр - должен быть исключен из первого
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // тут результат будет в Т1 только 'c' так как 2 параметр тоже юнит
type T2 = Exclude<'a' | 'b' | 'c', 'a' | 'b' | 'd' | 'g'>;// если передать во втором аргументе то что нет в 1 то ошибки не будет, все так же будет 'c'
type T3 = Exclude<string | number | (() => void), Function> // убираем функцию

type Status = 'success' | 'error' | 404 | 200 | 504;
type OnlyNumeric = Exclude<Status, string> // так как ставим 2 параметр строку, то получаем type только юнионы с числамми
type OnlyText = Exclude<Status, number>; // оставляем только строки

//извлечение  (случай когда нужно взять малую часть сущностей из большего количества)
type T4 = Extract<'a' | 'b' | 'c', 'a'>;
type T5 = Extract<'a' | 'b' | 'c', 'a' | 'b'>;
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'b' | 'd' | 'g'>;
type T7 = Extract<string | number | (() => void), Function>

interface Person {
    age: number,
    firstName: string,
    lastName: string,
    sex: 'male' | 'female',
    country: string,
    skills: string[],
}
type PersonName = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>

// Утилита которая фильтрует пустые значение из юнионов
type T8 = NonNullable<string[] | null | undefined>;

type WellKnowBrands = 'apple' | 'lenovo' | 'hp';
type Names = Record<WellKnowBrands, string>;

const myBrands: Names = {
    apple: 'fs',
    hp: 'fsf',
    lenovo: 'fs'
}


interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createAt?: number
}

// утилита pick ( что нужно оставить из всего интерфейса)
type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>
const todo1: SimpleTodo = {
    completed: true,
    id: 'fdf',
    title: 'fdf',
}

//утилитиа Omit ( то что мы хотим удалить из интейфеса)
type DelTodo = Omit<Todo, 'title' | 'completed'>
const todo2: DelTodo = {
    createAt: 32,
    description: 'fs',
    id: '',
}

// допустим есть interface в котором нужно все ключи поставить в readonly(несмотря на то что они опициоанльные или не)
type ReadOnlyTodo = Readonly<Todo>;

// утилита которая делает все поля не обязательными( то есть если я захожу создать const todo22:PartialTodo ={тут не обязательно вносить все ключи})
type PartialTodo = Partial<Todo>

// утилита что бы убрать гибкость( если ключи некоторые были опциональные)
type RequiredTodo = Required<Todo>

const todo22:PartialTodo = {
    completed: true,
}

function f1(arg: {a: number; b: string}) {
    return arg.a + arg.b
}
// утилита которая возвращает тип даныых. Допустим есть функция f1 у которой ненту явного вывода типа данных, и что бы его полусить - ReturnType
type T90 = ReturnType<typeof f1>

// проверка входиных параметров ( вместо Infer где я создаю переменную и туда захошу тот тип данныых который попадает )
type T91 = Parameters<typeof f1>


// досутп по индексу

interface DataModel {
    id:string,
    title: string,
    elements: {
        header: {
            tittle: string,
            links: string[]
        },
        footer: {
            description: string,
            title: string
        },
        body: [
            {
                title: string,
                content: {},
            }
        ]
    }
}

type T87 = DataModel['elements']
type T77 = DataModel['elements']['footer']

type someTuple = [number, string, boolean, ...string[]]; // number, string, boolean - обяхательные параметры, ...string[] - не обязательные
const arr: someTuple = [1, 'dfg', true]
const someArr: someTuple = [1, 'dfg', true, 'fds','fsf',''] // использование необязательных параметров ...string[]
// const someArrError: someTuple = [1, 'dfg', true, 'fds', 2]   тут будет ошибка из-за 2 ( так как после несовпадает структура параметров)
// после ...string[] ничего нету, а мы поставили number

type T88 = someTuple[2]; // Обращаемся по индексу к type someTuple и вносим в type T88 тип данных boolean 

// as const - указывает что массив будет readonly( то есть в этот масив уже не получиться ничего запушить)
const sizes = ['s', 'l', 'm'] as const;

type T67 = typeof sizes
// отличие от Т67, то что мы из масива readonly делаем все элементы массива юнионами
type T66 = typeof sizes[number]


// шаблонные литералы( это тип который принимает одно конкретное значение)

type Side = 'top' | 'right' | 'bottom' | 'left';
// пример для css
type Margin = `margin-${Side}`
type Padding = `padding-${Side}`
// пример для js
type MrginJs = `margin${'' | Capitalize<Side>}`


type Direction = 'down' | 'left' | 'right' | 'bottom';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';

type FadeClassName = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`



interface Car {
    brand: string,
    model: string,
    year: number,
}

type CarFactory = {
    [Key in keyof Car as `set${Capitalize<Key>}`]: (car: Car, value: Car[Key]) => void
}
// pract
type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';
 
// border-style
type BorderStyle = `${Uncapitalize<'' | Style>} ${Uncapitalize<'' | Color>}`
 
let borderStyle: BorderStyle = 'solid red';
let borderStyle2: BorderStyle = 'dashed white';