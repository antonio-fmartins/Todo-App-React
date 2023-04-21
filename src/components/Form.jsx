import React, { useState } from 'react'

function Form({inputText,setInputText,list,setList,setStatus}) {

    const inputHandle = (e)=>{
        setInputText(e.target.value)
    }

    const addTaskHandle = (e)=>{ 
        e.preventDefault()
        setList([
            ...list,
            {
                text:inputText,
                completed:false,
                id:Math.random()
            }
        ])
        setInputText('')
    }

    const filterHandle = (e)=>{
      setStatus(e.target.value)
    }

  return (
    <form>
          <div className='input'>
            <input value={inputText} onChange={inputHandle} className="input_text" type="text" placeholder='Input your Task'/>
            <button onClick={addTaskHandle} className="btn-add">
                <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className='select'>
            <select onChange={filterHandle} className='filter'>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
    </form>
  )
}

export default Form