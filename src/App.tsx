import '../src/styles/global.scss'
import { IconG } from './assets/icons'
import ContainerPedidos from './components/ContainerPedidos'
import ContainerResumo from './components/ContainerResumo/idex'
import MenuLeft from './components/MenuLeft'

export default function App() {
  return (
    <div className="main">
      <MenuLeft />
      <ContainerPedidos />
      <ContainerResumo/>
      {IconG}
    </div>
  )
}

