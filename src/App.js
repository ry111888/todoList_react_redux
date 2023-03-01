import './App.css';
import TodoIndex from './components/TodoIndex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/todo' element={<TodoIndex/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
