import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {ContextValues} from './ContextProvider'
function TodoBox(){
    const Data=ContextValues()
    return(
        <div className='Box'>
            <TodoForm/>
            {Data.state.length!==0? Data.state.map(item=><TodoList key={item.Id} item={item} Data={Data}/>):<p className='Eampty'>Nothing is here</p>}
        </div>
    )
}

export default TodoBox