import { Root } from './Routes/Root'
import { Contexto } from "./Context/data"
import "./Pages/global-style.css"

export function App() {
  return (
    <>
    <Contexto>
      <Root/>
    </Contexto>
    </>
  );
}
