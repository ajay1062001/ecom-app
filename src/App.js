import './App.css';
import Counter from './components/Counter';
import ViewResturant from './components/ViewResturant';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import UpdateResturant from './components/UpdateResturant';
import AddResturant from './components/AddResturant';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path="/counter"  element={<Counter/>} />       
          <Route path="/resturant/view" element={<ViewResturant/>} />   
          <Route path="/resturant/update" element={<UpdateResturant/>} />    
          <Route path="/resturant/add" element={<AddResturant/>} />         
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
