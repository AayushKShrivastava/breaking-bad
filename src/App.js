import './App.css';
import Home from './Home';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CharacterInfo from "./CharacterInfo"
import Characters from './Characters'
import Quotes from "./Quotes"
import Navbar from './Navbar';
import Deaths from './Deaths'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/deaths' element={<Deaths key={6}/>} />
          <Route path='/quotes' element={<Quotes key={5}/>} />
          <Route path='/character-info' element={<CharacterInfo key={2}/>} />
          <Route path='/' element={[<Navbar key={3}/>, <Home key={1}/>, <Characters key={4}/>]} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
