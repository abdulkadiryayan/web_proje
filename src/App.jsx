import './App.css'
import  ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() { 

  return (
    <>
      <Router>
        <Routes>
            {/* // http://localhost:3000 */}
            <Route path = '/' element = { <ListEmployeeComponent/>}></Route>
            {/* // http://localhost:3000/employees */}
            <Route path = '/employees' element = { <ListEmployeeComponent/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App











