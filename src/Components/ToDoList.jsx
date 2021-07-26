import React from 'react'

function ToDoList(props) {

 
    return (<> 
    <div className="todo-style">
    <i className="fa fa-times"  arua-hidden="true" onClick={()=> { props.onSelect(props.id)}} />
             <li>{props.text}</li> 

    </div>  

</>
    
    
    )
}

export default ToDoList
