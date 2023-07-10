import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Productos CG"}/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={"Productos CG"}/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      <ItemCount/>
      
    </>
  )
}

export default App