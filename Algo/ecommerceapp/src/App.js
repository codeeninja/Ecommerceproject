import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Nav from './Nav';
import Privatecomp from './Privatecomp';
import Logins from './Logins';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Updateproduct from './Updateproduct';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Privatecomp />} > 
      <Route path='/Product' element={<ProductList />}/>
      <Route path='/add' element={<AddProduct />}/>
      <Route path='/update/:id' element={<Updateproduct />}/>
      <Route path='/logout' element={<h1>Logout component</h1>}/>
      <Route path='/profile' element={<h1>Profile component</h1>}/>
      </Route>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Logins />} />
      </Routes>
    </div>
  );
}

export default App;
