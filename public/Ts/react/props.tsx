
import React, { useState } from 'react';

interface CardProps {
    id: string,
    title: string,
    compleated: boolean,
    children: React.ReactNode,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void
}




// использование без FC потому как там есть другие сущности при которіх нужно добавлять default props если вдруг не будут переданы сюда
const Card = ({ id, title, compleated, children, value, onChange, handleClick }: CardProps) => {

    const [text, setText] = useState('');
    //setText(2); будет сразу ошибка, как как по умолчанию с примитивами TS работает сразу и показывает что будет ошибка если не бдует строка

    const [arr, setArr] = useState(['']); 
    // если массив не пустой то его тоже не нужно типизировать

    // если же это не приметив а допустим пустой массив бзе какой либо конкретики что там будет то
    const [todos, setTodos] = useState<string[]>([]); // всегда типизировать только string

    const [open, setOpen] = useState<boolean | null>(null); // в таком случае всегда нужно будет проверять нал ли это или нет




return (
    <li>
        <input type="checkbox" checked={compleated} value={value} onChange={onChange} />
        <span>{title}</span>
        <span>&times</span>
        {children}

        <button onClick={handleClick}>Add todo</button>
    </li>
)
    
}
  
export default Card;