import React from 'react'
import { Link } from 'react-router-dom'

export default function PagPrincipal() {
  return (
    <div>
        <h1>bIENVENIDO AL HOSPITALAZO PAPU</h1>
        <Link to={'/cargarPaciente'}>Crear paciente</Link>
    </div>
  )
}
