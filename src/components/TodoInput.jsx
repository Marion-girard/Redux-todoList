import { useState } from "react"
import { useDispatch } from "react-redux"
import { incrementTodo } from "../slices/todoSlice"

export default function TodoInput() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    
    return(
        <div>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={()=>dispatch(incrementTodo(todo))}>ajouter</button>
        </div>
    )
}
