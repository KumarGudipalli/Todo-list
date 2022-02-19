import "./input.css"
 import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import { saveTodo } from "../features/todoslice"


function Input() {
 const [input, setInput] = useState('')
 const dispatch = useDispatch()

    const addtodo = () => {
        console.log(`Adding${input}`);

        dispatch(saveTodo({
          item:input,
          done:false,
          id:Date.now()
        }))
        setInput(" ")
  }
    return (
    <div className='input'>
        <input type="text" value={input} onChange={(e)=>{
setInput(e.target.value)
        }} />
        <button className="cbtn" onClick={addtodo}>Add Todo</button>
    </div>
  )
}

export default Input