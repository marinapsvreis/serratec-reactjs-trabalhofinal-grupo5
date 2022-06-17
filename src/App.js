import { Root } from './Routes/Root'
import { Contexto } from "./Context/data"
import "./Pages/global-style.css"
import { Navbar } from "./Components/Navbar"

export function App() {
  return (
    <>
    <Contexto>
      <Navbar/>
      <Root/>
    </Contexto>
    </>
  );
}
