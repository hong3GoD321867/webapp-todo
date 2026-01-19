import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([{
    id: Date.now(),
    text: "abcd",
    complete: false
  },{
    id:Date.now()+1,
    text:"1234",
    complete:false
  },{
    id:Date.now()+1,
    text:"가나다라",
    complete:false
  }]);
  const [inputValue, setInputValue] = useState("");

  // 입력값 변경
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Todo 추가
  const handleSubmit = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      complete: false,
    };

    setTodos(prev => [...prev, newTodo]);
    setInputValue("");
  };

  // Todo 삭제
  const deleteItem = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Todo 완료 토글
  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
         <input
         type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>확인</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleTodo(todo.id)}
            />

            <span
              style={{
                textDecoration: todo.complete ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteItem(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
