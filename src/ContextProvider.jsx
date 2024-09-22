import { createContext, useContext, useReducer, useState } from "react";
//Create Context
const AppContext=createContext()

//Pass values from context
function ContextValues(){
    return useContext(AppContext)
}

//dispatch reducer function
function ActionFunction(state,action){
    if(action.type==="ADD"){
        return [...state, {Complete:false, Text:action.value, Id:crypto.randomUUID()}]
    }
    if(action.type==="Complete"){
        return state.map(item=>item.Id===action.value?  (item.Complete===false?{...item,Complete:true}:{...item,Complete:false}):item)
    }
    if(action.type==="Delete"){
        return state.filter(item=>item.Id!==action.value)
    }

}
function ContextProvider({children}){
    const [InputData,setInputData]=useState("")
    const [state,dispatch]=useReducer(ActionFunction,[])
    function AddData(){
        if(InputData.trim()===0){
            return
        }
        dispatch({
            type:"ADD",
            value:InputData
        })
    }
    function CompleteTask(id){
        dispatch({
            type:"Complete",
            value:id
        })
    }
    function DeleteTask(id){
        dispatch({
            type:"Delete",
            value:id
        })
    }
    return(
        //Use that context
        <AppContext.Provider value={{state,InputData,CompleteTask, setInputData,AddData,DeleteTask }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider
export {ContextValues}