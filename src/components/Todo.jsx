import { useSelector } from "react-redux"

export default function Todo() {
    const todo = useSelector(state => state.todo.value)

        return(
            <div>
                <h1>{todo} </h1>
            </div>
        )
}
