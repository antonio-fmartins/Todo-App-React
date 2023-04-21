import './index.css'
import { useState, useEffect} from 'react'
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [list, setList] = useState([])
  const [status, setStatus] = useState('All')
  const [filter, setFilter] = useState([])

  useEffect(()=>{
    filterHandler()
  },[list,status])

const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilter(list.filter(el => el.completed === true))
        break;
      case 'uncompleted':
        setFilter(list.filter(el => el.completed === false))
        break;
      default:
        setFilter(list)
    }
}

  return (
    <div className="App">
        <h1>Antonio´s Todo App</h1>
        <Form inputText={inputText}
              setInputText={setInputText}
              list={list}
              setList={setList}
              setStatus={setStatus}
        />
        <TodoList list={list}
                  setList={setList}
                  setInputText={setInputText}
                  inputText={inputText}
                  filter={filter}
        />
    </div>
  )
}

export default App
