import { useEffect, useRef } from 'react'
import {ContextValues} from './ContextProvider'

function TodoForm(){
    const inputFocus=useRef()
    useEffect(()=>{
        inputFocus.current.focus()
    },[])
    
    const Data=ContextValues()
    function AddList(e){
        e.preventDefault()
        if(Data.InputData.trim().length===0){
            return
        }
        Data.AddData()
        Data.setInputData("")
    }
    return(
        <div  className="FormTop">
            <form onSubmit={(e)=>AddList(e)}>
                <input type="text" name="AddItem" id="AddItem" ref={inputFocus} onChange={(e)=>Data.setInputData(e.target.value)} value={Data.InputData}/>
                <button type="submit">Add New</button>
            </form>
        </div>
    )
}

export default TodoForm