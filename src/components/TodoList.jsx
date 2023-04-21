import React from 'react'
//importing components
import Task from './Task'

function TodoList({list, setList,filter}) {
  return (
    <div className="container_todoList">
        <ul className='todoList'>
            {filter.map(task =>(
                <Task key={task.id}
                      text={task.text}
                      list={list}
                      setList={setList}
                      task={task}
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList