
import './App.css';

import { BrowserRouter, Navigate, Routes, Route  } from 'react-router-dom';

import ShowRegions from './components/ShowRegions';
import CreateRegion from './components/CreateRegions';
import EditRegion from './components/EditRegions'; 
import ShowProvincias from './components/provincias/ShowProvincias';
import CreateProvincias from './components/provincias/CreateProvincias';
import EditProvincias from './components/provincias/EditProvincias';
import EditCalles from './components/calles/EditCalles'; 
import NavBarApp from './layouts/navbar';

import Home from './components/menu/home';
import Regiones from './components/ShowRegions';
import Provincias from './components/provincias/ShowProvincias';
import Ciudades from './components/ciudades/ShowCiudades';
import CreateCiudad from './components/ciudades/CreateCiudad';
import Calles from './components/calles/ShowCalles';
import CreateCalle from './components/calles/CreateCalles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarApp/> }></Route>
            <Route path='home' element={ <Home /> }></Route>
            <Route path='regions' element={ <Regiones /> }></Route>
              <Route path='/edit/:id' element={ <EditRegion/> }/>
              <Route path='/create' element={ <CreateRegion/> }/>
            <Route path='provincias' element={ <Provincias /> }></Route>
              <Route path='/createProv' element={ <CreateProvincias/> }/>
              <Route path='/EditProvincia/:id' element={ <EditProvincias/> }/>
            <Route path='ciudades' element={ <Ciudades /> }></Route>
              <Route path='/createCiudad' element={ <CreateCiudad/> }/>
            <Route path='calles' element={ <Calles /> }></Route>
              <Route path='/createCalle' element={ <CreateCalle /> }></Route>
              <Route path='/EditCalles/:id' element={ <EditCalles/> }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
