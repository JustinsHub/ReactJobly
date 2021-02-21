import Jobly from './components/Jobly'
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Jobly/>
      </BrowserRouter>
    </div>
  );
}

export default App;
