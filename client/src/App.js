import logo from './logo.svg';
import './App.css';
//import CreateProductPage from './views/CreateProductPage/CreateProductPage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
//          <Route path='/' index element={<CreateProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
