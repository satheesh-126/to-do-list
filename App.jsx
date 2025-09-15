import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Task from './components/Task';
import Listtasks from './components/Listtasks';
import Twoway from './components/Twoway';
// import Home from './components/Home';
// import Stcomp from './components/Stcomp';
// import Conditional from './components/Conditional';
// import Procomp from './components/Procomp';
// import LocalStorageDemo from './components/LocalStorageDemo';

function App(){
return(
  <div>
      <BrowserRouter>
      <nav>
        <Link to={"/Task"}>Task || </Link>
        <Link to={"/Listtasks"}>Listtasks ||</Link>
        <Link to={"/Twoway"}>Twoway ||</Link>
      </nav>  
      <Routes>
        <Route path='/Task' element={<Task />} />
        <Route path='/Listtasks' element={<Listtasks />} />
        <Route path='/Twoway' element={<Twoway />} />
      </Routes>
      </BrowserRouter> 
  </div>
  
)
}
export default App