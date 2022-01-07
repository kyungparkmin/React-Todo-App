import React, {useState, useContext} from 'react'
import TodoContext from '../Contexts/TodoContext.js';


export default function Todo(props) {
    const {todo} = props;
    const {dispatch} = useContext(TodoContext);
    const {id, content, done} = todo;
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;
      if (isEditing) {
        todoContent = (
          <>
            <inputl
              value={content}
              onChange={(e) =>
                dispatch({
                  type: "change",
                  todo: { ...todo, content: e.target.value },
                })
              }
            />
            <button onClick={() => setIsEditing(false)}>저장</button>
          </>
        );
      } else {
        todoContent = (
          <>
            {content}
            <button onClick={() => setIsEditing(true)}>수정</button>
          </>
        );
      }
  return (
    <div>
      <input type="checkbox" 
      checked={done}
      onChange={(e) =>
        dispatch({
            type:"change",
            todo:{...todo, done:e.target.checked},
        })
      }
      />
      {todoContent}
      <button onClick={()=>dispatch({type:"delete", id:todo.id})}>삭제</button>
      </div>
  )
}