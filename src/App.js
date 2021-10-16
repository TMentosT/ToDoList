import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';



function App() {
 
 const [todo, setTodo] = useState([
   {
     id: 1,
     name: '11',
     title: 'Приготовить ужин',
     status: true
   },
   {
    id: 2,
    name: '12',
    title: 'Сделать курсовую',
    status: true
  },
  {
  id: 3,
  name: '21',
  title: 'Оплатить проездной',
  status: false
  },
  {
    id: 4,
    name: '12',
    title: 'Покормить кота',
    status: false
  },
  {
    id: 5,
    name: '12',
    title: 'Встать рано',
    status: true
  },
  {
    id: 6,
    name: '12',
    title: 'Сделать отчет',
    status: false
  }
 ])

 
  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
