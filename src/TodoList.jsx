function TodoList({item,Data}){
    
    return(
        <div className="EachLine">
            <input type="checkbox" id="Check" onChange={()=>Data.CompleteTask(item.Id)} name="Check" checked={item.Complete}/>
            <div className="TaskName">
            <label className={item.Complete===false?"":"Cross"} htmlFor="Text">{item.Text}</label>
            </div>
            <div className='Delete' onClick={()=>Data.DeleteTask(item.Id)}>
                x
            </div>
        </div>
    )
}

export default TodoList