import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Task from './components/Task';
import Listtasks from './components/Listtasks';
import Twoway from './components/Twowaybind';


function App(){
return(
  <div>
      <BrowserRouter>
      <nav>
        <Link to={"/Task"}>Task || </Link>
        <Link to={"/Listtasks"}>Listtasks ||</Link>
        <Link to={"/Twowaybind"}>Twoway ||</Link>
      </nav>  
      <Routes>
        <Route path='/Task' element={<Task />} />
        <Route path='/Listtasks' element={<Listtasks />} />
        <Route path='/Twowaybind' element={<Twoway />} />
      </Routes>
      </BrowserRouter> 
  </div>
  
)
}
export default App
