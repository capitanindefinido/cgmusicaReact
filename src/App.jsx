import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Productos CG"}/>
      <ItemCount/>
    </div>
  )
}

export default App