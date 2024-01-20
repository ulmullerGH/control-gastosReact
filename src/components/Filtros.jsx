import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombre contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                <option value="">Todas las categorias</option>
                    <option value="comida">Comida</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="gym">Gym</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="alquiler">Alquiler</option>
                </select>
            </div>
        </form>
        
    </div>
  )
}

export default Filtros