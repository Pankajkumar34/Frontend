// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CrudFile from './CrudFile/CrudFile';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReadDat from './CrudFile/ReadData';
import UpdateFile from './CrudFile/update';
import ViewData from './ViewData/ViewData';
function App() {
  return (
    <div className="App ">
<BrowserRouter>
<Routes>
  <Route path='/' element={<CrudFile/>}></Route>
  <Route path='/read' element={<ReadDat/>}></Route>
  <Route path='/edit/:id' element={<UpdateFile/>}></Route>
  <Route path='/view' element={<ViewData/>}></Route>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
