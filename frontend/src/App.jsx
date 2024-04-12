import { useState } from 'react'
import { Route,Routes} from "react-router-dom";
import './App.css'
import NamePage from "./components/NamePage";
import MainDashboard from './components/MainDashboard';
import Form from './components/Form';
import Task from './components/Task';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route exact path='/' Component={NamePage}/>
        <Route exact path='/dashboard/:name' Component={MainDashboard}/>
        <Route exact path='/form/:name' Component={Form}/>
        <Route exact path='/partner/:partnername/:name' Component={Task}/>
       </Routes>
    </>
  )
}

export default App
