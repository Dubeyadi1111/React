import { useSelector, useDispatch } from "react-redux";
import {Increment , Decrement} from "./redux/actions/CountActions"
function child (){
    let count =useSelector((store)=>store.countReducer)
    let dispatch=useDispatch()
    return(
        <>
        <h1>Redux child</h1>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>


        </>
    )
}
export default Child1