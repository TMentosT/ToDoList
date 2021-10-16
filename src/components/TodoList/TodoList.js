import React from 'react'
import {Row, Col, Button, FormControl} from 'react-bootstrap';
import s from './TodoList.module.css'

function TodoList ({todo, setTodo} ) {

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item =>item.id!=id)
        setTodo(newTodo)
    }

function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
        if(item.id == id) {
            item.status = !item.status
        }
        return item
    })
    setTodo(newTodo)
}

 

    return (
        <div>{
            todo.map (item => ( 
                <div key={item.id} className={s.listItems}>
                <div className={!item.status ? s.close : ''}>  {item.title}</div>
                
                <Button onClick={ ()=>deleteTodo(item.id)} className={s.btn}>Удалить</Button>
                <Button onClick={ ()=>statusTodo(item.id)}className={s.btn}>Закрыть/Открыть задачу </Button>
            </div>
            ))
            }
        </div>
    )
}

export default TodoList