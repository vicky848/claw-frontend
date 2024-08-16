import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Todo from './Components/Todo';

import './App.css';


function App() {


return(
  <Router>
<Routes>
<Route path='/' element={<Login/>}/>

<Route path = '/register' element={<Register/>}/>
<Route path='/todo' element={<Todo/>} />



</Routes>

  </Router>


)
  

}
  

export default App;