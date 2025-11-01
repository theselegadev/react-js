import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../Hooks/useCounterContext"
import { useTitleColorContext } from "../Hooks/useTitleColorContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  const {color,dispatch} = useTitleColorContext()
  
  const changeTitleColor = (color)=>{
    dispatch(color)
  }

  return (
    <div>
        <h1>Home</h1>
        <p style={{color}}>{counter}</p>
        <ChangeCounter/>
        <div>
          <button onClick={()=>changeTitleColor("RED")}>Vermelho</button>
          <button onClick={()=>changeTitleColor("BLUE")}>Vermelho</button>
        </div>
    </div>
  )
}

export default Home