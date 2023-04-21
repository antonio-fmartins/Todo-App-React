import React from 'react'


function task({text,list,setList,task}) {

  const deleteTaskHandle = ()=>{
    setList(list.filter(el=> el.id !== task.id))
  }

  const completedTaskHandle = ()=>{
    setList(list.map(item =>{
      if(item.id == task.id){
        return{
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }


  return (
    <div className='task'>    
        <input onClick={completedTaskHandle} type="checkbox"/>
        <li className={`nameTask ${task.completed ? 'completed' : ""}`}>{text}</li>
        <button onClick={deleteTaskHandle} className='btn-delete'>
            <i className="fa-solid fa-trash-can"></i>
        </button>
    </div>
  )
}

export default task