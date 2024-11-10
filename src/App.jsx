import './App.css'
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from './Pages/login'
import { Home } from './Pages/home'
import { Healthy } from './Pages/healthy'
import { Program } from './Pages/program'
import { Waste } from './Pages/waste'


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/healthy" element={<Healthy/>}/>
            <Route path="/program" element={<Program/>}/>
            <Route path="/waste" element={<Waste/>}/>
        </Routes>
    </Router>
  )
}

export default App
