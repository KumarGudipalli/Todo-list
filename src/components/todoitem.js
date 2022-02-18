import  Checkbox  from '@material-ui/core/Checkbox'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoslice'
import "./todoitem.css"
 

function Todoitem({name,done,id}) {
  const dispatch = useDispatch()
    const handleChange = () => {
      dispatch(setCheck(id))   
    }
  return (
    <div className='todoItem'>
<Checkbox
  checked={done}
  color = "primary"
  onChange={handleChange}
  inputProps={{ 'aria-label': 'secondary checkbox' }}
/>

<p className={done && 'todoItem__done'}>{name}</p>
   </div>
  )
}

export default Todoitem