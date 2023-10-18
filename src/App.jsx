import './App.css'
import FormPacienteFormik from './components/Formik/FormPacienteFormik'
import PagPrincipal from './components/PagPrincipal/PagPrincipal';
import FormPaciente from './components/formPaciente/FormPaciente'
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {

  return (
    <>
    <BrowserRouter>
      {/*<NavBar />*/}
      <Routes>
        <Route exact path="/" element={<PagPrincipal/>} />
        <Route exact path="/cargarPaciente" element={<FormPacienteFormik/>} />

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
