import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navegacion } from './layouts/Navegacion';
import { Footer } from './layouts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'moment/locale/es';
import { Signup } from './pages/signup';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { Signin } from './pages/Signin';
import { getAutenticacionToken, setAutenticacionToken } from './connections/helpers/token';
import { RutaPrivada } from './routes/RutaPrivada';
import { CrearEstudiante } from './pages/CrearEstudiante';
import { CrearEmpresa } from './pages/CrearEmpresa';
import { CrearEncargado } from './pages/CrearEncargado';
import ConsultarDatosFormulario from "./components/ConsultarDatosFormulario";
import FileUploader from "./components/CrearArchivoFormulario";

getAutenticacionToken()
setAutenticacionToken()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route element={<RutaPrivada />}>
            <Route path='/estudiante' element={<CrearEstudiante />}/>
            <Route path='/empresa' element={<CrearEmpresa />}/>
            <Route path='/encargado' element={<CrearEncargado />}/>
            <Route path='/archivo' element={<FileUploader />}/>
            <Route path='/datos' element={<ConsultarDatosFormulario />}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
