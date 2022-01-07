import TodoList from '../src/Components/TodoList.js';
import React, {useReducer } from "react"
import TodoContext from 'Contexts/TodoContext.js';

function todosReducer(todos, action) {
  switch (action.type) {
      case "add": {
          return [
              ...todos,
              {
                  id: action.id,
                  content: action.content,
                  done: false,
              },
          ];
      }

      case "change": {
          return todos.map((item => {
              console.log(action, item, "in app");
              if (item.id === action.todo.id) {
                  return action.todo;
              } else {
                  return item;
              }
          }))
      }

      case "delete": {
          return todos.filter((item) => item.id !== action.id);
      }

      default: {
          throw Error("action error : " + action.type);
      }
  }
}

function App(){
  const [todos, dispatch] = useReducer(todosReducer, [])
  return(
    <div>
      <TodoContext.Provider value={{todos, dispatch}}>
        <TodoList/>
      </TodoContext.Provider>
    </div>
  );
}
export default App;