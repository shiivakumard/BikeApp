import { Route, Routes } from 'react-router-dom';
import './App.css';
import Log from './pages/Log';
import Dashboard from './pages/Dashboard';
import Linkk from './utill/Linkk';


function App() {
  return (
    <div className="App">
      <Linkk/>
     <Routes>
      <Route path='log' element={<Log/>}/>
      <Route path='/' element={<Dashboard/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
