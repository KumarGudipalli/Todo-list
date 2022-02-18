import "./input.css"
 import { useState } from "react"
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
  }
    return (
    <div className='input'>
        <input type="text" value={input} onChange={(e)=>{
setInput(e.target.value)
        }} />
        <button onClick={addtodo}>Add Todo</button>
    </div>
  )
}

export default Input