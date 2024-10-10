import { Route, Routes } from 'react-router-dom';
import './App.css';
import Log from './pages/Log';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Log/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
